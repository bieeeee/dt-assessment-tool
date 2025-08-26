<script lang="ts">
  let { maturityScore, industryComparison } = $props();

  function getScoreColor(score: number) {
    if (score >= 8) return "text-green-600";
    if (score >= 6) return "text-yellow-600";
    return "text-red-600";
  }

  function getScoreBackground(score: number) {
    if (score >= 8) return "bg-green-100";
    if (score >= 6) return "bg-yellow-100";
    return "bg-red-100";
  }
</script>

<div class="score-card">
  <div class="score-visual">
    <div class="score-circle {getScoreBackground(maturityScore)}">
      <span class="score-number {getScoreColor(maturityScore)}">
        {maturityScore}
      </span>
      <span class="score-label">/ 10</span>
    </div>
  </div>
  <div class="score-details">
    <h3>Digital Maturity Score</h3>
    <p class="score-benchmark">
      {industryComparison.benchmark}
    </p>
    <div class="percentile-bar">
      <div
        class="percentile-fill"
        style="width: {industryComparison.percentile}%"
      ></div>
    </div>
    <span class="percentile-text"
      >{industryComparison.percentile}th percentile</span
    >
  </div>
</div>

<style>
  .score-card {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .score-circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 4px solid currentColor;
  }

  .score-number {
    font-size: 2.5rem;
    font-weight: 700;
  }

  .score-label {
    font-size: 1rem;
    color: #6b7280;
  }

  .score-details h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .percentile-bar {
    width: 200px;
    height: 8px;
    background-color: #e5e7eb;
    border-radius: 4px;
    overflow: hidden;
    margin: 0.5rem 0;
  }

  .percentile-fill {
    height: 100%;
    background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
    transition: width 0.5s ease;
  }
</style>
