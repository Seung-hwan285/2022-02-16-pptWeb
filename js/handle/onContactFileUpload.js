import {$} from "../utils/querySelector.js";

export const onContactFileUpload=()=>{
    const $fileUpload=$('#fileUpload');


    $fileUpload.change=()=>{
        let FormData = new FormData();



        let sFile = $('#fileUpload')[0].files[0];

        
        console.log(sFile);
        FormData.append(sFile);
    }
}