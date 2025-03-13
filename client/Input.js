class Input {
  #input;
  #inputHandler;

  #handleInput(event) {
    if (event.key === 'Enter') {
      this.#inputHandler(this.#input.value());
      this.#input.value('');
    }
  }

  constructor(x, y, inputHandler) {
    this.#input = createInput().class('chat').hide().center();
    this.#inputHandler = inputHandler;
    this.enable();
  }

  disable() {
    this.#input.attribute('disabled', true);
    this.#input.attribute('placeholder', 'Wait for your turn...');
    this.#input.elt.removeEventListener('keydown', this.#handleInput.bind(this));
  }

  enable() {
    this.#input.removeAttribute('disabled');
    this.#input.attribute('placeholder', 'Write message here...');
    this.#input.elt.addEventListener('keydown', this.#handleInput.bind(this));
  }

  show() {
    this.#input.show();
  }

  hide() {
    this.#input.hide();
  }
}
