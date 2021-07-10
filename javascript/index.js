// function ActiveNav() {
//     var nav = document.getElementsByClassName("nav-menu")
//     nav.className += "Nav-active"
// }

var arrow = 1;
Arrow(arrow);

// Next/previous controls
function plusSlides(n) {
    Arrow(arrow += n);
}

// Thumbnail image controls
function currentSlide(n) {
    Arrow(arrow = n);
}

function Arrow(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { arrow = 1 }
    if (n < 1) { arrow = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[arrow - 1].style.display = "block";
    dots[arrow - 1].className += " active";
}


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000);
}

function openmenu() {
    var x = document.getElementById("ham-nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}