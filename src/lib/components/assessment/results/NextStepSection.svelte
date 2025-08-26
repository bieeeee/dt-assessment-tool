<script lang="ts">
  let { nextSteps } = $props();
</script>

<div class="next-steps-list">
  {#each nextSteps as step, index}
    <div class="next-step">
      <div class="step-number">{index + 1}</div>
      <p>{step}</p>
    </div>
  {/each}
</div>

<style>
  .next-steps-list {
    display: grid;
    gap: 1rem;
  }

  .next-step {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    background-color: #f8fafc;
    border-radius: 8px;
  }

  .step-number {
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
