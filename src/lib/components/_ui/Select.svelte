<!-- src/lib/components/ui/Select.svelte -->
<script lang="ts">
  interface Option {
    value: string;
    label: string;
  }

  let {
    value = $bindable(),
    options = [],
    placeholder = "Select an option",
    required = false,
    disabled = false,
    id = "",
    name = "",
    ariaLabel = ""
  }: {
    value?: string;
    options: Option[];
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    id?: string;
    name?: string;
    ariaLabel?: string;
  } = $props();
</script>

<div class="select-wrapper">
  <select bind:value {required} {disabled} {id} {name} aria-label={ariaLabel}>
    <option value="">{placeholder}</option>
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
  <div class="select-arrow"></div>
</div>

<style lang="postcss">
  .select-wrapper {
    position: relative;
    width: 100%;
  }

  select {
    width: 100%;
    padding: 0.875rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    background-color: white;
    color: #374151;
    cursor: pointer;
    transition: all 0.2s ease;
    appearance: none;
    padding-right: 3rem;
  }

  .select-arrow {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid #6b7280;
    pointer-events: none;
  }

  select:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  select:open + .select-arrow {
    border-top-color: #3b82f6;
    transform: translateY(-50%) rotate(180deg);
  }

  select:hover:not(:disabled) {
    border-color: #9ca3af;
  }

  select option[value=""] {
    color: #9ca3af;
    font-style: italic;
  }

  select option {
    color: #374151;
    background-color: white;
    padding: 0.5rem;
  }

  select option:hover,
  select option:focus {
    background-color: #eff6ff;
    color: #3b82f6;
  }

  select:invalid {
    border-color: #ef4444;
  }

  select:invalid:focus {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  select:invalid + .select-arrow {
    border-top-color: #ef4444;
  }

  select:disabled {
    background-color: #f9fafb;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }

  select:disabled + .select-arrow {
    border-top-color: #9ca3af;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    select {
      padding: 1rem;
      font-size: 1.125rem;
    }

    .select-arrow {
      right: 1rem;
    }
  }
</style>
