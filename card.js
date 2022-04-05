// import {select} from "./dataAPI.js"

const name = document.querySelector('.name');
const desc = document.querySelector ('.desc');
const temp = document.querySelector ('.temp');
const icon = document.querySelector ('.icon');



const select = document.querySelector('.selectCity');
    select.addEventListener('change',() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+select.value+'&APPID=7abe2f64a5fc87458d9ec705f9a9f68f&lang=it')
        .then(res => res.json())
        .then(data => {

        
        const nameValue = data ['name'];
        const tempValue = data ['main']['temp'];
        const descValue = data ['weather'][0]['description'];
        const iconValue = data ['weather'][0]['icon'];
        
        icon.setAttribute('src', `http://openweathermap.org/img/wn/${iconValue}@2x.png`);
        name.innerHTML = nameValue;
        // icon.innerHTML = iconValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        
        console.log(data)

        })

    .catch(err => alert("Questa scelta non è valida, seleziona una Città!"))
})