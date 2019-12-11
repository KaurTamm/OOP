class Weather{
    //  Constructor
    constructor(c){
        this.city = c;
        this.key ='f19190e7226af07a2dfe8b42df98b83a';
    };
    //  Data from API
    async weatherData(){
        const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.city+ '&appid=' + this.key);  
        const data = await resp.json();
        console.log(data);
        return data;
    };
    // Change city name
    changeCityName(name){
        this.city = name;
    };
};