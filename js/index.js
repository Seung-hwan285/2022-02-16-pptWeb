import {onClientSlider, onHomeSlider} from "./handle/onHomeSlider.js";

const App=()=>{

    onHomeSlider();
    onClientSlider();
}

window.onload=()=>{
    App();
}