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

    for(i = 0; i < towns.length; i++){
      if(towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven'){
        let town_name  = document.createElement('section');
        let text = document.createElement('div');
        let h1 = document.createElement('h1');    
        let motto = document.createElement('h3');
        let founded = document.createElement('p');
        let pop = document.createElement('p');
        let rain_fall = document.createElement('p');
        let image = document.createElement('img');
        let hr = document.createElement('hr');

        h1.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        founded.textContent = 'Founded in ' + towns[i].yearFounded;
        pop.textContent = 'Population: ' + towns[i].currentPopulation;
        rain_fall.textContent = 'Average Annual Rainfall: ' + towns[i].averageRainfall + ' inches';
        image.setAttribute('src', 'images/' + towns[i].photo);

        text.appendChild(h1);
        text.appendChild(motto);
        text.appendChild(hr)
        text.appendChild(founded);
        text.appendChild(pop);
        text.appendChild(rain_fall);

        town_name.appendChild(text);
        town_name.appendChild(image);

        //document.getElementById('towns').appendChild(town_name);

        if(towns[i].name == 'Preston'){
          document.getElementById('preston').appendChild(town_name);
        }
        else if(towns[i].name == 'Soda Springs'){
          document.getElementById('soda').appendChild(town_name);
        }
        else{
          document.getElementById('fish').appendChild(town_name);
        }
      }
    }
  });
});