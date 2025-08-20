<script lang="ts">
  import { goto } from "$app/navigation";
</script>

<div>
  <h1 class="text-3xl font-bold">
    Assess Your Digital Transformation Readiness
  </h1>
  <button onclick={() => goto("./assessment")}>Start</button>
</div>

<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>
