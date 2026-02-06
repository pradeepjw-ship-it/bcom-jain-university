import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCounselorResponse = async (history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history,
      config: {
        systemInstruction: "You are an expert academic counselor for the B.Com program offered by IIC Lakshya in partnership with Jain (Deemed-to-be University). You help students understand the B.Com curriculum, career prospects, and admission requirements. You can now mention that students have easy access to integrate their degree with professional courses like B.Com + ACCA, CA, and CMA through Lakshya's ecosystem. Highlight Jain University's NAAC A++ accreditation and UGC recognition. Be professional, encouraging, and informative. Keep responses concise.",
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.";
  }
};