import {onClientSlider, onHomeSlider} from "./handle/onHomeSlider.js";
import {onHomeScroll} from "./handle/onHomeScroll.js";
import {$} from "./utils/querySelector.js";
import {onContactFileUpload} from "./handle/onContactFileUpload.js";

const App=()=>{

    onHomeSlider();
    onClientSlider();
    onHomeScroll();
    onContactFileUpload();


}

window.onload=()=>{
    App();
}