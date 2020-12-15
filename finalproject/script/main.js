window.addEventListener("load", (event) => {
    //date
    const lastUpdate = document.querySelector("#lastupdate");
    if(lastUpdate)
        lastUpdate.textContent = document.lastModified;

    const year = document.querySelector("#year");
    if(year)
        year.textContent = new Date().getFullYear();

    // toggle on menu

    const hambutton = document.querySelector('.ham');

    const mainnav = document.querySelector('.navigation')

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')
    }, false);

    fetch('/script/template.json')
    .then( result => {
            return result.json();
        })
    .then(json =>{
        if(json.name)
            for( const key in json.name) {
                const temple = json.name[key];

                const article = document.createElement('article');

                const h1 = document.createElement('h1')
                h1.textContent = key;

                const address = document.createElement('p')
                address.textContent = `Address: ${temple.address}`;

                const city = document.createElement('p')
                city.textContent = `City: ${temple.city}`;

                const state = document.createElement('p')
                state.textContent = `State: ${temple.state}`;

                const telephone = document.createElement('p')
                telephone.textContent = `Telephone: ${temple.telephone}`;

                const email = document.createElement('p')
                email.textContent = `Email: ${temple.email}`;

                const ordinance = document.createElement('p')
                ordinance.textContent = `Ordinance: ${temple.ordinance}`;

                const history = document.createElement('p')
                history.textContent = `History: ${temple.history}`;

                const session = document.createElement('p')
                session.textContent = `Session: ${temple.session}`;

                const templeClosure = document.createElement('p')
                templeClosure.textContent = `Temple Closure: ${temple.templeClosure}`;

                const services = document.createElement('ul');
                for(const service in temple.services) {
                    const li = document.createElement('li')
                    li.textContent = temple.services[service];
                    services.appendChild(li)
                }

                const image = document.createElement('img');
                image.setAttribute('src', `images/${temple.image}`);
                image.setAttribute('alt', temple.key);

                article.appendChild(h1);
                article.appendChild(image);
                article.appendChild(address);
                article.appendChild(city);
                article.appendChild(state);
                article.appendChild(telephone);
                article.appendChild(email);
                article.appendChild(services);
                article.appendChild(ordinance);
                article.appendChild(history);
                article.appendChild(session);
                article.appendChild(templeClosure);

                document.querySelector('#container').appendChild(article);
            }

    });
});