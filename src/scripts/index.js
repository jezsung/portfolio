const menuButton = document.getElementById('menu');
const navElem = document.getElementById('nav');

navElem.hidden = true;

menuButton.addEventListener('click', (e) => {
  navElem.hidden = !navElem.hidden;
});

const darkModeSwitcher = document.getElementById('dark-mode');

darkModeSwitcher.addEventListener('click', (e) => {
  document.documentElement.toggleAttribute('dark-mode');
});
