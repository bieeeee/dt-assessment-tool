<script lang="ts">
  let { startAssessment } = $props();
</script>

<section class="cta-section">
  <div class="container">
    <div class="cta-content">
      <h2 class="cta-title">Ready to Transform Your Business?</h2>
      <p class="cta-subtitle">
        Get your personalized digital transformation roadmap in just 15 minutes
      </p>
      <button class="btn-primary large" onclick={startAssessment}>
        Start Your Assessment Now
        <span class="btn-icon">🚀</span>
      </button>
      <p class="cta-note">No registration required • Free assessment</p>
    </div>
  </div>
</section>

<style lang="postcss">
  @reference "tailwindcss";

  .cta-section {
    padding: 6rem 0;
    background: linear-gradient(
      135deg,
      theme(colors.blue.600),
      theme(colors.indigo.600)
    );
  }

  .cta-content {
    text-align: center;
    color: white;
  }

  .cta-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .cta-subtitle {
    font-size: 1.125rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-note {
    margin-top: 1rem;
    opacity: 0.8;
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    .cta-title {
      font-size: 2rem;
    }
  }
</style>
