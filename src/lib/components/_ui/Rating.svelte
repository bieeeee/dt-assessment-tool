<script lang="ts">
  let { onclick, isSelected, index, label } = $props();
</script>

<div class="rating-item">
  <button
    type="button"
    class="rating-button"
    class:selected={isSelected}
    {onclick}
  >
    <span class="rating-number">{index + 1}</span>
  </button>
  <span class="rating-label">{label}</span>
</div>

<style>
  .rating-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rating-button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .rating-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: #f3f4f6;
    border-radius: 50%;
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
  }

  .rating-button:hover .rating-number {
    background-color: rgb(215, 215, 216);
  }

  .rating-button.selected .rating-number {
    background-color: #3b82f6;
    color: white;
  }

  .rating-label {
    text-align: center;
    width: 6.25rem;
    font-size: 0.875rem;
    color: #374151;
  }
</style>
