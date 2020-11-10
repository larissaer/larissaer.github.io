window.addEventListener('load', (event)=>{
    const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++ ) {

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let date = document.createElement('p');
            let place = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            date.textContent = "Date of Birth: " + prophets[i].birthdate;
            place.textContent = "Place of Birth: " + prophets[i].birthplace;
            
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + i);
            card.appendChild(h2);
            card.appendChild(date);
            card.appendChild(place);
            card.appendChild(image);

            document.querySelector('div.deck').appendChild(card);
        }
    });
})