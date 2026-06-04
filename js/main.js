const CURRENT_SCRIPT = document.currentScript;
const CHAPTERS_URL = new URL(
  "../data/chapters.json",
  CURRENT_SCRIPT?.src || window.location.href,
).href;

const state = {
  chapters: [],
  loading: null,
};

function chapterUrl(chapterNumber) {
  const fromChapterFolder = window.location.pathname.includes("/chapters/");
  return fromChapterFolder
    ? `chapter-${chapterNumber}.html`
    : `chapters/chapter-${chapterNumber}.html`;
}

function renderSummary(chapter) {
  const summary = document.getElementById("chapter-summary");
  if (!summary) return;

  const topics = Array.isArray(chapter.keyTopics) ? chapter.keyTopics : [];
  summary.innerHTML = `
        <p class="eyebrow">Kapitel ${chapter.number}</p>
        <h2>${chapter.title}</h2>
        <p>${chapter.description || chapter.summary || ""}</p>
        ${chapter.summary ? `<p>${chapter.summary}</p>` : ""}
        ${topics.length ? `<div class="key-topics">${topics.map((topic) => `<span>${topic}</span>`).join("")}</div>` : ""}
    `;
}

function renderSections(chapter) {
  const sections = document.getElementById("chapter-sections");
  if (!sections) return;

  const items = Array.isArray(chapter.sections) ? chapter.sections : [];
  sections.innerHTML = items.length
    ? `
            <section class="content-section">
                <h2>Innehåll</h2>
                <ol>
                    ${items.map((section) => `<li>${section}</li>`).join("")}
                </ol>
            </section>
        `
    : "";
}

function renderResources(chapter) {
  const resources = document.getElementById("chapter-resources");
  if (!resources) return;

  const links = Array.isArray(chapter.resources) ? chapter.resources : [];
  resources.innerHTML = links.length
    ? `
            <section class="content-section">
                <h2>Resurser</h2>
                <ul>
                    ${links.map((resource) => `<li><a href="${resource.url}">${resource.label || resource.url}</a></li>`).join("")}
                </ul>
            </section>
        `
    : "";
}

function renderVideos(chapter) {
  const videos = document.getElementById("chapter-videos");
  if (!videos) return;

  const items = Array.isArray(chapter.videoSuggestions)
    ? chapter.videoSuggestions
    : [];
  videos.innerHTML = items.length
    ? `
            <section class="content-section">
                <h2>Videoförslag</h2>
                <ul>
                    ${items.map((video) => `<li>${video}</li>`).join("")}
                </ul>
            </section>
        `
    : "";
}

function renderChapterNav(chapter) {
  const nav = document.querySelector(".chapter-nav");
  if (!nav) return;

  const prevChapter = state.chapters.find(
    (item) => item.number === chapter.number - 1,
  );
  const nextChapter = state.chapters.find(
    (item) => item.number === chapter.number + 1,
  );

  nav.innerHTML = `
        <div class="chapter-nav-links">
            ${prevChapter ? `<a href="${chapterUrl(prevChapter.number)}" class="chapter-nav-link chapter-nav-prev">Föregående kapitel</a>` : ""}
            <a href="../index.html" class="chapter-nav-link chapter-nav-home">Till startsidan</a>
            ${nextChapter ? `<a href="${chapterUrl(nextChapter.number)}" class="chapter-nav-link chapter-nav-next">Nästa kapitel</a>` : ""}
        </div>
    `;
}

function renderChapterPage(chapterNumber) {
  const chapter = getChapter(chapterNumber);
  if (!chapter) return false;

  document.title = `Kapitel ${chapter.number} - ${chapter.title}`;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute(
      "content",
      chapter.description || chapter.summary || "",
    );
  }

  renderSummary(chapter);
  renderSections(chapter);
  renderVideos(chapter);
  renderResources(chapter);
  renderChapterNav(chapter);

  return true;
}

function getChapter(chapterNumber) {
  return state.chapters.find((chapter) => chapter.number === chapterNumber);
}

async function loadChapters() {
  if (!state.loading) {
    state.loading = fetch(CHAPTERS_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Kunde inte hämta kapiteldata: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        state.chapters = Array.isArray(data.chapters) ? data.chapters : [];
        return state.chapters;
      })
      .catch((error) => {
        console.error(error);
        state.chapters = [];
        return state.chapters;
      });
  }

  return state.loading;
}

function initPage() {
  loadChapters().then(() => {
    const match = window.location.pathname.match(/chapter-(\d+)\.html$/);
    if (match) {
      renderChapterPage(parseInt(match[1], 10));
    }
  });
}

window.webbook = {
  getChapter,
  loadChapters,
  renderChapterPage,
};

document.addEventListener("DOMContentLoaded", initPage);
