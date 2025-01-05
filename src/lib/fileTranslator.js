import { commentsExtractor } from '../utils/commentsExtractor.js';
import { commentsTranslator } from '../utils/commentsTranslator.js';
import { readFileContent, writeFileContent } from '../utils/fileUtils.js';

export async function fileTranslator(file, answers) {
  
  const fileToBeParsed = await readFileContent(file);

  const comments = commentsExtractor(fileToBeParsed);

  const translatedComments = await commentsTranslator(comments, answers.targetLang);

  let newComments = fileToBeParsed;
  
  comments.forEach((comment, index) => {
    newComments = newComments.replace(comment, translatedComments[index].text);
  });

  if (answers.action === 'inPlace') {
    await writeFileContent(file, newComments);
  } else if (answers.action === 'output') {
    await writeFileContent(answers.output, newComments);
  } else {
    console.log(newComments);
  }
}