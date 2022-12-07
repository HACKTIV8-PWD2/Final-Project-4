const searchBtn = document.querySelector("#btn");
const input = document.querySelector(".input");

searchBtn.addEventListener("click", function () {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=570bbf530cddfc8ce95a236bce00f973&units=metric")
    .then((response) => response.json())
    .then((response) => {
      let result = document.querySelector(".result");

      result.innerHTML = `<h2>City : ${response.name}</h2>
                                <h5>Condition : ${response.weather[0].description}</h5>
                                <p">Temperature : ${response.main.temp}°С</p>
                                <h5>Wind Speed : ${response.wind.speed} km/h</h5>`;
    });
  input.value = null;
});
