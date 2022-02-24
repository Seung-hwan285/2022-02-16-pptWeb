import {$} from "../utils/querySelector.js";



export const onConstEmailSend=()=> {

    (function () {
        emailjs.init("user_1dDBzNHiHYLFyqIU0I0fc");
    })();




        console.log(1);
        let templateParams = {
            //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
            name: $('#name').value,
            email : $('#email').value,
            message : $('#message').value,


        };
        console.log(templateParams);
        emailjs.send('service_6pwtqte', 'template_d67x55v', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });


}