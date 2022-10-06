function displayTemperature(response) {

  console.log(response.data);

  let apiKey = "de3c7a97f3372cdd58943ef92e9f54b6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
