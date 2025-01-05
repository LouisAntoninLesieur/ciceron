import 'dotenv/config';
import * as deepl from 'deepl-node';

const apiKey = process.env.DEEPL_API_KEY;

if (!apiKey) {
  throw new Error('DEEPL_API_KEY is not defined');
}

export const deeplTranslator = new deepl.Translator(apiKey);