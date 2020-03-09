const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });
}

function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

const text = "just a random website"
let index = 0;
let letter = "";

(function textwriter() {
    
    letter = text.slice(0,++index);
    document.querySelector(".introtext").textContent = letter;
    if(letter.length == text.length){
        index = 0;
    }

    setTimeout(textwriter, 500);
}());

const runAll = () => {
    navSlide();
    window.addEventListener("scroll", function(){
        parallax(".intro", window.scrollY, 0.7);
    });
}

runAll();