<script lang="ts">
  import { onMount } from "svelte";

  let steps = $state<NodeListOf<Element>>();
  let currentStep = $state(0);

  onMount(() => {
    steps = document.querySelectorAll(".loading-steps .step");

    const highlightNextStep = () => {
      if (steps && currentStep < steps.length) {
        steps[currentStep].classList.add("active");
        currentStep++;
      } else {
        clearInterval(stepInterval);
      }
    };

    const stepInterval = setInterval(highlightNextStep, 500);

    highlightNextStep();
  });
</script>

<div class="loading-state">
  <h2 id="loading-title">
    Generating Your Assessment<span class="dots"></span>
  </h2>
  <p>Analyzing your digital transformation readiness</p>
  <div class="loading-steps">
    <div class="step active">📊 Processing your data</div>
    <div class="step">🔍 Analyzing industry benchmarks</div>
    <div class="step">🚀 Generating recommendations</div>
    <div class="step">📋 Finalizing report</div>
  </div>
</div>

<style>
  .loading-state {
    max-width: 400px;
    margin: 40px auto;
    height: 100vh;
  }

  .loading-state h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    position: relative;
    display: flex;
    align-items: center;
  }

  .loading-state p {
    margin-bottom: 60px;
  }

  .dots::after {
    content: "";
    animation: dots 1.5s steps(3, end) infinite;
  }

  @keyframes dots {
    0% {
      content: "";
    }
    33% {
      content: ".";
    }
    66% {
      content: "..";
    }
    100% {
      content: "...";
    }
  }

  .loading-steps {
    margin-top: 20px;
    text-align: left;
  }

  .step {
    opacity: 0.3;
    transition: opacity 0.5s;
    margin: 8px 0;
    font-size: 1rem;
  }

  .step.active {
    opacity: 1;
    font-weight: bold;
  }
</style>
