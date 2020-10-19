window.addEventListener("load", (event) => {
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


    //top banner

    var ad = document.getElementById("topBanner")
    if (dateObject.getDay() == 5) {
        ad.style.display = "block";
    } else {
        ad.style.display = "none";
    }

})