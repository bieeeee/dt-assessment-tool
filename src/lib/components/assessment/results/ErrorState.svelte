<script lang="ts">
  import { goto } from "$app/navigation";

  let { error } = $props();
</script>

<div class="error-state">
  <h2>⚠️ Assessment Generation Failed</h2>
  <p>{error}</p>
  <button class="btn-primary" onclick={() => goto("/dt-accessor/assessment")}>
    Try Again
  </button>
</div>

<style>
  .error-state {
    text-align: center;
    padding: 4rem 2rem;
  }

  .error-state h2 {
    color: #dc2626;
    margin-bottom: 1rem;
  }

  .error-state p {
    margin-bottom: 2rem;
  }
</style>
