const currentYearElement = document.getElementById('current-year');
currentYearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById('last-modified');
lastModifiedElement.textContent = document.lastModified;

const hamburgerButton = document.createElement('button');
hamburgerButton.classList.add('hamburger');
hamburgerButton.innerHTML = '&#9776;';

const navigationMenu = document.querySelector('nav ul');

function toggleMenu() {
  navigationMenu.classList.toggle('show');
  hamburgerButton.innerHTML = navigationMenu.classList.contains('show') ? '&#10006;' : '&#9776;';
}

hamburgerButton.addEventListener('click', toggleMenu);
document.querySelector('header').appendChild(hamburgerButton);

window.addEventListener('resize', function() {
  const isMobileView = window.innerWidth <= 768;
  hamburgerButton.style.display = isMobileView ? 'block' : 'none';
});

hamburgerButton.style.display = window.innerWidth <= 768 ? 'block' : 'none';
