import {onClientSlider, onHomeSlider} from "./handle/onHomeSlider.js";
import {onHomeScroll} from "./handle/onHomeScroll.js";
import {$} from "./utils/querySelector.js";

const App=()=>{

    onHomeSlider();
    onClientSlider();
    onHomeScroll();


}

window.onload=()=>{
    App();
}