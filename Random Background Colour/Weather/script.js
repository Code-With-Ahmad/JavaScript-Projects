document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    fetchData();
  }
});
document.querySelector("#btn").addEventListener("click", () => {
  fetchData();
});

async function fetchData() {
  let input = document.querySelector("input").value;
  let ApiKey = "38d05cbdd8903ec79c501299a2dde5e3";
  try {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${ApiKey}&unit=metric`
    );
    document.querySelector("input").value = "";
    let dataToJson = await data.json();

    document.querySelector(".temp").innerHTML =
      Math.round(dataToJson.main.temp - 273) + "°C";
    document.querySelector(".city").innerHTML = dataToJson.name;
    document.querySelector(".humidity").innerHTML =
      dataToJson.main.humidity + "%";
    document.querySelector(".wind").innerHTML =
      Math.round(dataToJson.wind.speed) + " km/h";

    if (dataToJson.weather[0].main == "Clouds") {
      document.querySelector(".weather-icon").src = "Images/cloudy.png";
      console.log(dataToJson.weather[0].main);
    } else if (dataToJson.weather[0].main == "Rain") {
      document.querySelector(".weather-icon").src = "Images/rain.png";
      console.log(dataToJson.weather[0].main);
    } else if (dataToJson.weather[0].main == "Drizzle") {
      document.querySelector(".weather-icon").src = "Images/drizzle.png";
      console.log(dataToJson.weather[0].main);
    } else if (dataToJson.weather[0].main == "Mist") {
      document.querySelector(".weather-icon").src = "Images/mist.png";
      console.log(dataToJson.weather[0].main);
    } else if (dataToJson.weather[0].main == "Snow") {
      document.querySelector(".weather-icon").src = "Images/snow.png";
      console.log(dataToJson.weather[0].main);
    } else {
      document.querySelector(".weather-icon").src = "Images/sun.png";
      console.log(dataToJson.weather[0].main);
    }
  } catch (e) {
    document.querySelector("input").value = "";
    alert("Please Enter Any City Name");
  }
}
