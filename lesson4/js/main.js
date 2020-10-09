window.addEventListener("load", (event) => {
    const lastUpdate = document.querySelector("#lastupdate");
    lastUpdate.textContent = document.lastModified;

    const year = document.querySelector("#year");
    year.textContent = new Date().getFullYear();

    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('.navigation')

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
    
})