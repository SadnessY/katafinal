let microMenu = document.querySelectorAll('.micro-menu')[0].children;

for (const elem of microMenu) {
  elem.addEventListener('click', (evt) => {
    evt.preventDefault();
      for (const elem of microMenu) {
        elem.classList.remove("micro-menu--active")
      }
      elem.classList.add("micro-menu--active");
    }
  );
}
