function generateWeatherMessage(station) {
  let container = document.createElement("div");
  container.classList.add("weather");

  let ul = document.createElement("ul");

  let cityLi = document.createElement("li");
  cityLi.innerText = "Plaats " + station.regio;

  let tempLi = document.createElement("li");
  tempLi.innerText = "Temperatuur " + station.temperature;

  let weatherDescriptionLi = document.createElement("li");
  weatherDescriptionLi.innerText = station.weatherdescription;

  ul.appendChild(cityLi);
  ul.appendChild(tempLi);
  ul.appendChild(weatherDescriptionLi);

  container.appendChild(ul);

  return container;
}

export { generateWeatherMessage }
