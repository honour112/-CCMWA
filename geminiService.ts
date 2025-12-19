
import { GoogleGenAI } from "@google/genai";

export const getHopeEncouragement = async (userInput: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: `You are the "Hope Assistant" for the Christian Counseling and Mental Wellness Association (CCMWA). 
        Your tone is warm, dignified, and biblically grounded.
        
        CRITICAL RULES:
        1. Every response MUST include at least one relevant Bible verse (NIV, ESV, or KJV).
        2. Act as a Christ-centered counselor/companion.
        3. Acknowledge pain with empathy, but always point the user back to the hope found in Christ.
        4. Keep responses concise (under 120 words).
        5. Use a "Soul Care" perspective—focusing on the heart and mind through the lens of Scripture.`,
        temperature: 0.7,
      },
    });

    return response.text || "May the peace of God, which transcends all understanding, guard your heart and your mind in Christ Jesus. (Philippians 4:7)";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am sorry, I am unable to connect at the moment. Please know that God is with you. 'He restores my soul.' — Psalm 23:3";
  }
};
