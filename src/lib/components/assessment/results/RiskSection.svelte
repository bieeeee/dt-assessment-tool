<script lang="ts">
  let { riskAssessment } = $props();
</script>

<div class="risk-grid">
  <div class="risk-category low">
    <h4>🟢 Low Risk</h4>
    <ul>
      {#each riskAssessment.low as risk}
        <li>{risk}</li>
      {/each}
    </ul>
  </div>
  <div class="risk-category medium">
    <h4>🟡 Medium Risk</h4>
    <ul>
      {#each riskAssessment.medium as risk}
        <li>{risk}</li>
      {/each}
    </ul>
  </div>
  <div class="risk-category high">
    <h4>🔴 High Risk</h4>
    <ul>
      {#each riskAssessment.high as risk}
        <li>{risk}</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .risk-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .risk-category {
    padding: 1.5rem;
    border-radius: 12px;
    border: 2px solid;
  }

  .risk-category.low {
    border-color: #10b981;
    background-color: #ecfdf5;
  }

  .risk-category.medium {
    border-color: #f59e0b;
    background-color: #fffbeb;
  }

  .risk-category.high {
    border-color: #ef4444;
    background-color: #fef2f2;
  }

  .risk-category ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0 0;
  }

  .risk-category li:not(:last-child) {
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
