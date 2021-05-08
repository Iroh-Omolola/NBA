const burger = document.querySelector(".burger");
const nav = document.querySelector(".mobile-nav");
const navLink = document.querySelectorAll(".mobile-nav li");
const mobile = document.querySelectorAll(".m-link");
// fuction to toggle nav
let state = 0;
const openDrop = () => {
    nav.style.display = "flex";
}
const closeDrop = () => {
    nav.style.display = "none";
    state = 0;
}

function toggleNav(n) {
    state += n;
    if (state == 1) {
        openDrop();
    } else {
        closeDrop();
    }

    // to animate nav
    navLink.forEach((link, index) => {
        if (link.style.animation) { // without the if statement the list fade in will only implent on refresh of the page
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
        }
    });
    // to animate the burger icon
    burger.classList.toggle("toggle");
}
// to close mobile nav bar on click
const closeDropdownMenuSelectingItem = (() => mobile.forEach((item) => item.addEventListener("click", () => {
    closeDrop();
    toggleNav();
})))()