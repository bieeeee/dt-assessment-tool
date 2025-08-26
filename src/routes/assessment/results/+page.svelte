<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import {
    ScoreSection,
    KeyFindingsSection,
    LoadingState,
    ErrorState,
    RoadmapSection,
    ROISection,
    QuickWinsSection,
    RiskSection,
    NextStepSection
  } from "$lib/components/assessment";
  import { generateAssessment } from "$lib/utils/ai-assessment";
  import type { AssessmentResult } from "$lib/types/assessment";
  import { assessmentData } from "$lib/stores/assessment";

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

      <!-- Transformation Roadmap -->
      <section class="roadmap-section">
        <h2>Transformation Roadmap</h2>
        <RoadmapSection roadmap={result.roadmap} />
      </section>

      <!-- ROI Projection -->
      <section class="roi-section">
        <h2>ROI Projection</h2>
        <ROISection roiProjection={result.roiProjection} />
      </section>

      <!-- Quick Wins -->
      <section class="quick-wins-section">
        <h2>Quick Wins</h2>
        <QuickWinsSection quickWins={result.quickWins} />
      </section>

      <!-- Risk Assessment -->
      <section class="risk-section">
        <h2>Risk Assessment</h2>
        <RiskSection riskAssessment={result.riskAssessment} />
      </section>

      <!-- Next Step -->
      <section class="next-steps-section">
        <h2>Recommended Next Steps</h2>
        <NextStepSection nextSteps={result.nextSteps} />
      </section>

      <!-- Footer Actions -->
      <div class="results-footer">
        <button
          class="btn-secondary"
          onclick={() => {
            assessmentData.clear();
            goto("/dt-accessor/assessment");
          }}
        >
          ← Take Another Assessment
        </button>
      </div>
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

  .results-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
    padding: 2rem;
    background-color: #f9fafb;
    border-radius: 12px;
    gap: 1rem;
  }
</style>
