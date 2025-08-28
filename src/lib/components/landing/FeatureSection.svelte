<script lang="ts">
  const features = [
    {
      icon: "🔍",
      title: "Industry-Specific Analysis",
      description:
        "Tailored recommendations based on your sector and company size"
    },
    {
      icon: "📊",
      title: "Digital Maturity Scoring",
      description:
        "Comprehensive assessment of your current technology capabilities"
    },
    {
      icon: "🚀",
      title: "Actionable Roadmap",
      description:
        "3-phase transformation plan with realistic timelines and budgets"
    },
    {
      icon: "💰",
      title: "ROI Projections",
      description: "Conservative estimates of cost savings and business impact"
    }
  ];
</script>

<section class="features-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Comprehensive Digital Assessment</h2>
      <p class="section-subtitle">
        Everything you need to understand and plan your digital transformation
      </p>
    </div>

    <div class="features-grid">
      {#each features as feature}
        <div class="feature-card">
          <div class="feature-icon">{feature.icon}</div>
          <h3 class="feature-title">{feature.title}</h3>
          <p class="feature-description">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="postcss">
  @reference "tailwindcss";

  .features-section {
    padding: 6rem 0;
    background: theme(colors.slate.50);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    border: 1px solid theme(colors.gray.100);
    transition: transform 0.2s ease;
  }

  .feature-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px -8px rgba(0, 0, 0, 0.1);
  }

  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .feature-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: theme(colors.slate.900);
    margin-bottom: 0.75rem;
  }

  .feature-description {
    color: theme(colors.slate.600);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .features-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
