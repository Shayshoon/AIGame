function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  t1 = new TextBox(50, 250, "The quick brown fox jumps over the lazy dog");
  t2 = new TextBox(50, 150, "The quick brown fox jumps over the lazy dog");
  input = new Input(50, 50, (text) => { t2.text = text; t2.type() });
  t1.type();
  input.show();
}

function draw() {
  // background(220);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
