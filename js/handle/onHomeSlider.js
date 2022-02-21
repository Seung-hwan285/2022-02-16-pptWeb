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


export  const onClientSlider=()=>{
    var swiper = new Swiper(".mySwiper", {
        effect: "flip",
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


}
