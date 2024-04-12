
function page3Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

page3Animation();
const cityname=document.getElementById('cityname');
const searchInput = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-icon');



// Add event listener to search button for click event
searchButton.addEventListener('click', async() => {
    let searchTerm = searchInput.value;
    cityname.innerText=searchTerm;
    

    let url2="http://api.weatherapi.com/v1/current.json?key=db1b9ae8537943838c9120832241002&q=";
    
  let val=document.querySelector(".co-data");
  let val2=document.querySelector(".pm1-2_5data");
  let val3=document.querySelector(".pM10data");
  let val4=document.querySelector(".description-text");
  let val5=document.querySelector(".temp");
  let val6=document.querySelector(".wind-speed");
  let val7=document.querySelector(".humidity");
  let val8=document.querySelector(".visibility-distance");
  let val9=document.querySelector("#sun");
  let val10=document.querySelector("#set");
  let val11=document.querySelector("#date");
  let ans2,ans3,lat2,lon2;
    async function call2(){
         ans2=await fetch(`${url2}${searchTerm}&aqi=yes`);
         ans3=await ans2.json();
       
            val.innerText=`${ans3.current.air_quality.co}`;
            val2.innerText=`${ans3.current.air_quality.pm2_5}`;
            val3.innerText=`${ans3.current.air_quality.pm10}`;
            val4.innerText=`${ans3.current.condition.text}`;
            val5.innerText=`${ans3.current.temp_c}°C`;
            val6.innerText=`${ans3.current.wind_kph}KM/HR`;
            val7.innerText=`${ans3.current.humidity}%`;
            val8.innerText=`${ans3.current.vis_km} KM`;
            
            
    }
    call2();
     let url3="http://api.weatherapi.com/v1/forecast.json?key=db1b9ae8537943838c9120832241002&q="
    
     async  function call3(){
        let ans4=await fetch(`${url3}${searchTerm}&days=7&aqi=no&alerts=no`);
        let ans5=await ans4.json();
        console.log(ans5);
        val9.innerText=`${ans5.forecast.forecastday[0].astro.sunrise}`;
        val10.innerText=`${ans5.forecast.forecastday[0].astro.sunset}`;
        val11.innerText=`${ans5.forecast.forecastday[1].date}`;
     }
     call3();
    
});





