import {onClientSlider} from "./handle/onHomeSlider.js";
import {onHomeScroll} from "./handle/onHomeScroll.js";
import {$} from "./utils/querySelector.js";

import {onConstEmailSend} from "./handle/onContact.js";

const App=()=>{

    // onHomeSlider();
    window.addEventListener('scroll',onHomeScroll);
    onClientSlider();
    onConstEmailSend();
}

window.onload=()=>{
    App();
}