import { Command } from 'commander';
import { userPrompt } from '../lib/userPrompt.js';
import { fileTranslator } from '../lib/fileTranslator.js';
import { languages } from '../data/languages.js';

const program = new Command();

export function ciceron() {
  program
    .command('translate <file>')
    .description('Translate comments in a file')
    .action(async (file) => {
      const answers = await userPrompt(languages);
      await fileTranslator(file, answers);
    });

  program.parse(process.argv);
};