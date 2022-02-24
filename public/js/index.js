import {onClientSlider, onHomeSlider} from "./handle/onHomeSlider.js";
import {onHomeScroll} from "./handle/onHomeScroll.js";
import {$} from "./utils/querySelector.js";

import {onConstEmailSend} from "./handle/onContact.js";

const App=()=>{


    window.addEventListener('scroll',onHomeScroll);
    onClientSlider();
    onHomeSlider();

    
    $('.btn').addEventListener("click",onConstEmailSend);

}

window.onload=()=>{
    App();
}

