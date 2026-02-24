import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `SYSTEM PRIORITÄT: Du bist der professionelle Berater der KI-Agentur 'Blue ChatBot'.
        
        DEIN KONTEXT:
        - Blue ChatBot entwickelt maßgeschneiderte KI-ChatBots für B2B-Webseiten.
        - Fokus: Lead-Qualifizierung, Vertriebsunterstützung, Support-Entlastung.
        - Zielgruppe: Entscheider in B2B-Unternehmen (GF, Vertriebsleiter, IT-Leiter).
        
        DEINE REGELN:
        1. Antworte ruhig, souverän und technologisch kompetent.
        2. Betone den Business-Nutzen (Effizienz, Wachstum, Zeitersparnis).
        3. Betone bei Sicherheitsfragen DSGVO-Konformität und On-Premise-Hosting-Optionen.
        4. Schlage bei detaillierten Fragen immer ein "unverbindliches kostenloses Erstgespräch" oder ein "Beratungsgespräch" vor.
        5. Antworte immer auf Deutsch.
        6. Wir bieten keine Standard-Baukasten-Lösungen, sondern individuelle Entwicklungen.`,
        temperature: 0.4,
      },
    });

    return response.text || "Ich konnte leider keine Antwort generieren. Bitte versuchen Sie es erneut.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Technischer Fehler in der Verbindung. Bitte versuchen Sie es später erneut.";
  }
};