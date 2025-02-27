const setUserTheme = ()=>{
    const themeDark = !!window.localStorage.getItem('theme'); 
    if(themeDark) document.documentElement.classList.add('dark');
    };
    
    setUserTheme();
    
    
    const switchTheme = ()=>{
    const themeDark = !!window.localStorage.getItem('theme'); 
    
    document.documentElement.classList.toggle('dark');
    if(themeDark) window.localStorage.removeItem('theme');
    else window.localStorage.setItem('theme','dark');
    
    };

    const setTotalCharacters = (text,el,options,pattern)=> {
        if(!options.space){   
        el.textContent = text?.length || '00';
        return;
       }
       el.textContent = text?.match(pattern)?.length || '00';
       };
       
       const setCountsOfWord  = (text,el,pattern) => {
           el.textContent = text.match(pattern)?.length || '00';
           return;  
       };
       
       const setCountsOfSentence  = (text,el,pattern) => {
           el.textContent = text.match(pattern)?.length || '00';
           return;  
       };

       const controlSpaceLimit = (str,textarea,limit,options)=>{
   
        if(options.limit && str !== null  && options.space && textarea.getAttribute('maxlength')){
        textarea.setAttribute('maxlength',+limit + str.match(/\s/g)?.length || 0);
        }
        };


        const setCharacterLimit = (e,areaEl)=> {
            const num =  e.target.value;   
            
            if(num > 0) areaEl.setAttribute('maxlength',num);
            if(num <= areaEl.value.length) areaEl.classList.add('isError');
            if(num > areaEl.value.length && areaEl.classList.contains('isError')) areaEl.classList.remove('isError');
            };


    export {setUserTheme, switchTheme,setTotalCharacters,setCountsOfWord,setCountsOfSentence,controlSpaceLimit,setCharacterLimit};