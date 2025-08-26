<script lang="ts">
  import type { Roadmap } from "$lib/types/assessment";

  let { roadmap }: { roadmap: Roadmap } = $props();

  function formatCurrency(value: string) {
    if (typeof value === "string" && value.includes("-")) {
      const [min, max] = value
        .split("-")
        .map((v) => parseInt(v.replace(/\D/g, "")));
      return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
    }
    return value;
  }
</script>

<div class="roadmap-timeline">
  {#each Object.entries(roadmap) as [phase, data]}
    <div class="phase-card">
      <div class="phase-header">
        <h3>{data.title}</h3>
        <span class="phase-budget">{formatCurrency(data.budget)}</span>
      </div>
      <div class="initiatives">
        {#each data.initiatives as initiative}
          <div class="initiative">
            <h4>{initiative.name}</h4>
            <p class="initiative-description">{initiative.description}</p>
            <div class="initiative-details">
              <span class="initiative-cost"
                >{formatCurrency(initiative.cost)}</span
              >
              <span class="initiative-impact">{initiative.impact}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .roadmap-timeline {
    display: grid;
    gap: 2rem;
  }

  .phase-card {
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    padding: 2rem;
    position: relative;
  }

  .phase-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .phase-budget {
    background-color: #eff6ff;
    color: #3b82f6;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 600;
  }

  .initiatives {
    display: grid;
    gap: 1rem;
  }

  .initiative {
    padding: 1rem;
    background-color: #f9fafb;
    border-radius: 8px;
  }

  .initiative h4 {
    margin-bottom: 0.5rem;
    color: #1f2937;
  }

  .initiative-description {
    color: #6b7280;
    margin-bottom: 1rem;
  }

  .initiative-details {
    display: flex;
    gap: 1rem;
    font-size: 0.875rem;
  }

  .initiative-cost {
    background-color: #fef3c7;
    color: #92400e;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }

  .initiative-impact {
    background-color: #d1fae5;
    color: #065f46;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }
</style>
