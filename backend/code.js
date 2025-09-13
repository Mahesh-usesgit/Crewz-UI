$(document).ready(function() {

  // Replace with your actual API key from a weather service like OpenWeatherMap
  const apiKey = 'YOUR_API_KEY'; 

  // The city for which you want to get the weather
  const city = 'London'; 

  // The API endpoint URL
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Use the jQuery AJAX method to make the API call
  $.ajax({
    url: apiUrl,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      // This function runs if the API call is successful
      console.log('API call successful. Data received: ', data);

      // Extract relevant information from the data object
      const cityName = data.name;
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

      // Display the weather information on the page
      $('#weather-info').html(`
        <h2>Weather in ${cityName}</h2>
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Description:</strong> ${description}</p>
        <img src="${iconUrl}" alt="Weather icon">
      `);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // This function runs if the API call fails
      console.error('API call failed: ', textStatus, errorThrown);
      $('#weather-info').html(`
        <p>Failed to retrieve weather data. Please check your API key and city name.</p>
        <p>Error: ${errorThrown}</p>
      `);
    }
  });

});