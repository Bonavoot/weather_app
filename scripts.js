const search = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const container = document.getElementById("container");
let click = 0;

function getWeatherData(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f5414290b83e2040a495c764d9ca588`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(click);

      const createCard = document.createElement("div");
      createCard.classList.add("card");

      const createtitle = document.createElement("h1");
      createtitle.classList.add("title");
      createCard.appendChild(createtitle);

      const createtemp = document.createElement("h3");
      createtemp.classList.add("title");
      createCard.appendChild(createtemp);

      const createfeelsLike = document.createElement("h3");
      createfeelsLike.classList.add("feels-like");
      createCard.appendChild(createfeelsLike);

      const createhumidity = document.createElement("h3");
      createhumidity.classList.add("humidity");
      createCard.appendChild(createhumidity);

      const createwind = document.createElement("h3");
      createwind.classList.add("wind");
      createCard.appendChild(createwind);

      container.appendChild(createCard);

      createtitle.textContent = city;
      createtemp.textContent = response.main.temp + "℉";
      createfeelsLike.textContent = "Feels like: " + response.main.feels_like;
      createhumidity.textContent = "Humidity: " + response.main.humidity + "%";
      createwind.textContent = "Wind speed: " + response.wind.speed + "mph";
      click++;
    })
    .catch((err) => {
      alert(err);
      createCard.remove();
    });
}

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const city = search.value;
  getWeatherData(city);
});
