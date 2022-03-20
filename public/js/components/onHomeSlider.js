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
    },1000);
};



window.addEventListener('DOMContentLoaded', function(){

    //롤링 배너 복제본 생성
    let roller = document.querySelector('.roller');
    roller.id = 'roller1';

    let clone = roller.cloneNode(true);
    clone.id = 'roller2';
    document.querySelector('.wrap').appendChild(clone); //부착

    //원본,
    document.querySelector('#roller1').style.left = '0px';

    //클래스 할당
    roller.classList.add('original');
    clone.classList.add('clone');


});