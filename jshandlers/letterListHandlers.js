import { btnShow, dynamicLetterList } from "./elementList.js";



const createList = (renderData,outerEl,btn)=>{

    const fragmentLi = new DocumentFragment();

   renderData.forEach(e=>{
    const li = document.createElement('li');
    const div = document.createElement('div');
    const span = document.createElement('span');
    
    span.textContent = `${e.amount + e.percent}`;
    div.classList = 'progress';
    li.textContent = e.letter;
    li.appendChild(div);
    div.after(span);
    div.style = `--percent:${e.percent.match(/[\d.]+%/g)[0]}`;
   
    fragmentLi.append(li);
   
   });
   
   if(fragmentLi.childElementCount <= 5 && btn.dataset.show === 'true') btn.click();  
   outerEl.replaceChildren(fragmentLi);
   
};


const setStatistic = (text, renderFunction,outerEl) => {
    const onlyLetters = text.match(/\p{L}/gu);

    if(!onlyLetters?.length){ 
    outerEl.hasChildNodes() && outerEl.replaceChildren();
    return;
     }
        
    const arrForRender = [];
  
    const firstInteration = onlyLetters.reduce((acc, e) => {
      acc[e.toUpperCase()] = (acc[e.toUpperCase()] || 0) + 1;
      return acc;
    }, {});
  
    for (const key in firstInteration) {
       arrForRender.push(
        {
          letter: key,
          amount: firstInteration[key],
          percent:
            `(${((100 * firstInteration[key]) / onlyLetters.length).toFixed(2)}%)`,
        }
      );
    }
    const readyList = arrForRender.toSorted((a,b)=>b.amount - a.amount);
    renderFunction(readyList,dynamicLetterList,btnShow);
  };



  export{setStatistic,createList};