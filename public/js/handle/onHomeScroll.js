import {$} from "../utils/querySelector.js";

export  const onHomeScroll=()=>{

        const $header = $('header');

        $header.classList.toggle('sticky',window.scrollY >0);

}
