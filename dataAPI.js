

const select = document.querySelector('.selectCity');
select.addEventListener('change',() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7abe2f64a5fc87458d9ec705f9a9f68f')
    .then(response => response.json())
    .then(data => console.log(data))
})