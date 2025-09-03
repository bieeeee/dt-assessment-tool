<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
  import "../app.css";

  let { children } = $props();

  injectSpeedInsights();
  injectAnalytics({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
  <title>AX Assessment - Check Your Readiness</title>
  <meta
    name="description"
    content="Use AX Assessment to evaluate your AI transformation readiness and get actionable insights for your business."
  />
  <meta
    name="keywords"
    content="AX assessment, readiness check, AI assessment, AI transformation, business evaluation"
  />
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: theme(colors.slate.50);
  }
</style>
