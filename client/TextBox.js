class TextBox {
  #paragraph;

  constructor(x, y, text) {
    this.#paragraph = createP().class('chat').position(x, y).hide().center('horizontal');
    this.text = text;
  }

  show() {
    this.#paragraph.html(this.text).show();
  }

  hide() {
    this.#paragraph.hide();
  }

  type(speed = 10) {
    this.#paragraph.html('').show();
    let n = 0;

    return new Promise((resolve) => {
      const intervalID = setInterval((text, setText) => {
        const newText = text.substring(0, n);
        setText(newText);

        if (newText === text) {
          clearInterval(intervalID);
          resolve();
        }
        n++;
      }, speed, this.text, (text) => this.#paragraph.html(text));
    });
  }
}


