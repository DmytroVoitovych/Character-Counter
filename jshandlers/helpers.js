export const getEl = (selector) => document.querySelector(selector);

export const setListenerByQuery = (el=window,query,func)=> el.addEventListener(query,func);