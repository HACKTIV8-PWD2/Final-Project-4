const d = new Date();
document.getElementById("tanggal").innerHTML = d;

const kota = document.getElementById('kota');
const suhu = document.getElementById('suhu');
const city = document.getElementById('city');
const condition = document.getElementById('condition');
const temperature = document.getElementById('temperature');
const wind = document.getElementById('wind')

const searchBtn = document.querySelector("#btn");
const input = document.querySelector(".input");

searchBtn.addEventListener("click", function () {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=570bbf530cddfc8ce95a236bce00f973&units=metric")
    .then((response) => response.json())
    .then((response) => {

<<<<<<< HEAD
      result.innerHTML = `<h2>City : ${response.name}</h2>
                          <h5>Condition : ${response.weather[0].description}</h5>
                          <h5>Temperature : ${response.main.temp}°С</h5>
                          <h5>Wind Speed : ${response.wind.speed} km/h</h5>`;
=======
    kota.innerText = response.name;
    suhu.innerText = response.main.temp+"°С";
    city.innerText = response.name;
    condition.innerText = response.weather[0].description;
    temperature.innerText = response.main.temp+"°С";
    wind.innerText = response.wind.speed+"km/h";

      // let result = document.querySelector(".result");

      // result.innerHTML = `<h2>City : ${response.name}</h2>
      //                           <h5>Condition : ${response.weather[0].description}</h5>
      //                           <p">Temperature : ${response.main.temp}°С</p>
      //                           <h5>Wind Speed : ${response.wind.speed} km/h</h5>`;
>>>>>>> refs/remotes/origin/main
    });
});
