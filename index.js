

import { characterLimitEl, dynamicTime, excludeSpacesEl, numberLimitEl, sentenceCountEl, textarea, themeSwitcher, totalCharactersEl, wordCountEl } from "./jshandlers/elementList.js";
import { controlSpaceLimit, setCharacterLimit, setCountsOfSentence, setCountsOfWord, setTotalCharacters, setUserTheme, switchTheme } from "./jshandlers/handlers.js";
import { setListenerByQuery } from "./jshandlers/helpers.js";
import { excludeSpacePattern, sentencePattern, wordPattern } from "./jshandlers/regexpattern.js";

(()=>{
setUserTheme();
})();

const formOption = {
space:false,
limit:false
};

const setReadingTime = (numCharacters,outerEl)=>{
if(!!numCharacters){
const readingTime = numCharacters / 800;
const showedTime = Math.round(readingTime) || 1;
const floatValue = +readingTime.toFixed(1).at(-1);
const indexSymbol = floatValue >= 5 ?'>':readingTime === 1?' ':'<';
const lastLetter = showedTime > 1?'minutes':'minute';

outerEl.textContent = `${indexSymbol}${showedTime} ${lastLetter}`;
return;
}

outerEl.textContent = '0 minute';
};

const getTextForAnalyze = (e)=>{

const text = e?.target?.value;
controlSpaceLimit(text,e.target,numberLimitEl?.value,formOption);
setTotalCharacters(text,totalCharactersEl,formOption,excludeSpacePattern); 
setCountsOfWord(text,wordCountEl,wordPattern);
setCountsOfSentence(text,sentenceCountEl,sentencePattern);
setReadingTime(+totalCharactersEl?.textContent,dynamicTime);
};

const applySpacePattern = (e,areaEl)=>{ 
formOption.space = e.target.checked;
areaEl.dispatchEvent(new Event('input'));
areaEl.focus();

if(formOption.limit && areaEl.getAttribute('maxlength')){
    const num = +areaEl.getAttribute('maxlength') + (areaEl.value.length - areaEl.value.match(excludeSpacePattern).length);
    areaEl.setAttribute('maxlength',num);    
}
};

const applyLimit = (e,areaEl)=>{
    formOption.limit = true;
    setListenerByQuery(numberLimitEl,'input',(e)=>setCharacterLimit(e,areaEl));    

if(!e.target.checked){
if(areaEl.classList.contains('isError')) areaEl.classList.remove('isError');    
areaEl.removeEventListener('input',setCharacterLimit);
areaEl.removeAttribute('maxlength');
numberLimitEl.value = '';
formOption.limit = false;
};
};

setListenerByQuery(themeSwitcher,'change',switchTheme);
setListenerByQuery(excludeSpacesEl,'change',(e)=>applySpacePattern(e,textarea));
setListenerByQuery(characterLimitEl,'change',(e)=>applyLimit(e,textarea));
setListenerByQuery(textarea,'input',(e)=>getTextForAnalyze(e,formOption));
