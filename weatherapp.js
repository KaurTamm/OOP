//  Weather for given location
const weather = new Weather('Tartu');

//  App UI
const ui = new UI();

//  Show default   
document.addEventListener('DOMContentLoaded', drawWeather);

//  Change city
const changeBtn = document.getElementById('w-change');
changeBtn.addEventListener('click', changeWeather);

function changeWeather(){
    const city = document.getElementById('city').value ;
    weather.changeCityName(city);
    drawWeather();
    $(`#changeCity`).modal('hide');
    console.log(weather);
};

function drawWeather(){
    weather.weatherData().then(cityWeather => {
        ui.print(cityWeather);
    }).catch(error => console.log(error));
};

console.log(ui);