window.addEventListener('load', () => {
  document.body.classList.remove("clean__transition");
})

// Menu burger
const btnBurger = document.querySelector('.burger__btn');
let navBar = document.querySelector('.nav__container');
let items = document.querySelectorAll('.a_nav')

function burger() {
  btnBurger.classList.toggle('active')
  navBar.classList.toggle('active__menu');
  items.forEach(element => {
    element.classList.toggle('active');
  });
}
btnBurger.addEventListener('click', burger);