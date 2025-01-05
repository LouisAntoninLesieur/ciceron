import fs from 'fs-extra';

export async function readFileContent(file) {
  return await fs.readFile(file, 'utf-8');
};

export async function writeFileContent(file, content) {
  await fs.writeFile(file, content);
};
