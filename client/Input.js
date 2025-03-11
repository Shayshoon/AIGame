class Input {
  #input;

  constructor(x, y, inputHandler) {
    this.#input = createInput().class('chat').position(x, y).hide();
    this.#input.changed((event) => inputHandler(this.#input.value()));
  }

  show() {
    this.#input.show();
  }

  hide() {
    this.#input.hide();
  }
}
