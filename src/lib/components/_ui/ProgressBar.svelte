<script lang="ts">
  let { currentStep, totalSteps } = $props();

  const progressPercentage = $derived((currentStep / totalSteps) * 100);
</script>

<main class="assessment-container">
  <div class="progress-container">
    <div class="progress-bar">
      <div class="progress-fill" style="width: {progressPercentage}%"></div>
    </div>
  </div>
</main>

<style>
  .progress-container {
    margin-bottom: 3rem;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background-color: #e5e7eb;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
    transition: width 0.3s ease;
  }
</style>
