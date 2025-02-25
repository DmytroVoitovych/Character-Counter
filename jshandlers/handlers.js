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


    export {setUserTheme, switchTheme};