// Feature 1
let now = new Date();
let h6 = document.querySelector("h6");
let todayForecast = document.querySelector("#today-forecast");
let todayDateForecast = document.querySelector("#today-date-forecast");

let days = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun"
];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let date = now.getDate();

h6.innerHTML = `${day}, ${month} ${date}`;
todayForecast.innerHTML = `${day},${date}`;

//Feature 2
let search = document.querySelector("#search-form");
search.addEventListener("submit", locationSearch);

function locationSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input-form");
  let h2 = document.querySelector("h2");
  h2.innerHTML = searchInput.value;
  let apiKey = "83ac7d40a063dd98f0b2269f7f62cce5";
  let units = "metric";
  let city = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let todayTemperature = document.querySelector("#temperature");
  todayTemperature.innerHTML = `${temperature}°C`;
  let weatherDescription = document.querySelector("#description");
  let description = response.data.weather[0].main;
  weatherDescription.innerHTML = `${description}`;
  let feelsLike = document.querySelector("#feels-like");
  let feelsLikeTemperature = Math.round(response.data.main.feels_like);
  feelsLike.innerHTML = `${feelsLikeTemperature}°C`;
  let wind = document.querySelector("#wind");
  let windInfo = Math.round(response.data.wind.speed);
  wind.innerHTML = `${windInfo} mps`;
  let humidity = document.querySelector("#humidity");
  let humidityInfo = response.data.main.humidity;
  humidity.innerHTML = `${humidityInfo}%`;
  let pressure = document.querySelector("#pressure");
  let pressureInfo = response.data.main.pressure;
  pressure.innerHTML = `${pressureInfo} mb`;
  let highTemp = document.querySelector("#high-temp-first-day");
  let firstDayTemp = Math.round(response.data.main.temp_max);
  highTemp.innerHTML = `${firstDayTemp}°C`;
  let lowTemp = document.querySelector("#low-temp-first-day");
  let firstDayTempLow = Math.round(response.data.main.temp_min);
  lowTemp.innerHTML = `${firstDayTempLow}°C`;
}
