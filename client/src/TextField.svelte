<script lang="ts">
  import { tick } from "svelte";
  import type { KeyboardEventHandler } from "svelte/elements";
  import autosize from "svelte-autosize";

  let textarea: HTMLTextAreaElement;
  let value = $state("");
  const { submit, ...rest } = $props();

  const resetTextArea = () => {
    value = "";
    tick().then(() => autosize.update(textarea));
  };

  const keyPress: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      value.trim();
      e.preventDefault();

      if (value.valueOf().trim()) {
        submit($state.snapshot(value));
        resetTextArea();
      }
    }
  };
</script>

<div>
  <textarea
    {...rest}
    placeholder="Write your message here..."
    onkeypress={keyPress}
    use:autosize
    bind:value
    bind:this={textarea}
  ></textarea>
</div>

<style>
  div {
    margin-top: auto;
    text-align: left;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  textarea {
    max-height: 10lh;
    width: 100%;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-block: 10px;
    overflow: auto;
    border: 5px solid #ffffff;
    background-color: #000000;
    z-index: 10;
    color: #ffffff;
    font-family: "DETERMINATION";
    font-size: 12pt;
    padding-left: 20px;
    caret-color: #ffffff;
    white-space: pre-line;
    resize: none;
  }
</style>
