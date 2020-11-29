window.addEventListener("load", (event) => {
  //date
  const lastUpdate = document.querySelector("#lastupdate");
  lastUpdate.textContent = document.lastModified;

  const year = document.querySelector("#year");
  year.textContent = new Date().getFullYear();

  // toggle on menu

  const hambutton = document.querySelector('.ham');

  const mainnav = document.querySelector('.navigation')

  hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
  }, false);


  //sections

  const URL = 'https://byui-cit230.github.io/weather/data/towndata.json';

  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject);
      const towns = jsonObject['towns'];


      //Preston
      let preston = document.createElement('section');
      let preston_text = document.createElement('div');
      let h1_1 = document.createElement('h1');
      let motto_1 = document.createElement('h3');
      let founded_1 = document.createElement('p');
      let pop_1 = document.createElement('p');
      let rain_fall_1 = document.createElement('p');
      let image_1 = document.createElement('img');
      let hr_1 = document.createElement('hr');
      

      preston.classList.add('preston');
      h1_1.textContent = towns[4].name;
      motto_1.textContent = towns[4].motto;
      founded_1.textContent = 'Founded in ' + towns[4].yearFounded;
      pop_1.textContent = 'Population: ' + towns[4].currentPopulation;
      rain_fall_1.textContent = 'Average Annual Rainfall: ' + towns[4].averageRainfall + ' inches';
      image_1.setAttribute('src', 'images/' + towns[4].photo);

      preston_text.appendChild(h1_1);
      preston_text.appendChild(motto_1);
      preston_text.appendChild(hr_1)
      preston_text.appendChild(founded_1);
      preston_text.appendChild(pop_1);
      preston_text.appendChild(rain_fall_1);

      preston.appendChild(preston_text);
      preston.appendChild(image_1);

      document.getElementById('towns').appendChild(preston);


    //Soda Springs
    let soda  = document.createElement('section');
    let soda_text = document.createElement('div');
    let h1_2 = document.createElement('h1');    
    let motto_2 = document.createElement('h3');
    let founded_2 = document.createElement('p');
    let pop_2 = document.createElement('p');
    let rain_fall_2 = document.createElement('p');
    let image_2 = document.createElement('img');
    let hr_2 = document.createElement('hr');

    soda.classList.add('soda');
    h1_2.textContent = towns[5].name;
    motto_2.textContent = towns[5].motto;
    founded_2.textContent = 'Founded in ' + towns[5].yearFounded;
    pop_2.textContent = 'Population: ' + towns[5].currentPopulation;
    rain_fall_2.textContent = 'Average Annual Rainfall: ' + towns[5].averageRainfall + ' inches';
    image_2.setAttribute('src', 'images/' + towns[5].photo);

    soda_text.appendChild(h1_2);
    soda_text.appendChild(motto_2);
    soda_text.appendChild(hr_2)
    soda_text.appendChild(founded_2);
    soda_text.appendChild(pop_2);
    soda_text.appendChild(rain_fall_2);

    soda.appendChild(soda_text);
    soda.appendChild(image_2);

    document.getElementById('towns').appendChild(soda);

    //Fish Haven
    let fish  = document.createElement('section');
    let fish_text = document.createElement('div');
    let h1_3 = document.createElement('h1');    
    let motto_3 = document.createElement('h3');
    let founded_3 = document.createElement('p');
    let pop_3 = document.createElement('p');
    let rain_fall_3 = document.createElement('p');
    let image_3 = document.createElement('img');
    let hr_3 = document.createElement('hr');
    
    fish.classList.add('fish');
    h1_3.textContent = towns[1].name;
    motto_3.textContent = towns[1].motto;
    founded_3.textContent = 'Founded in ' + towns[1].yearFounded;
    pop_3.textContent = 'Population: ' + towns[1].currentPopulation;
    rain_fall_3.textContent = 'Average Annual Rainfall: ' + towns[1].averageRainfall + ' inches';
    image_3.setAttribute('src', 'images/' + towns[1].photo);
    
    fish_text.appendChild(h1_3);
    fish_text.appendChild(motto_3);
    fish_text.appendChild(hr_3);
    fish_text.appendChild(founded_3);
    fish_text.appendChild(pop_3);
    fish_text.appendChild(rain_fall_3);

    fish.appendChild(fish_text);
    fish.appendChild(image_3);
    
    document.getElementById('towns').appendChild(fish);

    });


})