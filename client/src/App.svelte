<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/favicon.ico";
  import TextField from "./TextField.svelte";
  import Chat from "./Chat.svelte";
  import getChatResponse from "./query";

  type ChatEntry = { userQuery: string; chatResponse?: string };

  const chatMessages: ChatEntry[] = $state([]);

  const submit = async (userMessage: string) => {
    chatMessages.push({ userQuery: userMessage });
    chatMessages[chatMessages.length - 1].chatResponse =
      await getChatResponse(userMessage);
  };
</script>

<div class="chat">
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <Chat {chatMessages} />

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</div>
<TextField {submit} />

<style>
  .chat {
    overflow: auto;
  }
  p {
    white-space: pre-line;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
