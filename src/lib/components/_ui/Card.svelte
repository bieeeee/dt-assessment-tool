<script lang="ts">
  let { onclick, isSelected, title, subtitle } = $props();
</script>

<button type="button" class="card-option" class:selected={isSelected} {onclick}>
  <div class="card-title">{title}</div>
  <div class="card-subtitle">{subtitle}</div>
</button>

<style>
  .card-option {
    padding: 1.5rem;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    background-color: white;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: center;
  }

  .card-option:hover {
    border-color: #3b82f6;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .card-option.selected {
    border-color: #3b82f6;
    background-color: #eff6ff;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .card-title {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
  }

  .card-subtitle {
    font-size: 0.875rem;
    color: #6b7280;
  }
</style>
