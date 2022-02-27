import {$} from "../utils/querySelector.js";

export  const onHomeScroll=()=>{

        const $header = $('header');
        console.log(window.scrollY);
        $header.classList.toggle('sticky',window.scrollY >0);

}
