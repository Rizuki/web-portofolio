// Script Typing Animation

let typed = new Typed(".input", {
    strings:["Network Engineer."],
    typeSpeed:50,
    backSpeed:30,
    loop:true
})

// Script Active Menu
const menuList = document.querySelectorAll(".navbar-menu-item");
const heroSectionActive = document.querySelectorAll(".hero")

menuList.forEach((link, index) => {
    link.addEventListener("click",() => {
        activateLink(link);
        heroActivate(index);
    })
})

function activateLink(linkActive, index){
    menuList.forEach(link => {
        link.classList.remove("menu-active");
        linkActive.classList.add("menu-active");
    })
}

function heroActivate(index) {
    heroSectionActive.forEach(list => {
        list.classList.remove("hero-active");
        heroSectionActive[index].classList.add("hero-active");
    })
}
