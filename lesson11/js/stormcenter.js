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

})

function adjustRating(rating){
    document.getElementById("rating").innerHTML = rating;
}

submitted = document.getElementById("submit");
