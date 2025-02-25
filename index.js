

import { themeSwitcher } from "./jshandlers/elementList.js";
import { setUserTheme, switchTheme } from "./jshandlers/handlers.js";
import { setListenerByQuery } from "./jshandlers/helpers.js";

(()=>{
setUserTheme();
})();


setListenerByQuery(themeSwitcher,'change',switchTheme);