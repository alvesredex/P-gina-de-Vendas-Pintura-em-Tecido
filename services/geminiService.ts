import { GoogleGenAI } from "@google/genai";

const COURSE_CONTEXT = `
Você é um assistente de vendas amigável e persuasivo para o "Curso de Pintura em Tecido".
O objetivo do curso é ensinar pintura em tecido do zero ao avançado.
Público alvo: Iniciantes e experientes.
Conteúdo: Técnicas exclusivas, passo a passo detalhado, criação de texturas, luz e sombra, acabamentos.
Benefícios: Aulas online, assista quando quiser, oportunidade de renda extra, suporte em grupo exclusivo.
Bônus: Aulas extras gratuitas, descontos em materiais (tintas e tecidos).
Garantia: 7 dias incondicional.
Preço: Oferta especial de lançamento por R$ 97,00 à vista ou parcelado no cartão.
Instrutor: Professora Ana Clara, com 15 anos de experiência.
Objetivo do chat: Tirar dúvidas e convencer o usuário a clicar no botão de inscrição.
Seja conciso, use emojis moderados e fale português do Brasil.
`;

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  userMessage: string
): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      console.warn("API Key is missing. Returning fallback response.");
      return "Olá! Nosso sistema de chat está passando por uma manutenção rápida. Por favor, veja as informações completas na página ou tente novamente mais tarde! 🎨";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Using gemini-3-flash-preview for fast, responsive text interactions
    const model = 'gemini-3-flash-preview';

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: COURSE_CONTEXT,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "Desculpe, não entendi. Pode repetir?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Tive um pequeno problema técnico. Mas garanto que o curso é incrível! Dê uma olhada nos detalhes abaixo.";
  }
};