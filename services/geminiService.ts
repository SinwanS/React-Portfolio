
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIAssistantResponse = async (userMessage: string) => {
  try {
    const context = `
      You are an AI assistant representing ${PORTFOLIO_DATA.name}, a ${PORTFOLIO_DATA.title}.
      Here is the portfolio information:
      About: ${PORTFOLIO_DATA.about}
      Skills: ${PORTFOLIO_DATA.skills.map(s => s.name).join(', ')}
      Work History: ${PORTFOLIO_DATA.experiences.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}
      Certifications: ${PORTFOLIO_DATA.certifications.map(c => c.name).join(', ')}

      Answer questions as if you were ${PORTFOLIO_DATA.name}'s professional assistant. 
      Be helpful, concise, and professional. 
      If someone asks about contact info or things not listed, politely guide them to the contact section or say you're focusing on professional inquiries.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: context,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently taking a small break. Please check back later or contact me directly!";
  }
};
