<script lang="ts">
  let { title, subtitle, currentStep, totalSteps } = $props();
</script>

<div class="step-header">
  <div class="progress-info">
    <span class="step-indicator">Step {currentStep} of {totalSteps}</span>
  </div>
  <h1>{title}</h1>
  <p class="subtitle">{subtitle}</p>
</div>

<style>
  .step-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .progress-info {
    margin-bottom: 1rem;
  }

  .step-indicator {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #eff6ff;
    color: #3b82f6;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: #6b7280;
    font-size: 1.125rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
</style>
