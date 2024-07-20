const apiKey = "c8f2cba8819e6225ca824a58f14847a1";

const weatherDataElement = document.getElementById("weather-data");

const cityInputElement = document.getElementById("city-input");

const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputElement.value;
  getWeatherData(cityValue)
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);

    // check the response is ok or not.
    if(!response.ok) {
      throw new Error("Network response was not ok");
    }
    // make the information we got to be json format.
    const data = await response.json();
    console.log(data);

    const temperature = Math.round(data.main.temp);

    const description = data.weather[0].description; // [] is an array.
    const icon = data.weather[0].icon;

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}°C`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed}m/s`
    ]

    weatherDataElement.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;

    weatherDataElement.querySelector(".temperature").textContent = `${temperature}°C`;

    weatherDataElement.querySelector(".description").textContent = description.charAt(0).toUpperCase() + description.slice(1);

    weatherDataElement.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");

  } catch (error) {
    weatherDataElement.querySelector(".icon").innerHTML = "";

    weatherDataElement.querySelector(".temperature").textContent = "";

    weatherDataElement.querySelector(".description").textContent = "An error happened, please try again.";

    weatherDataElement.querySelector(".details").innerHTML ="";


  }
}