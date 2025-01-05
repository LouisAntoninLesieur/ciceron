export const commentsExtractor = (content) => {
  const regex = /\/\/.*|\/\*[\s\S]*?\*\//g;

  if (!content.match(regex)) {
    throw new Error('No comments found');
  }

  return content.match(regex) || [];
}