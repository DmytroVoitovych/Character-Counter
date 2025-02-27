
const wordPattern = /[\p{L}\p{M}]+(?:[-'./_][\p{L}\p{M}]+)*(?=\s|$)/gu;
const sentencePattern = /[^\s].*?[.!?。！？؟](?=\s+[\p{Lu}\p{Lt}]|\s*$)/gu;
const excludeSpacePattern = /\S/gu;

export {wordPattern,sentencePattern,excludeSpacePattern};