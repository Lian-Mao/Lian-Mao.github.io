const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {

    document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener('scroll', () => {
    {
        if (document.querySelector(".style-switcher").classList.contains("open")) {
            document.querySelector(".style-switcher").classList.remove("open");

        }
    }
})

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {

    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  
    dayNight.querySelector("i").classList.toggle('fa-sun');
    dayNight.querySelector("i").classList.toggle('fa-moon');
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");

    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");

    }
})

$(document).ready(function () {
 
    $('ul.nav > li')
            .click(function (e) {
        $('ul.nav > li') .removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function() {
    $(window).on('scroll', function() {
        $('.nav li a').each(function() {
            var sectionId = $(this).attr('href');
            var sectionTop = $(sectionId).offset().top - 50; 

            if ($(window).scrollTop() >= sectionTop) {
                $('.nav li').removeClass('active');
                $(this).parent('li').addClass('active');
            }
        });
    });
});