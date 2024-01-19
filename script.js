const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-KEY': '8742930e33msh508b9616bb6c707p1d7d29jsncd05da24d269',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{
    cityName.innerhtml = cityfetch('https://weather-by-api-nunjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)

        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humadity
        mim_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    
    })
    .catch(err => console.error(err));
}
getWeather("Delhi")