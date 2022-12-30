
const nav = document.querySelector("header nav"),
navToggle = document.querySelector("header nav .toggle"),
navSpanMiddle = document.querySelector("header nav .toggle .middle"),
navNavigationBar = document.querySelector("header nav .navigation-bar"),
navNavigationBarLi = document.querySelectorAll("header nav .navigation-bar li"),
headerText = document.querySelector("header .text"),
headerSection = document.querySelector("header");


navToggle.addEventListener("click", () => {
navToggle.classList.toggle("active");
navSpanMiddle.classList.toggle("hide");
navNavigationBar.classList.toggle("show");
});

navNavigationBarLi.forEach(li =>
li.addEventListener("click", () => {
    const arr = Array.from(li.parentElement.children);
    arr.forEach(li => li.classList.remove("active"));
    li.classList.add("active");
})
);

window.onscroll = function() {

if (window.pageYOffset > headerSection.offsetHeight - 75) {
    nav.classList.add("active");
} else {
    nav.classList.remove("active");  
}

if (window.pageYOffset > 0) {
    headerText.style.opacity = -window.pageYOffset / 300 + 1;
}

};
