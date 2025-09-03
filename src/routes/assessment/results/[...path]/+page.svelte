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
    NextStepSection,
    AIReadinessSection
  } from "$lib/components/assessment";
  import { generateAssessment } from "$lib/utils/ai-assessment";
  import type { AssessmentResult } from "$lib/types/assessment";
  import { assessmentData } from "$lib/stores/assessment";
  import { page } from "$app/state";
  import {
    manufacturingDemoData,
    technologyDemoData,
    professionalServicesDemoData
  } from "$lib/data/demo";

  let loading = $state<boolean>(false);
  let result = $state<AssessmentResult>();
  let error = $state<string>("");

  function getDemoData(type: string) {
    const demoData: Record<string, any> = {
      manufacturing: manufacturingDemoData,
      technology: technologyDemoData,
      professional: professionalServicesDemoData
    };

    return demoData[type] || null;
  }

  onMount(async () => {
    const path = page.params.path?.split("/") || [];

    if (path[0] === "demo") {
      const demoType = path[1];
      result = getDemoData(demoType);
      loading = false;

      if (!result) {
        console.error("There's no data for demo");
        goto("/");
      }
    } else {
      if (!$assessmentData.industry) {
        console.error("There's no assessment data");
        goto("/assessment");
        return;
      }

      try {
        loading = true;
        result = await generateAssessment();
      } catch (err) {
        error = "Failed to generate assessment. Please try again.";
        console.error("Assessment generation error:", err);
      } finally {
        loading = false;
      }
    }
  });
</script>

<svelte:head>
  <title>Your AI Transformation Assessment Results</title>
  <meta
    name="description"
    content="Comprehensive AI readiness assessment with actionable recommendations and implementation roadmap"
  />
</svelte:head>

<main>
  {#if loading}
    <LoadingState />
  {:else if error.length > 0}
    <ErrorState {error} />
  {:else if result}
    <div class="results-container">
      <div class="results-header">
        <h1>Your AI Transformation Assessment</h1>
      </div>

      <section class="summary-section">
        <h2>Executive Summary</h2>
        <p class="summary-text">{result.executiveSummary}</p>
      </section>

      <section class="score-section">
        <ScoreSection
          maturityScore={result.maturityScore}
          industryComparison={result.industryComparison}
        />
      </section>

      {#if result.aiReadiness}
        <section class="ai-readiness-section">
          <div class="section-header">
            <h2>AI Readiness Analysis</h2>
          </div>
          <AIReadinessSection aiReadiness={result.aiReadiness} />
        </section>
      {/if}

      <section class="findings-section">
        <h2>Key Findings</h2>
        <KeyFindingsSection keyFindings={result.keyFindings} />
      </section>

      <section class="roadmap-section">
        <h2>Transformation Roadmap</h2>
        <RoadmapSection roadmap={result.roadmap} />
      </section>

      <section class="roi-section">
        <h2>AI Investment ROI</h2>
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
            goto("/assessment");
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
    background-color: #f9fafb;
    border-radius: 12px;
    gap: 1rem;
  }
</style>
