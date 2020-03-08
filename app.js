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

const runAll = () => {
    navSlide();
    window.addEventListener("scroll", function(){
        parallax(".intro", window.scrollY, 0.7);
        parallax(".introtext", window.scrollY, -0.07);
    });
}

runAll();