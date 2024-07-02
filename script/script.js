// Script Typing Animation

let typed = new Typed(".input", {
    strings:["Network Engineer."],
    typeSpeed:50,
    backSpeed:40,
    loop:true
})


// Script Active Menu
const menuActive = document.querySelectorAll(".navbar-menu-item");

menuActive.forEach((link) => {
    link.addEventListener("click",(event) => {
        activeLink(link);
    })
})

function activeLink(linkActive){
    menuActive.forEach(link => {
        link.classList.remove("active");
        linkActive.classList.add("active");
    })
}