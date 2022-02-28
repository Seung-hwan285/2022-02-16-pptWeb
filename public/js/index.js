import {onClientSlider, onHomeSlider} from "./handle/onHomeSlider.js";
import {onHomeScroll} from "./handle/onHomeScroll.js";
import {$} from "./utils/querySelector.js";
import {onContact} from "./handle/onContact.js";



const App=()=>{


    window.addEventListener('scroll',onHomeScroll);
    onClientSlider();
    onHomeSlider();
    onHomeScroll();

}


window.onload=()=>{
    App();
}

