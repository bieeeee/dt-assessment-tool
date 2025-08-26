<script lang="ts">
  let { maturityScore, industryComparison } = $props();

  function getScoreColor(score: number) {
    if (score >= 8) return "text-green-600";
    if (score >= 6) return "text-yellow-600";
    return "text-red-600";
  }

  function getScoreStyles(score: number) {
    if (score >= 8) return "bg-green-600 text-white border-green-200";
    if (score >= 6) return "bg-yellow-500 text-white border-yellow-200";
    return "bg-red-500 text-white border-red-200";
  }

  function getContainerStyles(score: number) {
    if (score >= 8) return "bg-green-50 border-green-200";
    if (score >= 6) return "bg-yellow-50 border-yellow-200";
    return "bg-red-50 border-red-200";
  }
</script>

<div class="score-card">
  <div class="score-container {getContainerStyles(maturityScore)}">
    <div class="score-circle {getScoreStyles(maturityScore)}">
      <span class="score-number">
        {maturityScore}
      </span>
      <span class="score-label">/ 10</span>
    </div>
    <div class="score-ring"></div>
  </div>

  <div class="score-details">
    <div class="score-header">
      <h3>Digital Maturity Score</h3>
      <span
        class="score-badge
        {getScoreColor(maturityScore)} 
        bg-white/50 backdrop-blur-sm"
      >
        {maturityScore >= 8
          ? "Excellent"
          : maturityScore >= 6
            ? "Good"
            : "Needs Improvement"}
      </span>
    </div>

    <p class="score-benchmark">
      {industryComparison.benchmark}
    </p>

    <div class="percentile-container">
      <div class="percentile-header">
        <span class="percentile-label">Industry Percentile</span>
        <span class="percentile-value">{industryComparison.percentile}th</span>
      </div>
      <div class="percentile-bar">
        <div
          class="percentile-fill bg-gradient-to-r from-blue-500 to-indigo-600"
          style="width: {industryComparison.percentile}%"
        ></div>
        <div
          class="percentile-indicator"
          style="left: {industryComparison.percentile}%"
        >
          <div class="indicator-dot"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .score-card {
    margin: -2rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 3rem;
    position: relative;
    overflow: hidden;
    border-radius: inherit;
  }

  .score-container {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 2px solid inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.3s ease;
  }

  .score-container:hover {
    transform: scale(1.05);
  }

  .score-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
  }

  .score-number {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1;
  }

  .score-label {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 2px;
    opacity: 0.9;
  }

  .score-ring {
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border-radius: 50%;
    border: 2px solid #e2e8f0;
    opacity: 0.3;
  }

  .score-number {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .score-label {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 2px;
  }

  .score-details {
    flex: 1;
  }

  .score-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .score-header h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0;
  }

  .score-badge {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    border: 1px solid currentColor;
  }

  .score-benchmark {
    color: #64748b;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  .percentile-container {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
  }

  .percentile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .percentile-label {
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 500;
  }

  .percentile-value {
    font-size: 1rem;
    font-weight: 700;
    color: #3b82f6;
  }

  .percentile-bar {
    width: 100%;
    height: 12px;
    background-color: #f1f5f9;
    border-radius: 6px;
    position: relative;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
  }

  .percentile-fill {
    height: 100%;
    border-radius: 6px;
    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  }

  .percentile-indicator {
    position: absolute;
    top: -2px;
    transform: translateX(-50%);
    transition: left 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .indicator-dot {
    width: 16px;
    height: 16px;
    background: white;
    border: 3px solid #3b82f6;
    border-radius: 50%;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .score-card {
      flex-direction: column;
      gap: 2rem;
      text-align: center;
    }

    .score-header {
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
    }

    .percentile-header {
      flex-direction: column;
      gap: 0.25rem;
      align-items: center;
    }
  }
</style>
