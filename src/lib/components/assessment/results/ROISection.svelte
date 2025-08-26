<script lang="ts">
  import { formatCurrency } from "$lib/utils/format";

  let { roiProjection } = $props();
</script>

<div class="roi-grid">
  <div class="roi-card">
    <div class="roi-number">
      {formatCurrency(roiProjection.totalInvestment)}
    </div>
    <div class="roi-label">Total Investment</div>
  </div>
  <div class="roi-card highlight">
    <div class="roi-number">
      {formatCurrency(roiProjection.annualSavings)}
    </div>
    <div class="roi-label">Annual Savings</div>
  </div>
  <div class="roi-card">
    <div class="roi-number">{roiProjection.paybackMonths} months</div>
    <div class="roi-label">Payback Period</div>
  </div>
  <div class="roi-card">
    <div class="roi-number">{roiProjection.threeYearROI}</div>
    <div class="roi-label">3-Year ROI</div>
  </div>
</div>

<style>
  .roi-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .roi-card {
    text-align: center;
    padding: 2rem;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    transition: all 0.2s ease;
  }

  .roi-card.highlight {
    border-color: #10b981;
    background-color: #ecfdf5;
  }

  .roi-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .roi-label {
    color: #6b7280;
    font-size: 0.875rem;
  }
</style>
