<script lang="ts">
  import { goto } from "$app/navigation";

  const demoExamples = [
    {
      title: "Manufacturing Company",
      subtitle: "200 employees, Traditional Operations",
      maturityScore: 4.2,
      savings: "$285K annually",
      icon: "🏭"
    },
    {
      title: "Technology Startup",
      subtitle: "50 employees, SaaS Platform",
      maturityScore: 6.8,
      savings: "$150K annually",
      icon: "💻"
    },
    {
      title: "Professional Services",
      subtitle: "100 employees, Consulting Firm",
      maturityScore: 5.1,
      savings: "$220K annually",
      icon: "🏢"
    }
  ];

  function tryDemo(example: string) {
    goto(`./assessment/demo/${example.toLowerCase().replace(/\s+/g, "-")}`);
  }
</script>

<section id="demos" class="demos-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Try Interactive Examples</h2>
      <p class="section-subtitle">
        See how the assessment works with these sample company profiles
      </p>
    </div>

    <div class="demo-grid">
      {#each demoExamples as example}
        <div class="demo-card">
          <div class="demo-icon">{example.icon}</div>
          <h3 class="demo-title">{example.title}</h3>
          <p class="demo-subtitle">{example.subtitle}</p>

          <div class="demo-metrics">
            <div class="metric">
              <span class="metric-label">Maturity Score</span>
              <span class="metric-value">{example.maturityScore}/10</span>
            </div>
            <div class="metric">
              <span class="metric-label">Potential Savings</span>
              <span class="metric-value">{example.savings}</span>
            </div>
          </div>

          <button class="demo-btn" onclick={() => tryDemo(example.title)}>
            View Results →
          </button>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="postcss">
  @reference "tailwindcss";

  .demos-section {
    padding: 6rem 0;
    background: white;
  }

  .demo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .demo-card {
    background: white;
    border: 2px solid theme(colors.gray.100);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .demo-card:hover {
    border-color: theme(colors.blue.200);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px -8px rgba(0, 0, 0, 0.1);
  }

  .demo-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .demo-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: theme(colors.slate.900);
    margin-bottom: 0.5rem;
  }

  .demo-subtitle {
    color: theme(colors.slate.500);
    margin-bottom: 1.5rem;
  }

  .demo-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .metric {
    padding: 1rem;
    background: theme(colors.gray.50);
    border-radius: 8px;
  }

  .metric-label {
    display: block;
    font-size: 0.75rem;
    color: theme(colors.slate.500);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.25rem;
  }

  .metric-value {
    display: block;
    font-weight: 700;
    color: theme(colors.blue.600);
    font-size: 1rem;
  }

  .demo-btn {
    width: 100%;
    padding: 0.75rem 1.5rem;
    background: theme(colors.blue.600);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .demo-btn:hover {
    background: theme(colors.blue.700);
  }

  @media (max-width: 768px) {
    .demo-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
