$(document).ready(function () {

    $("#suites-dropdown-activator").dropdown({
        hover: true,
        coverTrigger: false,
        constrainWidth: false
    });
    $("#language-desktop-dropdown-activator").dropdown({
        hover: true,
        coverTrigger: false,
        constrainWidth: false
    });
    $("#language-mobile-dropdown-activator").dropdown({
        coverTrigger: false,
        constrainWidth: false
    });
    $('#main-slider').slider({
        indicators: false,
        height: $(window).height()
    });
    $('#suites-slider').slider({
        height: 500
    });
    $('#reviews-slider').slider({
        indicators: false,
        height: $(window).height() / 2
    });
    $('.datepicker').datepicker({
        autoClose: true,
        format: 'dd/mm/yyyy',
        minDate: new Date(),
        firstDay: 1
    });
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.sidenav').sidenav({
        preventScrolling: true
    });
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $('.modal').modal();
    $('.tabs').tabs();

    switchLanguage('language-ita');

});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    // When the user scrolls the page, execute myFunction
    stickyNavbar();
    showScrollToTopBtn();

    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

// Get the navbar
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

function showScrollToTopBtn() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('scrollToTopBtn').style.display = "block";
      } else {
        document.getElementById('scrollToTopBtn').style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Click on btn after inserting dates and people
$('#bookAction').click(function () {
    var startingDate = $('#startingDate').val();
    var finalDate = $('#finalDate').val();
    var people = $('#people').val();
    var babies = $('#babies').val();

    // Adjust dates in dd-mm-yyyy format
    startingDate = startingDate.substring(6, 10) + '-' + startingDate.substring(3, 5) + '-' + startingDate.substring(0, 2);
    finalDate = finalDate.substring(6, 10) + '-' + finalDate.substring(3, 5) + '-' + finalDate.substring(0, 2);

    // Generate link and open new tab
    var link = 'https://be.booking-reservations.com/index.html?prtl=BNE&lang=it&idstr=2bcfffce-67f0-4694-8c94-766fb7424ee8&checkin=' + startingDate + '&checkout=' + finalDate + '&nadulti=' + people + '&nbambini=' + babies;
    window.open(link);
});

// Move next carousel
$('.moveNextCarousel').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
});

// Move prev carousel
$('.movePrevCarousel').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
});

// Two methods for suites slider
$('.activator').click(function (e) {
    $('#suites-slider').slider('pause');
});
$('.restart-on-click').click(function (e) {
    $('#suites-slider').slider('start');
});

// Close sidenav after clicking on an item
$('.sidenav-option').click(function() {
    $('.sidenav').sidenav('close');
})