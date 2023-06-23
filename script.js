const toggleWhite = document.getElementById("toggleWhite");
const body = document.querySelector("body");

toggleWhite.addEventListener("click", (event) => {
    event.target.classList.toggle("fa-moon");
    if (event.target.classList.toggle("fa-sun")) {
        body.style.background = "white";
        body.style.color = "black";
        body.style.transition = "0.5s";
    }
    else{
        body.style.background="black";
        body.style.color="white";
        body.style.transition="0.5s";
        
    }
})