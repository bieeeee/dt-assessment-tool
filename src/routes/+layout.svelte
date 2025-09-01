<script lang="ts">
  import favicon from "$lib/assets/favicon.ico";
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import "../app.css";

  let { children } = $props();

  injectAnalytics({ mode: dev ? "development" : "production" });
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
