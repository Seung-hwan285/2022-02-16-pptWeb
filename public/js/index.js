import { onHomeSlider} from "./components/onHomeSlider.js";
import {onHomeScroll} from "./components/onHomeScroll.js";



const App=()=> {


    window.addEventListener('scroll', onHomeScroll);

    onHomeSlider();


}

window.onload=()=>{
    App();
}

