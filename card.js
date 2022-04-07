const name = document.querySelector('.name');
const desc = document.querySelector ('.desc');
const temp = document.querySelector ('.temp');
const icon = document.querySelector ('.icon');
const humi = document.querySelector ('.hum');
const back = document.querySelector ('.body');
const select = document.querySelector('.selectCity');

select.addEventListener('change',() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+select.value+'&APPID=7abe2f64a5fc87458d9ec705f9a9f68f&lang=it')
    .then(res => res.json())
    .then(data => {

    const nameValue = data ['name'];
    const tempValue = data ['main']['temp'];
    const descValue = data ['weather'][0]['description'];
    const iconValue = data ['weather'][0]['icon'];
    const humValue = data ['main'] ['humidity'];
    const backWeather = data ['weather'][0]['main'];
        
    const rounded = Math.round((tempValue - 273.15) * 100) / 100;

    icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconValue}@2x.png`);
    name.innerHTML = nameValue;
    temp.innerHTML = rounded+ " " + "C°";
    desc.innerHTML = descValue;
    humi.innerHTML = 'Pressione:' + ' ' + humValue + ' ' +  'hPa';
    
    switch (backWeather) {
        case "Snow":
            document.getElementById ("body").style.backgroundImage =
            "url('./image/SNOW-WEEK-piste.jpeg')";
            break;
        case "Clouds":
            document.getElementById ("body").style.backgroundImage =
            "url('./image/Clouds.jpg')";
            break;
        case "Rain":
            document.getElementById ("body").style.backgroundImage =
            "url('./image/Rain.jpg')";
            break;
        case "Clear":
            document.getElementById ("body").style.backgroundImage =
            "url('./image/Clear.jpg')";
            break;
        case "Thunderstorm":
            document.getElementById ("body").style.backgroundImage =
            "url('./image/Thunderstorm.jpeg')";
            break;
            
    }

    })

    .catch(err => alert("Questa scelta non è valida, seleziona una Città!"))
    
})