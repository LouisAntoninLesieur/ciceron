import { deeplTranslator } from "./initDeeplTranslator.js";

export const translate = async (content, targetLang) => {
  try {
    const response = await deeplTranslator.translateText(content, null, targetLang);
    return response;
  } catch (error) {
    console.error('Error translating text:', error);
    throw new Error('Translation failed');
  }
}