import { json, error } from "@sveltejs/kit";
import { GEMINI_API_KEY } from "$env/static/private";

export async function POST({ request }) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      throw error(400, "Prompt is required");
    }

    if (!GEMINI_API_KEY) {
      throw error(500, "API key not configured");
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": GEMINI_API_KEY
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw error(
        response.status,
        `Gemini API error: ${JSON.stringify(errorData)}`
      );
    }

    const data = await response.json();

    return json({
      text:
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response generated"
    });
  } catch (err) {
    console.error("Gemini API error:", err);

    if (err.status) {
      throw err;
    }

    throw error(500, "Failed to generate assessment");
  }
}
