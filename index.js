import {
  btnShow,
  characterLimitEl,
  dynamicLetterList,
  dynamicTime,
  excludeSpacesEl,
  numberLimitEl,
  sentenceCountEl,
  textarea,
  themeSwitcher,
  totalCharactersEl,
  wordCountEl,
} from "./jshandlers/elementList.js";
import {
  changeButtonData,
  controlSpaceLimit,
  setAreaError,
  setCharacterLimit,
  setCountsOfSentence,
  setCountsOfWord,
  setReadingTime,
  setTotalCharacters,
  setUserTheme,
  switchTheme,
} from "./jshandlers/handlers.js";
import { setListenerByQuery } from "./jshandlers/helpers.js";
import { createList, setStatistic } from "./jshandlers/letterListHandlers.js";
import {
  excludeSpacePattern,
  sentencePattern,
  wordPattern,
} from "./jshandlers/regexpattern.js";

(() => {
  setUserTheme();
})();

const formOption = {
  space: false,
  limit: false,
};

const getTextForAnalyze = (e) => {
  const text = e?.target?.value;
  controlSpaceLimit(text, e.target, numberLimitEl?.value, formOption);
  setTotalCharacters(text, totalCharactersEl, formOption, excludeSpacePattern);
  setCountsOfWord(text, wordCountEl, wordPattern);
  setCountsOfSentence(text, sentenceCountEl, sentencePattern);
  setReadingTime(+totalCharactersEl?.textContent, dynamicTime);
  setStatistic(text, createList, dynamicLetterList);
};

const applySpacePattern = (e, areaEl) => {
  formOption.space = e.target.checked;

  if (formOption.limit && areaEl.getAttribute("maxlength")) {
    const numSpace =
      +areaEl.getAttribute("maxlength") +
      (areaEl.value.length - areaEl.value.match(excludeSpacePattern).length);

    const numNotSpace =
      +areaEl.getAttribute("maxlength") -
      (areaEl.value.length - areaEl.value.match(excludeSpacePattern).length);

    const num = formOption.space ? numSpace : numNotSpace;

    areaEl.setAttribute("maxlength", num);
    areaEl.dispatchEvent(new Event("input"));
    areaEl.focus();

    if (num) setAreaError(num, areaEl);
    return;
  }

  areaEl.dispatchEvent(new Event("input"));
  areaEl.focus();
};

const applyLimit = (e, areaEl) => {
  formOption.limit = true;
  setListenerByQuery(numberLimitEl, "input", (e) => setCharacterLimit(e, areaEl));

  if (!e.target.checked) {
    if (areaEl.classList.contains("isError")) areaEl.classList.remove("isError");
    areaEl.removeEventListener("input", setCharacterLimit);
    areaEl.removeAttribute("maxlength");
    numberLimitEl.value = "";
    formOption.limit = false;
  }
};

setListenerByQuery(textarea, "input", (e) => getTextForAnalyze(e, formOption));
setListenerByQuery(themeSwitcher, "change", switchTheme);
setListenerByQuery(excludeSpacesEl, "change", (e) => applySpacePattern(e, textarea));
setListenerByQuery(characterLimitEl, "change", (e) => applyLimit(e, textarea));
setListenerByQuery(btnShow, "click", changeButtonData);
