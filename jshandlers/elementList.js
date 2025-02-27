import { getEl } from "./helpers.js";

const themeSwitcher = getEl("#themeSwitcher");
const textarea = getEl("#analyzeInput");
const totalCharactersEl = getEl("#totalCharacters");
const wordCountEl = getEl("#wordCount");
const sentenceCountEl = getEl("#sentenceCount");
const excludeSpacesEl = getEl("#excludeSpaces");
const characterLimitEl = getEl("#characterLimit");
const numberLimitEl = getEl("#numberLimit");
const dynamicTime = getEl('.dynamicTime');

export {
  themeSwitcher,
  textarea,
  totalCharactersEl,
  wordCountEl,
  sentenceCountEl,
  excludeSpacesEl,
  characterLimitEl,
  numberLimitEl,
  dynamicTime
};
