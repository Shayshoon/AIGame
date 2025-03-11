class TextBox {
  #paragraph;

  constructor(x, y, text) {
    this.#paragraph = createP().class('chat').position(x, y).hide();
    this.text = text;
  }

  show() {
    this.#paragraph.html(this.text).show();
  }

  hide() {
    this.#paragraph.hide();
  }

  type(speed = 30) {
    this.#paragraph.html('').show();

    let n = 0;

    const intervalID = setInterval((text, setText) => {
      const newText = text.substring(0, n);
      setText(newText);

      if (newText === text) {
        clearInterval(intervalID);
      }
      n++;
    }, speed, this.text, (text) => this.#paragraph.html(text));
  }
}


