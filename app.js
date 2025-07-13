const NEWS_PROXY = "/api/news";        
const DEFAULT_QUERY = "weather";

window.addEventListener("load", () => fetchNews(DEFAULT_QUERY));

function reload() {
  window.location.reload();
}

async function fetchNews(query) {
  try {
    const res = await fetch(`${NEWS_PROXY}?q=${encodeURIComponent(query)}`);
    const { articles = [] } = await res.json();
    bindData(articles);
  } catch (err) {
    console.error("News fetch failed:", err);
  }
}

function bindData(articles) {
  const cardsContainer   = document.getElementById("cards-container");
  const newsCardTemplate = document.getElementById("template-news-card");
  cardsContainer.innerHTML = "";

  articles.forEach(article => {
    if (!article.urlToImage) return;
    const cardClone = newsCardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone, article);
    cardsContainer.appendChild(cardClone);
  });
}

function fillDataInCard(cardClone, article) {
  const img   = cardClone.querySelector("#news-img");
  const title = cardClone.querySelector("#news-title");
  const src   = cardClone.querySelector("#news-source");
  const desc  = cardClone.querySelector("#news-desc");

  img.src        = article.urlToImage;
  title.textContent = article.title;
  desc.textContent  = article.description;

  const date = new Date(article.publishedAt)
               .toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
  src.textContent = `${article.source.name} · ${date}`;

  cardClone.firstElementChild.onclick = () => window.open(article.url, "_blank");
}
