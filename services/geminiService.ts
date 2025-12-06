import { GoogleGenAI } from "@google/genai";
import { HOTEL_NAME, HOTEL_LOCATION, ROOMS, AMENITIES } from '../constants';

// Initialize Gemini
// Note: In a production app, the key should be proxied. For this demo, we assume process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for ${HOTEL_NAME}, located at ${HOTEL_LOCATION}.
Your tone is polite, professional, and luxurious. 
You are here to assist guests with booking questions, amenity details, and local recommendations.

Here is the hotel data:
Rooms: ${JSON.stringify(ROOMS.map(r => ({ name: r.name, price: r.price, amenities: r.amenities })))}
Amenities: ${JSON.stringify(AMENITIES.map(a => a.label))}

Rules:
1. Always be brief and helpful.
2. If asked about prices, quote the starting prices in INR.
3. If asked about location, mention Pimple Saudagar, Pune.
4. If asked about booking, encourage them to click the "Book Now" button in the Rooms section.
5. Do not invent amenities not listed.
`;

export const getConciergeResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I apologize, I am having trouble connecting to the front desk right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently offline, please call the front desk directly.";
  }
};
