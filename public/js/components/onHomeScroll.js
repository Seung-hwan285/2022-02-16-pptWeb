import {$} from "../utils/querySelector.js";

export  const onHomeScroll=()=>{

        const $header = $('header');

        $header.classList.toggle('sticky',window.scrollY >0);


        const selctions =document.querySelectorAll('section');

        // 스코롤 내릴때마다 값 가져옴
        const srollY = window.pageYOffset;
        console.log(srollY);


        selctions.forEach((current)=>{
                console.log(current)
                let sectionHeight = current.offsetHeight;
                let sectionTop = current.offsetTop-50;
                let id = current.getAttribute("id");


        });
}



