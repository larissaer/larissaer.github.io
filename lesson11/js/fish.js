window.addEventListener('load', (event)=>{
    // The urls for the weather api.
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?id=5585000&appid=f35b728b9784b1eaf04baa7a3e381718&units=imperial";
    const apiforcurl = "https://api.openweathermap.org/data/2.5/forecast?id=5585000&appid=f35b728b9784b1eaf04baa7a3e381718";

    // Get the data for current weather in the form of a JSON file
    fetch(apiurl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // Set the current condition.
        document.getElementById("currCond").textContent = jsonObject.weather[0]["main"];

        // Set the current Temperature.
        document.getElementById("currentTemp").textContent = Math.floor(jsonObject.main.temp);

        // Set the highs and lows.
        document.getElementById("highTemp").textContent = Math.floor(jsonObject.main.temp_max);
        document.getElementById("lowTemp").textContent = Math.floor(jsonObject.main.temp_min);

        // Set the current humidity.
        document.getElementById("humidity").textContent = Math.floor(jsonObject.main.humidity);

        // Set the current wind speed.
        document.getElementById("windSpeed").textContent = jsonObject.wind.speed;

        // Calculate the windchill.
        windChillCal(jsonObject.main.temp, jsonObject.wind.speed);
    });

    // Get the data for current weather in the form of a JSON file
    fetch(apiforcurl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // Pass the weather list from the json file.
        const weatherList = jsonObject["list"];

        // Setup the days in the week.
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // Setup the counter.
        let num = 0;
        // Loop through each item in the list adding each card.
        for (i = 0; i < weatherList.length; i++) {
            // Find the time stamp and put it in a date object.
            let forcastTime = new Date(weatherList[i].dt_txt)

            // Add the card if the hour is 18.
            if (forcastTime.getHours() == 18){
                // Add one to the counter.
                num = num + 1;

                // Setup the document ids.
                let page_id = "label" + num;
                let page_img = "img" + num;
                let page_output = "output" + num;

                // Convert the temperature from Kelvin to Farenheit.
                let currentTemp = Math.floor((weatherList[i].main.temp - 273.15) * (9 / 5) + 32);

                // Label the day for that card.
                document.getElementById(page_id).textContent = days[forcastTime.getDay()];

                // Add the temperature for that card.
                document.getElementById(page_output).textContent = currentTemp;

                // Create the image link and add it to the card.
                let imagesrc = 'https://openweathermap.org/img/w/' + weatherList[i].weather[0].icon + '.png';  // note the concatenation
                document.getElementById(page_img).setAttribute('src', imagesrc);
            }
        }
    });

});
