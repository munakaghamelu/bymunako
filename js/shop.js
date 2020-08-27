// Make remove buttons actually remove items from our cart

// Adds every button with the class name btn-danger to this array
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function() {
        console.log('clicked')
    }) //when we click on a button do something
}

// let mainNav = document.getElementById('js-menu');

// let navBarToggle = document.getElementById('js-navbar-toggle');

// navBarToggle.addEventListener('click', function () {
//     mainNav.classList.toggle('active');
// });

// myButton = document.getElementById("myBtn"); //get the button

// window.onscroll = function() {scrollFunction()}; //when user scrolls down 20px from top, show button

// function scrollFunction () {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         myButton.style.display = "block";
//     } else {
//         myButton.style.display = "none";
//     }
// }

// //when user clicks on the button, it'll scroll to the top of the document

// function topFunction() {
//     document.body.scrollTop = 0; //for safari
//     document.documentElement.scrollTop = 0; //for chrome, ie, firefox, opera
// }