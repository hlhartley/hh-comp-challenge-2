var hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', toggleHamburger);

function toggleHamburger() {
  hamburger.classList.toggle('toggled-hamburger');
}

var modal = document.querySelector('.modal');
var modalBtn = document.querySelector('.caret-wrapper');

function toggleModal() {
  modal.classList.toggle('toggled-modal')
}