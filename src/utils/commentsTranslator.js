import { translate } from './defineTranslate.js';

export async function commentsTranslator(comments, targetLang) {
  return await Promise.all(
    comments.map((comment) => translate(comment, targetLang))
  );
}
