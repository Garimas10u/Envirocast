document.querySelector(".navmenu").addEventListener("click",()=>{
  document.querySelector(".right ul").classList.toggle("show");
});

let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const API_KEY = "e3d12d00803649c2bdd71456251307";

const cityInput  = document.querySelector(".search-bar");
const searchBtn  = document.querySelector(".search-icon");
const cityNameEl = document.getElementById("cityname");
const tempEl     = document.querySelector(".temp");
const descEl     = document.querySelector(".description-text");
const windEl     = document.querySelector(".wind-speed");
const humidityEl = document.querySelector("#humidity-info h3");
const visEl      = document.querySelector(".visibility-distance");
const sunEl      = document.getElementById("sun");
const setEl      = document.getElementById("set");
const maxtEl     = document.getElementById("maxt");
const mintEl     = document.getElementById("mint");
const coEl       = document.querySelector(".co-data");
const pm25El     = document.querySelector(".pm1-2_5data");
const pm10El     = document.querySelector(".pM10data");

async function fetchWeather(city = "Delhi") {
  try {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(city)}&days=2&aqi=yes&alerts=no`;
    const res = await fetch(url);
    const data = await res.json();

    const current = data.current;
    const today = data.forecast.forecastday[0];
    const tomorrow = data.forecast.forecastday[1];

    cityNameEl.textContent = data.location.name;
    tempEl.textContent = `${current.temp_c}°C`;
    descEl.textContent = current.condition.text;
    windEl.textContent = `${current.wind_kph} Km/Hr`;
    humidityEl.textContent = `${current.humidity}%`;
    visEl.textContent = `${current.vis_km} Km`;

    coEl.textContent = current.air_quality.co.toFixed(2);
    pm25El.textContent = current.air_quality.pm2_5.toFixed(2);
    pm10El.textContent = current.air_quality.pm10.toFixed(2);

    sunEl.textContent = tomorrow.astro.sunrise;
    setEl.textContent = tomorrow.astro.sunset;
    maxtEl.textContent = `${tomorrow.day.maxtemp_c}°C`;
    mintEl.textContent = `${tomorrow.day.mintemp_c}°C`;

  } catch (err) {
    alert("City not found or API error.");
    console.error(err);
  }
}

function run() {
  const city = cityInput.value.trim() || "Delhi";
  fetchWeather(city);
}

