function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "67f4a799a534c30ed5380383b7abf9e8"; // replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  if (city === "") {
    document.getElementById("result").innerHTML = "Please enter a city name";
    return;
  }

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("result").innerHTML = "City not found";
      } else {
        document.getElementById("result").innerHTML = `
          <p><strong>City:</strong> ${data.name}</p>
          <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        `;
      }
    })
    .catch(error => {
      document.getElementById("result").innerHTML = "Error fetching data";
    });
}
