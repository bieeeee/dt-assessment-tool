<script lang="ts">
  let { startAssessment } = $props();
</script>

<section class="hero-section">
  <div class="container">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          Assess Your Digital
          <span class="text-gradient">Transformation</span>
          Readiness
        </h1>

        <p class="hero-subtitle">
          Get AI-powered insights into your company's digital maturity with
          industry-specific recommendations, realistic budgets, and measurable
          ROI projections.
        </p>

        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">15min</div>
            <div class="stat-label">Assessment Time</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">3-Phase</div>
            <div class="stat-label">Roadmap Included</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">Industry</div>
            <div class="stat-label">Specific Analysis</div>
          </div>
        </div>

        <div class="hero-actions">
          <button class="btn-primary" onclick={startAssessment}>
            Start Assessment
            <span class="btn-icon">→</span>
          </button>
          <button
            class="btn-secondary"
            onclick={() =>
              document
                .getElementById("demos")
                ?.scrollIntoView({ behavior: "smooth" })}
          >
            View Examples
          </button>
        </div>
      </div>

      <div class="hero-visual">
        <div class="assessment-preview">
          <div class="preview-header">
            <div class="preview-dots">
              <div class="dot active"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
            <span class="preview-title">Digital Assessment</span>
          </div>
          <div class="preview-content">
            <div class="progress-bar">
              <div class="progress-fill" style="width: 65%"></div>
            </div>
            <div class="preview-text">
              <div class="preview-question">
                What's your current technology stack?
              </div>
              <div class="preview-options">
                <div class="preview-option active">Advanced Analytics</div>
                <div class="preview-option">Basic CRM</div>
                <div class="preview-option">Manual Processes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  @reference "tailwindcss";

  .hero-section {
    padding: 4rem 0 6rem 0;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    min-height: 80vh;
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    color: theme(colors.slate.900);
    margin-bottom: 1.5rem;
  }

  .text-gradient {
    background: linear-gradient(
      135deg,
      theme(colors.blue.600),
      theme(colors.indigo.600)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: theme(colors.slate.600);
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .hero-stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: theme(colors.blue.600);
    display: block;
  }

  .stat-label {
    font-size: 0.875rem;
    color: theme(colors.slate.500);
    margin-top: 0.25rem;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .assessment-preview {
    background: white;
    border-radius: 16px;
    box-shadow: 0 20px 60px -12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100%;
    max-width: 400px;
    transform: rotate(-5deg);
    transition: transform 0.3s ease;
  }

  .assessment-preview:hover {
    transform: rotate(0deg) scale(1.02);
  }

  .preview-header {
    background: linear-gradient(
      135deg,
      theme(colors.blue.600),
      theme(colors.indigo.600)
    );
    color: white;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .preview-dots {
    display: flex;
    gap: 0.5rem;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
  }

  .dot.active {
    background: white;
  }

  .preview-title {
    font-weight: 600;
    font-size: 0.875rem;
  }

  .preview-content {
    padding: 2rem 1.5rem;
  }

  .progress-bar {
    height: 8px;
    background: theme(colors.gray.200);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 1.5rem;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(
      90deg,
      theme(colors.blue.500),
      theme(colors.indigo.500)
    );
    transition: width 2s ease-in-out;
  }

  .preview-question {
    font-weight: 600;
    color: theme(colors.slate.800);
    margin-bottom: 1rem;
  }

  .preview-options {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .preview-option {
    padding: 0.75rem;
    border: 2px solid theme(colors.gray.200);
    border-radius: 8px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .preview-option.active {
    border-color: theme(colors.blue.500);
    background: theme(colors.blue.50);
    color: theme(colors.blue.700);
  }

  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }

    .hero-title {
      font-size: 2.5rem;
    }

    .hero-stats {
      justify-content: center;
    }

    .hero-actions {
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
    }

    .btn-primary,
    .btn-secondary {
      width: 100%;
      justify-content: center;
    }

    .container {
      padding: 0 1rem;
    }
  }
</style>
