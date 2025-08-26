<script lang="ts">
  let { quickWins } = $props();
</script>

<div class="quick-wins-grid">
  {#each quickWins as win}
    <div class="quick-win-card">
      <h4>{win.initiative}</h4>
      <div class="win-details">
        <span class="win-timeframe">⏱️ {win.timeframe}</span>
        <span class="win-cost">💰 {win.cost}</span>
      </div>
      <p class="win-impact">{win.impact}</p>
    </div>
  {/each}
</div>

<style>
  .quick-wins-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .quick-win-card {
    padding: 1.5rem;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    background-color: #fefefe;
  }

  .quick-win-card h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    margin: 0 0 1rem 0;
  }

  .win-details {
    display: flex;
    gap: 1rem;
    margin: 0.5rem 0;
    font-size: 0.875rem;
  }

  .win-timeframe {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    background-color: #eff6ff;
    color: #3b82f6;
    border-radius: 4px;
    font-weight: 500;
  }

  .win-cost {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    background-color: #f0fdf4;
    color: #16a34a;
    border-radius: 4px;
    font-weight: 500;
  }

  .win-impact {
    color: #6b7280;
    font-size: 0.875rem;
    line-height: 1.5;
    margin: 1rem 0 0 0;
  }
</style>
