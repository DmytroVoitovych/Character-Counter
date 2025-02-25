

import { sentenceCountEl, textarea, themeSwitcher, totalCharactersEl, wordCountEl } from "./jshandlers/elementList.js";
import { setUserTheme, switchTheme } from "./jshandlers/handlers.js";
import { setListenerByQuery } from "./jshandlers/helpers.js";
import { sentencePattern, wordPattern } from "./jshandlers/regexpattern.js";

(()=>{
setUserTheme();
})();

const setTotalCharacters = (text,el,option)=> {

if(!option){
 el.textContent = text.length || '00';
 return;    
}
};

const setCountsOfWord  = (text,el,pattern) => {
    el.textContent = text.match(pattern)?.length || '00';
    return;  
};

const setCountsOfSentence  = (text,el,pattern) => {
    el.textContent = text.match(pattern)?.length || '00';
    return;  
};

const getTextForAnalyze = (e)=>{

const text = e?.target?.value;
setTotalCharacters(text,totalCharactersEl); 
setCountsOfWord(text,wordCountEl,wordPattern);
setCountsOfSentence(text,sentenceCountEl,sentencePattern);
};


setListenerByQuery(themeSwitcher,'change',switchTheme);
setListenerByQuery(textarea,'input',getTextForAnalyze);