<script lang="ts">
  import Rating from "$lib/components/_ui/Rating.svelte";
  import { techCategories } from "$lib/data/assessment-options";
  import { assessmentData } from "$lib/stores/assessment";
  import StepHeader from "../shared/StepHeader.svelte";

  let { currentStep = $bindable() } = $props();

  function setTechLevel(key: string, input: number) {
    assessmentData.update((value) => ({
      ...value,
      techStack: {
        ...value.techStack,
        [key]: input
      }
    }));
  }

  const isValid = $derived(
    Object.values($assessmentData.techStack).every((v) => v > 0)
  );

  function handleNext() {
    currentStep++;
  }

  function handleBack() {
    currentStep--;
  }
</script>

<form onsubmit={handleNext} class="form-step">
  <StepHeader
    currentStep={2}
    totalSteps={4}
    title="How would you rate your current technology?"
    subtitle="Rate each area from basic to advanced"
  />

  {#each techCategories as category}
    <fieldset class="form-section">
      <legend class="tech-legend">
        <span class="tech-icon">{category.icon}</span>
        {category.title}
      </legend>
      <div class="tech-levels">
        {#each category.levels as level, index}
          <Rating
            {index}
            label={level}
            onclick={() => setTechLevel(category.key, index + 1)}
            isSelected={$assessmentData.techStack[category.key] === index + 1}
          />
        {/each}
      </div>
    </fieldset>
  {/each}

  <div class="form-navigation">
    <button type="button" class="btn-secondary" onclick={handleBack}>
      ← Back
    </button>
    <button type="submit" class="btn-primary" disabled={!isValid}>
      Next: Pain Points →
    </button>
  </div>
</form>

<style>
  .tech-levels {
    display: flex;
    justify-content: space-between;
  }
</style>
