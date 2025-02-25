
const wordPattern = /\p{L}+/gu;
const sentencePattern = /(?:[^\s].*?[.!?。！？](?:\s|$)|[^\s].*?$)/gu;


export {wordPattern,sentencePattern};