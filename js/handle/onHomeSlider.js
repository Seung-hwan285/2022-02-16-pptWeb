import {$} from "../utils/querySelector.js";


export const onHomeSlider =()=>{
    let counter=1;

    setInterval(()=>{
    // 자동으로 slide1, slide2 ,slide3 선택되게
    $('#slide'+counter).checked =true;
        counter++;
        if(counter > 3){
            counter=1;
        }
    },5000);
};