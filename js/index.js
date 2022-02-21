import {onClientSlider, onHomeSlider} from "./handle/onHomeSlider.js";

const App=()=>{

    onHomeSlider();
    console.log(1);
    onClientSlider();
}

window.onload=()=>{
    App();
}