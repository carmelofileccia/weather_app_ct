const createCard = () => {
    const divContainer = document.createElement("div");
    const divDate = document.createElement("div");
    const divHumidity = document.createElement("h3");
    const divWind = document.createElement("h3");
    const divPress = document.createElement("h3");
    const divCountry = document.createElement ("h3");

    divContainer.classList.add("card");
    divDate.classList.add("date");
    divHumidity.classList.add("humidity");
    divWind.classList.add("wind");
    divPress.classList.add("pressure");
    divCountry.classList.add("Country");

    divContainer.append(divDate, divCountry, divWind, divHumidity);
    document.querySelector(".weather").appendChild(divContainer);

};
