var hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', toggleHamburger);

function toggleHamburger() {
  hamburger.classList.toggle('toggled-hamburger');
}