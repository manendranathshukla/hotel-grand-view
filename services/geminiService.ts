import { GoogleGenAI } from "@google/genai";
import { HOTEL_NAME, HOTEL_LOCATION, ROOMS, AMENITIES } from '../constants';

// Initialize Gemini Lazily
let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (aiClient) return aiClient;

  // process.env.API_KEY is replaced by Vite at build time
  const apiKey = process.env.API_KEY;
  
  // Check if key exists and is not an empty string
  if (!apiKey || apiKey === "") {
    console.warn("Gemini API Key is missing. AI features will be disabled.");
    return null;
  }

  try {
    aiClient = new GoogleGenAI({ apiKey });
    return aiClient;
  } catch (error) {
    console.error("Failed to initialize Gemini client:", error);
    return null;
  }
};

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
  const ai = getClient();

  if (!ai) {
    return "I apologize, but I am currently offline. Please contact the front desk directly for assistance.";
  }

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
    return "I'm currently having trouble processing your request. Please try again later.";
  }
};