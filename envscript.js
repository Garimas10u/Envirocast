'https://olivegaea.p.rapidapi.com/business/transactions/v1/calculate';

4 day weather forecast
https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}


Air VideoPlaybackQuality

const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.openaq.org/v2/cities?limit=100&page=1&offset=0&sort=asc&city=&order_by=city', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


  Api id 02fcdcc8afafab356e4d94267ad51717