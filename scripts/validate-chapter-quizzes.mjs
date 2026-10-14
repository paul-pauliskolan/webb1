import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const chapterDir = path.join(root, "chapters");
const failures = [];
let quizCount = 0;
let questionCount = 0;

function extractQuiz(source, filename) {
  const call = source.lastIndexOf("window.renderQuiz(");
  if (call < 0) return null;
  const start = source.indexOf("{", source.indexOf(",", call));
  let depth = 0;
  let quote = "";
  let escaped = false;
  for (let i = start; i < source.length; i += 1) {
    const char = source[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = "";
      continue;
    }
    if (char === '"' || char === "'" || char === "`") quote = char;
    else if (char === "{") depth += 1;
    else if (char === "}" && --depth === 0) {
      return vm.runInNewContext(`(${source.slice(start, i + 1)})`, {}, { filename });
    }
  }
  throw new Error(`${filename}: trasigt quizobjekt.`);
}

for (const file of fs.readdirSync(chapterDir).filter((name) => /^chapter-\d+-\d+\.html$/.test(name)).sort()) {
  const quiz = extractQuiz(fs.readFileSync(path.join(chapterDir, file), "utf8"), file);
  if (!quiz) continue;
  quizCount += 1;
  if (!Array.isArray(quiz.questions) || quiz.questions.length !== 5) failures.push(`${file}: ska ha exakt 5 frågor.`);
  for (const [index, question] of (quiz.questions || []).entries()) {
    questionCount += 1;
    const label = `${file}, fråga ${index + 1}`;
    if (!question.question?.trim()) failures.push(`${label}: frågetext saknas.`);
    if (!Array.isArray(question.options) || question.options.length !== 4) failures.push(`${label}: ska ha exakt 4 alternativ.`);
    if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) failures.push(`${label}: ogiltigt facit.`);
    if (new Set(question.options || []).size !== 4) failures.push(`${label}: alternativen är inte unika.`);
    if (!question.feedback?.trim() || !question.explanation?.trim()) failures.push(`${label}: feedback eller förklaring saknas.`);
    if (/alla ovan|inget av ovan|all of the above|none of the above/i.test((question.options || []).join(" "))) failures.push(`${label}: förbjudet samlingsalternativ.`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Godkände ${quizCount} quiz med ${questionCount} frågor.`);
