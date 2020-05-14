let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

myButton = document.getElementById("myBtn"); //get the button

window.onscroll = function() {scrollFunction()}; //when user scrolls down 20px from top, show button

function scrollFunction () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

//when user clicks on the button, it'll scroll to the top of the document

function topFunction() {
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0; //for chrome, ie, firefox, opera
}