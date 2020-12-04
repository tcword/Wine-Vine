// Navigation Responsivenss 

const bodyElement = document.querySelector('body');
const menuToggle = document.querySelector('.hamburger-menu');
const heroElement = document.querySelector(".hero");

menuToggle.addEventListener('click', function () {
    bodyElement.classList.toggle('is-open');
     heroElement.classList.add("is-open");
});



// Remove Nav Bar 'onClick'

window.addEventListener('click', function (e) {
    let clickedElement = e.target;

    if (clickedElement.matches('.is-open')){
        bodyElement.classList.remove('is-open');
        heroElement.classList.remove("is-open");
    }
})


