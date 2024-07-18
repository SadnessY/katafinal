let callbackBtn = document.querySelector(".call");
let feedbackBth = document.querySelector(".callback")
let sidebarCallback = document.querySelector(".sidebar__feedback")
let sidebarFeedback = document.querySelector(".sidebar__callback")
let BtnClose = document.querySelector(".sc__menu-back");


document.addEventListener('click', function(evt) {
  evt.preventDefault(BtnClose);
  if (evt.target.closest(".call")) {
    sidebarCallback.classList.toggle("activated");
  } else if ((!evt.target.closest(".sidebar__callback"))
    || (evt.target.closest(".menu-back"))) {
    sidebarCallback.classList.remove("activated");
  }
});
document.addEventListener('click', function(evt) {
  evt.preventDefault(BtnClose);
  if (evt.target.closest(".callback")) {
    sidebarFeedback.classList.toggle("activated");
  } else if ((!evt.target.closest(".sidebar__feedback"))
    || (evt.target.closest(".menu-back"))) {
    sidebarFeedback.classList.remove("activated");
  }
});
