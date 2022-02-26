
const nodemailer =require('nodemailer');
const express = require('express');
const bodyParser = require("body-parser");



const app =express();

const multer = require("multer");
const upload = multer({ dest: './public/img' });



// 정적 파일 연결
app.use(express.static(__dirname+"/public"));

// 정적 파일 출력
app.get('/',(req,res)=>{

    res.sendFile(__dirname+'index.html');
});

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());





//이메일 보내기
app.post('/',upload.array('file'),(req,res)=> {


    console.log(req.files);


    const emailSend = `<p>You have a new Contact request</p>
    <h2>Contact Details</h2>
    <ul>
    <li>Name : ${req.body.name}</li>
    <li>Email : ${req.body.email}</li>
    <li>Message : ${req.body.message}</li>

    </ul>

    `;



// 메일 발송 환경 설정
    let transporter = nodemailer.createTransport({

        host: 'smtp.naver.com',
        service: 'naver',

        port: 465,

        auth: {
            user: 'ghks285@naver.com',
            pass: '6216sjsj',

        },
        tls:{
            rejectUnauthorized : false,
        },


    });



    // let ws=fs.createWriteStream('./public/img/'+req.body.file);


// 메일 받을 유저 설정
    let mailOptions = {

        from: 'ghks285@naver.com',
        to: 'ghks285@naver.com',
        subject: 'Node Contact Requst',
        html: emailSend, // html.body
        attachments:[{
            filename : req.body.file,
            contents : new Buffer('C:\\Users\\User\\WebstormProjects\\sister_web\\public\\img\\'+req.body.file)

        }]

    };





//메일 전송
transporter.sendMail(mailOptions,  (error, info)=> {

            if (error) {
                console.log(error);
            } else {
                console.log('Email sent success! : ' + info.response);
            }

        }
    );

    res.end();
});


// port 연결
app.listen(3000,()=>{
    console.log("Server Start");
});