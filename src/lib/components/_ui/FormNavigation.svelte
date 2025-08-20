<script lang="ts">
  let {
    canGoBack,
    canGoNext,
    nextButtonText = "Next",
    isLoading,
    handleBack,
    handleNext
  } = $props();
</script>

<div class="form-navigation">
  {#if canGoBack}
    <button
      type="button"
      class="btn-secondary"
      onclick={handleBack}
      disabled={isLoading}
    >
      ← Back
    </button>
  {:else}
    <div></div>
  {/if}

  <button
    type="submit"
    class="btn-primary"
    disabled={!canGoNext || isLoading}
    onclick={handleNext}
  >
    {#if isLoading}
      <span class="loading-spinner"></span>
    {/if}
    {nextButtonText} →
  </button>
</div>

<style>
  .form-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    gap: 1rem;
  }

  .btn-primary,
  .btn-secondary {
    padding: 0.75rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-primary {
    background-color: #3b82f6;
    border-color: #3b82f6;
    color: white;
  }

  .btn-primary:hover:not(:disabled) {
    background-color: #2563eb;
    border-color: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }

  .btn-primary:disabled {
    background-color: #9ca3af;
    border-color: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .btn-secondary {
    background-color: white;
    border-color: #d1d5db;
    color: #374151;
  }

  .btn-secondary:hover:not(:disabled) {
    border-color: #9ca3af;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .loading-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    .form-navigation {
      flex-direction: column-reverse;
      align-items: stretch;
    }

    .btn-primary,
    .btn-secondary {
      width: 100%;
      justify-content: center;
    }
  }
</style>
