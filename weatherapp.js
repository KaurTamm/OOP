//  Weather for given location
const weather = new Weather('Tartu');

//  app UI
const ui = new UI();

weather.weatherData().then(cityWeather => {
    ui.print(cityWeather);
}).catch(error => console.log(error));


console.log(ui);