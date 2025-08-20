<script lang="ts">
  import { StepHeader } from "$lib/components/_ui";
  import { painPointOptions } from "$lib/data/assessment-options";
  import { assessmentData } from "$lib/stores/assessment";

  let { currentStep = $bindable() } = $props();
  const isFormValid = $derived($assessmentData.painPoints.length > 0);

  function togglePainPoint(painPoint: string) {
    const updatedPainPoints = $assessmentData.painPoints.includes(painPoint)
      ? $assessmentData.painPoints.filter((p) => p !== painPoint)
      : [...$assessmentData.painPoints, painPoint];

    assessmentData.update((v) => ({ ...v, painPoints: updatedPainPoints }));
  }

  function handleNext() {
    currentStep++;
  }
  function handleBack() {
    currentStep--;
  }
</script>

<form onsubmit={handleNext} class="form-step">
  <StepHeader
    title="What challenges are you facing?"
    subtitle="Select all that apply to your organization"
    currentStep={3}
    totalSteps={4}
  />

  <fieldset class="form-section">
    <legend class="sr-only">Pain Points</legend>
    <div class="checkbox-grid">
      {#each painPointOptions as painPoint}
        <label class="checkbox-card">
          <input
            type="checkbox"
            checked={$assessmentData.painPoints.includes(painPoint)}
            onchange={() => togglePainPoint(painPoint)}
          />
          <div class="checkbox-content">
            {painPoint}
          </div>
        </label>
      {/each}
    </div>
  </fieldset>

  <div class="form-navigation">
    <button type="button" class="btn-secondary" onclick={handleBack}>
      ← Back
    </button>
    <button type="submit" class="btn-primary" disabled={!isFormValid}>
      Next: Priorities →
    </button>
  </div>
</form>

<style>
  .checkbox-grid {
    display: grid;
    gap: 0.75rem;
  }

  .checkbox-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .checkbox-card:hover {
    border-color: #3b82f6;
  }

  .checkbox-card:has(input:checked) {
    border-color: #3b82f6;
    background-color: #eff6ff;
  }

  .checkbox-card input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: #3b82f6;
  }

  .checkbox-content {
    font-size: 0.875rem;
    color: #374151;
  }
</style>
