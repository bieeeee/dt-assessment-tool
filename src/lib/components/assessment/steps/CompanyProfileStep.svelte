<script lang="ts">
  import { StepHeader, Card, Select } from "$lib/components/_ui";
  import {
    industries,
    companySizes,
    revenueRanges,
    businessModels
  } from "$lib/data/assessment-options";
  import { assessmentData } from "$lib/stores/assessment";

  let { currentStep = $bindable() } = $props();

  function selectCard(category: string, value: any) {
    assessmentData.updateValue(category, value);
  }

  $inspect($assessmentData);

  function handleNext() {
    currentStep++;
  }

  const isThisStepValid = $derived(
    $assessmentData.industry &&
      $assessmentData.size.value &&
      $assessmentData.revenue &&
      $assessmentData.businessModel
  );
</script>

<form onsubmit={handleNext} class="form-step">
  <StepHeader
    title="Tell us about your company"
    subtitle="Help us understand your business context"
    currentStep={1}
    totalSteps={4}
  />

  <fieldset class="form-section">
    <legend>Industry</legend>
    <Select
      bind:value={$assessmentData.industry}
      options={industries}
      placeholder="Select your industry"
      required={true}
      ariaLabel="Select your company's industry"
    />
  </fieldset>

  <fieldset class="form-section">
    <legend>Company Size</legend>
    <div class="card-grid">
      {#each companySizes as size}
        <Card
          isSelected={$assessmentData.size.value === size.value}
          onclick={() => selectCard("size", size)}
          title={size.label}
          subtitle={size.subtitle}
        />
      {/each}
    </div>
  </fieldset>

  <fieldset class="form-section">
    <legend>Annual Revenue</legend>
    <div class="card-grid">
      {#each revenueRanges as revenue}
        <Card
          isSelected={$assessmentData.revenue === revenue.value}
          onclick={() => selectCard("revenue", revenue.value)}
          title={revenue.label}
          subtitle={revenue.subtitle}
        />
      {/each}
    </div>
  </fieldset>

  <fieldset class="form-section">
    <legend>Business Model</legend>
    <div class="card-grid">
      {#each businessModels as model}
        <Card
          isSelected={$assessmentData.businessModel === model.value}
          onclick={() => selectCard("businessModel", model.value)}
          title={model.label}
          subtitle={model.subtitle}
        />
      {/each}
    </div>
  </fieldset>

  <div class="form-navigation">
    <button type="submit" class="btn-primary next" disabled={!isThisStepValid}>
      Next: Current Technology →
    </button>
  </div>
</form>

<style lang="postcss">
  .next {
    margin-left: auto;
  }
</style>
