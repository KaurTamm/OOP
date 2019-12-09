function weatherBalloon( cityID ) {
    var key = 'f19190e7226af07a2dfe8b42df98b83a';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        console.log(data);
        drawWeather(data); // Call drawWeather
    })
    .catch(function() {
      // catch any errors
    });
};
  
function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;
    
    if( description.indexOf('rain') > 0 ) {
        document.body.className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
        document.body.className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
        document.body.className = 'sunny';
    }
};

window.onload = function() {
    weatherBalloon( 'Tartu' );
};