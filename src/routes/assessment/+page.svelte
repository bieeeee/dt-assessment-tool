<script lang="ts">
  import ProgressBar from "$lib/components/_ui/ProgressBar.svelte";

  let currentStep = $state(1);
  const totalSteps = 4;
</script>

<main class="assessment-container">
  <ProgressBar {currentStep} {totalSteps} />
</main>

<style>
  .assessment-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;
  }
</style>
