<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: theme(colors.slate.50);
  }
</style>
