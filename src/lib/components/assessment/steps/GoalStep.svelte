<script lang="ts">
  import { goto } from "$app/navigation";
  import { StepHeader } from "$lib/components/_ui";
  import { goalOptions } from "$lib/data/assessment-options";
  import { assessmentData } from "$lib/stores/assessment";

  let { currentStep = $bindable() } = $props();
  const isFormValid = $derived($assessmentData.businessGoals.length > 0);

  function toggleGoal(goal: string) {
    assessmentData.toggleValueInArr("businessGoals", goal);
  }

  function handleNext(event: Event) {
    event.preventDefault();
    goto("/assessment/results");
  }
  function handleBack() {
    currentStep--;
  }
</script>

<form onsubmit={handleNext} class="form-step">
  <StepHeader
    title="What are your top priorities?"
    subtitle="Select your main business objectives"
    currentStep={4}
    totalSteps={4}
  />

  <fieldset class="form-section">
    <legend class="sr-only">Business Goals</legend>
    <div class="goal-grid">
      {#each goalOptions as goal}
        <button
          type="button"
          class="goal-card"
          class:selected={$assessmentData.businessGoals.includes(goal.label)}
          onclick={() => toggleGoal(goal.label)}
        >
          <div class="goal-icon">{goal.icon}</div>
          <div class="goal-text">{goal.label}</div>
        </button>
      {/each}
    </div>
  </fieldset>

  <div class="form-navigation">
    <button type="button" class="btn-secondary" onclick={handleBack}>
      ← Back
    </button>
    <button type="submit" class="btn-primary" disabled={!isFormValid}>
      Generate Assessment →
    </button>
  </div>
</form>

<style>
  .goal-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .goal-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    background-color: white;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
  }

  .goal-card:hover {
    border-color: #3b82f6;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .goal-card.selected {
    border-color: #3b82f6;
    background-color: #eff6ff;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .goal-icon {
    font-size: 1.5rem;
  }

  .goal-text {
    font-weight: 500;
    color: #374151;
  }
</style>
