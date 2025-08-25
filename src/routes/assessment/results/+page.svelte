<script lang="ts">
  import { onMount } from "svelte";
  import {
    ScoreSection,
    KeyFindingsSection,
    LoadingState,
    ErrorState
  } from "$lib/components/assessment";
  import { generateAssessment } from "$lib/utils/ai-assessment";
  import type { AssessmentResult } from "$lib/types/assessment";

  let loading = $state<boolean>(false);
  let result = $state<AssessmentResult>();
  let error = $state<string>("");

  onMount(async () => {
    try {
      loading = true;
      result = await generateAssessment();
    } catch (err) {
      error = "Failed to generate assessment. Please try again.";
      console.error("Assessment generation error:", err);
    } finally {
      loading = false;
    }
  });
</script>

<main>
  {#if loading}
    <LoadingState />
  {:else if error.length > 0}
    <ErrorState {error} />
  {:else if result}
    <div class="results-container">
      <!-- Header -->
      <div class="results-header">
        <h1>Your Digital Transformation Assessment</h1>
      </div>

      <!-- Executive Summary -->
      <section class="summary-section">
        <h2>Executive Summary</h2>
        <p class="summary-text">{result.executiveSummary}</p>
      </section>

      <!-- Maturity Score -->
      <section class="score-section">
        <ScoreSection
          maturityScore={result.maturityScore}
          industryComparison={result.industryComparison}
        />
      </section>

      <!-- Key Findings -->
      <section class="findings-section">
        <h2>Key Findings</h2>
        <KeyFindingsSection keyFindings={result.keyFindings} />
      </section>
    </div>
  {/if}
</main>

<style>
  .results-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;
  }

  .results-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid #e5e7eb;
  }

  .results-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1f2937;
  }

  section {
    margin-bottom: 3rem;
    background-color: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  section h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1.5rem;
  }

  .summary-text {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #374151;
  }
</style>
