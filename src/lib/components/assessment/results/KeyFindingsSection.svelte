<script lang="ts">
  let { keyFindings } = $props();
</script>

<div class="findings-grid">
  {#each keyFindings as finding, index}
    <div class="finding-card">
      <div class="finding-number">{index + 1}</div>
      <p>{finding}</p>
    </div>
  {/each}
</div>

<style>
  .findings-grid {
    display: grid;
    gap: 1rem;
  }

  .finding-card {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    background-color: #f8fafc;
    border-radius: 8px;
    border-left: 4px solid #3b82f6;
  }

  .finding-number {
    width: 32px;
    height: 32px;
    background-color: #3b82f6;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    flex-shrink: 0;
  }
</style>
