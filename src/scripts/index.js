const menuButton = document.getElementById('menu');
const navElem = document.getElementById('nav');

navElem.hidden = true;

menuButton.addEventListener('click', (e) => {
  navElem.hidden = !navElem.hidden;
});
