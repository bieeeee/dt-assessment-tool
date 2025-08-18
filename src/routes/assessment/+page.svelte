<script lang="ts">
  import ProgressBar from "$lib/components/_ui/ProgressBar.svelte";
  import CompanyProfileStep from "$lib/components/assessment/steps/CompanyProfileStep.svelte";
  import TechAssessmentStep from "$lib/components/assessment/steps/TechAssessmentStep.svelte";

  let currentStep = $state(1);
  const totalSteps = 4;
</script>

<main class="assessment-container">
  <ProgressBar {currentStep} {totalSteps} />
  {#if currentStep === 1}
    <CompanyProfileStep bind:currentStep />
  {:else if currentStep === 2}
    <TechAssessmentStep bind:currentStep />
  {/if}
</main>

<style>
  .assessment-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;
  }
</style>
