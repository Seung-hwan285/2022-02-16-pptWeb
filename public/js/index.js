import {onClientSlider, onHomeSlider} from "./handle/onHomeSlider.js";
import {onHomeScroll} from "./handle/onHomeScroll.js";
import {$} from "./utils/querySelector.js";



const App=()=>{


    window.addEventListener('scroll',onHomeScroll);
    onClientSlider();
    // onHomeSlider();


}


window.onload=()=>{
    App();
}

