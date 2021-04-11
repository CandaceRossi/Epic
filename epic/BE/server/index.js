const PORT = process.env.PORT || 8000
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();


const transporter = nodemailer.createTransport({
  host: "smtp.example.com", //replace with your email provider
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});


// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post('/send', (req, res, next) => {
  var name = req.body.name
  var phone = req.body.phone
  var email = req.body.email
  var subject = "Mail From Contact Form"
  var message = req.body.message

  var mail = {
    from: name,
    to: "rossicandace85@gmail.com",
    subject: subject,
    phone: phone,
    text: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})


// const path = require("path");

// app.use(express.json())
// app.use(express.urlencoded({extended:false}));

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/api", (request, response) => {
//     response.json({message: "hello from server!"})
// });
// app.post("/api/form", (request, response) => {
//     const transporter = nodemailer.createTransport({
//        service: "Gmail",
//         auth: {
//             user: "candacerossi85@gmail.com", //this should be your gmail account
//             pass: "12345"
//         }
//     });
//     var textBody = `FROM: ${request.body.name}; PHONE: ${request.body.phone}`;
//     var htmlBody = `<h2> Mail From Contact Form </h2> <p>from: ${request.body.name} <a href='mailto: ${request.body.email}'>${request.body.email}</a></p>`;
//     var mail = {
//         from: request.body.name, //this should be your account
//         to: "rossicandace85@gmail.com", // this could be anyone's email
//         subject: "Mail From Contact Form",
//         text: textBody,
//         html: htmlBody
//     };
//     transporter.sendMail(mail, (err, info) => {
//         if (err) {
//             console.log(err);
//             response.json({message: "an error occured; check the server's console log"});
//         }
//         else {
//             response.json({message: `message sent with ID: ${info.messageId}`});
//         }
//     });
// });

app.listen(PORT, () => console.log("listening on port 8000"));
