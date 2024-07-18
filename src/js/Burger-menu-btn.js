let burgerBtnOpen = document.querySelector(".first__elem1");
let burgerMenu = document.querySelector(".burger");
let burgerBtnClose = document.querySelector(".bh__menu-back");
let selectedLink = null;


document.addEventListener('click', function(evt) {
  evt.preventDefault(burgerBtnClose);
  let clickedLink = evt.target.closest(".burger__container a");

  if (clickedLink) {
    if (selectedLink) {
      selectedLink.classList.remove('selected');
    }
  clickedLink.classList.add('selected');
  selectedLink = clickedLink;
}

  if (window.innerWidth < 1440 && evt.target.closest(".first__elem1")) {
    burgerMenu.classList.toggle("active");
  } else if (window.innerWidth < 1440 && (!evt.target.closest(".burger__container"))
    || (evt.target.closest(".menu-back"))) {
    burgerMenu.classList.remove("active");
  }
});
