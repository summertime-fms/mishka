const menuButton = document.querySelector('.page-header__button');
const menuLists = document.querySelectorAll('.page-header__list');

let showMenu = function(menu, button) {
  for (let i = 0; i < menu.length; i++) {
    menu[i].classList.toggle('page-header__list--opened');
  }
  button.classList.toggle('page-header__button--close');
}

showMenu(menuLists, menuButton);

menuButton.addEventListener('click', function() {
  showMenu(menuLists, menuButton);
})
