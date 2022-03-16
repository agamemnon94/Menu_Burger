window.addEventListener('load', () => {
  document.body.classList.remove("clean__transition");
})

// Menu burger
const btnBurger = document.querySelector('.container__burger');
let navBar = document.querySelector('.nav__container');
let items = document.querySelectorAll('.a_nav')

function burger() {
  btnBurger.classList.toggle('active')
  navBar.classList.toggle('active__menu');
  items.forEach(item => {
    item.classList.toggle('active');
  });
}
btnBurger.addEventListener('click', burger);