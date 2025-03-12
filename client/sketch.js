// TODO: Move these functions to an external module
const sendChatMessage = (text) => fetch('/chat', {
  method: 'POST',
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: text })
})

const chatHandler = async (text) => {
  const response = await sendChatMessage(text);
  const data = await response.json();
  t1.text = data.received;
  t1.type();
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  input = new Input(50, 50, chatHandler);
  t1 = new TextBox(50, 150, "The quick brown fox jumps over the lazy dog");
  t1.type();
  input.show();
}

function draw() {
  // background(220);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
