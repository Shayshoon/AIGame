const sendChatMessage = (text: string) => fetch('/chat', {
  method: 'POST',
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: text })
});

const getChatResponse = async (text: string) => {
  const response = await sendChatMessage(text);
  const data = await response.json();
  return data.received;
  // return `you wrote: ${text}`;
}

export default getChatResponse;
