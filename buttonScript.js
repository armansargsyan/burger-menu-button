const buttons = {

  menuButton: {
    button: document.querySelector('.menuButton'),
    menu: document.querySelector('.menuDiv'),

    click() {

      if (this.button.dataset.active === "false") this.activated();
      else this.deActivated();
    },

    activated() {
      this.button.setAttribute('data-active', 'true');
      this.button.classList.add("activeMenuButton");
    },

    deActivated() {
      this.button.setAttribute('data-active', 'false');
      this.button.classList.remove("activeMenuButton");
    }
  },
};
