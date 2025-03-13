// TODO: Move these functions to an external module
const sendChatMessage = (text) => fetch('/chat', {
  method: 'POST',
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: text })
})

let isWaiting = false;

const chatHandler = async (text) => {
  if (!isWaiting) {
    isWaiting = true;
    input.disable();
    const response = await sendChatMessage(text);
    const data = await response.json();
    t1.text = data.received;
    await t1.type();
    input.enable();
    isWaiting = false;
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  input = new Input(0, 50, chatHandler);
  t1 = new TextBox(0, 550, "The quick brown fox jumps over the lazy dog");
  t1.type();
  input.show();
}

function draw() {
  // background(220);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
