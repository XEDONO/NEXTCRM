import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateVehicleDescription = async (make: string, model: string, year: number): Promise<string> => {
  const prompt = `Write a short, exciting and professional sales description for a ${year} ${make} ${model}. Highlight its key features and appeal to potential buyers. The description should be around 40-60 words. Do not use markdown.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating vehicle description:", error);
    throw new Error("Failed to generate description from AI.");
  }
};
