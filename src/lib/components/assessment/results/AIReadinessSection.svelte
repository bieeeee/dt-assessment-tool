<script lang="ts">
  let { aiReadiness } = $props();

  function getStateColor(state: string) {
    switch (state.toLowerCase()) {
      case "advanced":
        return "text-green-600 bg-green-50 border-green-200";
      case "moderate":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "basic":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "none":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  }

  function getStateIcon(state: string) {
    switch (state.toLowerCase()) {
      case "advanced":
        return "🚀";
      case "moderate":
        return "⚡";
      case "basic":
        return "🌱";
      case "none":
        return "🔍";
      default:
        return "📊";
    }
  }
</script>

<div class="ai-readiness-container">
  <!-- Current State -->
  <div class="current-state-card">
    <div class="state-header">
      <span class="state-icon">{getStateIcon(aiReadiness.currentState)}</span>
      <h3>Current AI State</h3>
    </div>
    <div class="state-badge {getStateColor(aiReadiness.currentState)}">
      {aiReadiness.currentState}
    </div>
  </div>

  <!-- Opportunities -->
  <div class="opportunities-section">
    <h4>Top AI Opportunities</h4>
    <div class="opportunities-grid">
      {#each aiReadiness.opportunities as opportunity, index}
        <div class="opportunity-card">
          <div class="opportunity-number">{index + 1}</div>
          <p>{opportunity}</p>
        </div>
      {/each}
    </div>
  </div>

  <!-- Competitive Gap -->
  <div class="competitive-gap-section">
    <div class="gap-header">
      <span class="gap-icon">⚠️</span>
      <h4>Competitive Risk</h4>
    </div>
    <p class="gap-text">{aiReadiness.competitiveGap}</p>
  </div>
</div>

<style>
  .ai-readiness-container {
    display: grid;
    gap: 2rem;
  }

  .current-state-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    border-radius: 12px;
    border: 1px solid #e2e8f0;
  }

  .state-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .state-icon {
    font-size: 1.5rem;
  }

  .state-header h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin: 0;
  }

  .state-badge {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.875rem;
    text-transform: capitalize;
    border: 1px solid;
  }

  .opportunities-section h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  .opportunities-grid {
    display: grid;
    gap: 1rem;
  }

  .opportunity-card {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    background-color: #f8fafc;
    border-radius: 8px;
    border-left: 4px solid #3b82f6;
  }

  .opportunity-number {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    flex-shrink: 0;
  }

  .opportunity-card p {
    margin: 0;
    line-height: 1.5;
    color: #374151;
  }

  .competitive-gap-section {
    padding: 1.5rem;
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border-radius: 8px;
    border-left: 4px solid #f59e0b;
  }

  .gap-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .gap-icon {
    font-size: 1.25rem;
  }

  .gap-header h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #92400e;
    margin: 0;
  }

  .gap-text {
    color: #92400e;
    line-height: 1.5;
    margin: 0;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .current-state-card {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }
</style>
