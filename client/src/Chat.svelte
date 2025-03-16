<script lang="ts">
  import autosize from "svelte-autosize";
  // import { derived } from "svelte/store";

  type ChatEntry = { userQuery: string; chatResponse?: string };

  const { chatMessages }: { chatMessages: ChatEntry[] } = $props();
</script>

<div>
  {#each chatMessages as message}
    <p class="userQuery">{message.userQuery}</p>
    {#if message.chatResponse}
      <p class="chatResponse">{message.chatResponse}</p>
    {/if}
  {/each}
</div>

<style>
  .chatResponse {
    max-width: 70%;
  }

  .userQuery {
    margin-left: auto;
    max-width: 40%;
    text-align: right;
    width: fit-content;
    padding-right: 20px;
    background-color: #2e2e2e;
    border-radius: 40px;
    border-top-right-radius: 40px;
    border-top-right-radius: 5px;
    margin-right: 10px;
  }

  div {
    text-align: left;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  p {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-block: 10px;
    /* background-color: #000000; */
    z-index: 10;
    color: #ffffff;
    font-family: "DETERMINATION";
    font-size: 12pt;
    padding-left: 20px;
    white-space: pre-line;
    resize: none;
  }
</style>
