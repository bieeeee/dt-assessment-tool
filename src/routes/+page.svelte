<script lang="ts">
  import { goto } from "$app/navigation";
  import {
    HeroSection,
    DemoSection,
    FeatureSection,
    CTASection
  } from "$lib/components/landing";

  function startAssessment() {
    goto("./assessment");
  }
</script>

<svelte:head>
  <title>AI Transformation Assessment Tool</title>
  <meta
    name="description"
    content="Assess your company's AI readiness and get actionable transformation recommendations"
  />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 landing">
  <HeroSection {startAssessment} />

  <DemoSection />

  <FeatureSection />

  <CTASection {startAssessment} />
</main>

<style lang="postcss">
  @reference "tailwindcss";

  .landing :global(.container) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .landing :global(.section-header) {
    text-align: center;
    margin-bottom: 4rem;
  }

  .landing :global(.section-title) {
    font-size: 2.5rem;
    font-weight: 700;
    color: theme(colors.slate.900);
    margin-bottom: 1rem;
  }

  .landing :global(.section-subtitle) {
    font-size: 1.125rem;
    color: theme(colors.slate.600);
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .landing :global(.container) {
      padding: 0 1rem;
    }

    .landing :global(.section-title) {
      font-size: 2rem;
    }
  }
</style>
