
export default async function handler(req, res) {
  const query  = req.query.q || "weather";
  const apiKey = process.env.NEWS_API_KEY;     
  const newsURL =
    `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;

  try {
    const r   = await fetch(newsURL);
    const out = await r.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(out);
  } catch (err) {
    res.status(500).json({ status:"error", message: "proxy failed" });
  }
}
