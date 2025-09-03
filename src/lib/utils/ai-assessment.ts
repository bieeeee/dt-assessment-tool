import { get } from "svelte/store";
import { assessmentData } from "$lib/stores/assessment";
import { buildPrompt, parseAssessmentResponse } from "./prompt";

export async function generateAssessment() {
  const data = get(assessmentData);

  const currentScore = assessmentData.calculateAIReadinessScore(data.techStack);

  console.log("DATA", data, "curr score", currentScore);

  try {
    const prompt = buildPrompt(data, currentScore);
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const result = await response.json();

    console.log("RESPONSE", response);

    const assessment = parseAssessmentResponse(result.text, data, currentScore);

    console.log("PARSED RESPONSE", assessment);

    return assessment;
  } catch (err) {
    throw new Error(`Assessment generation failed: ${err}`);
  }
}
