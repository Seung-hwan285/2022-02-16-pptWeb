import {onClientSlider, onHomeSlider} from "./handle/onHomeSlider.js";
import {onHomeScroll} from "./handle/onHomeScroll.js";
import {$} from "./utils/querySelector.js";



const App=()=>{


    window.addEventListener('scroll',onHomeScroll);
    onClientSlider();
    // onHomeSlider();



    $('.btn').addEventListener("click",(e)=>{
        window.location.reload();

    });


}


window.onload=()=>{
    App();
}

