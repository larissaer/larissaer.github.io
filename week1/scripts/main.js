window.addEventListener("load", (event)=>{
    const lastUpdate = document.querySelector("lastupdated");
    lastUpdate.textContent = document.lastModified;

    const year = document.querySelector("copyrightyear");
    year.textContent = new Date().getFullYear();
    
})