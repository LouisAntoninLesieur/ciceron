import inquirer from "inquirer";

export async function userPrompt(languages) {
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'targetLang',
      message: 'Which language do you want to translate the comments to:',
      choices: languages
    },
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: [
        { name: 'Replace the original files', value: 'inPlace' },
        { name: 'Output to a new file or an existing one:', value: 'output' },
      ]
    },
    {
      type: 'input',
      name: 'output',
      message: 'Enter the output file path:',
      when: (answers) => answers.action === 'output',
    }
  ])
}