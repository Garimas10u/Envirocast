export default async function handler(req, res) {
  const { city = "Delhi" } = req.query;
  const key = process.env.WEATHER_KEY;

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${encodeURIComponent(city)}&days=2&aqi=yes&alerts=no`;

  try {
    const r = await fetch(url);
    const data = await r.json();

    res.setHeader("Cache-Control", "s-maxage=600"); 
    res.status(200).json(data);
  } catch (error) {
    console.error("Weather fetch error:", error);
    res.status(500).json({ error: "Weather fetch failed" });
  }
}
