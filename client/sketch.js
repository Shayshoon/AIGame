const sendChatMessage = (text) => fetch('/chat', {
  method: 'POST',
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: text })
})

const chatHandler = async (text) => {
  const response = await sendChatMessage(text);
  const data = await response.json();
  console.log(data.received.message, response.status);
  t2.text = data.received.message;
  t2.type();
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  t1 = new TextBox(50, 250, "The quick brown fox jumps over the lazy dog");
  t2 = new TextBox(50, 150, "The quick brown fox jumps over the lazy dog");
  input = new Input(50, 50, chatHandler);
  t1.type();
  input.show();
}

function draw() {
  // background(220);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
