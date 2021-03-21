const express = require("express");
const PORT = process.env.PORT || 8000
const app = express();
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");

app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, "public")));

app.get("/api", (request, response) => {
    response.json({message: "hello from server!"})
});
app.post("/api/form", (request, response) => {
    const transporter = nodemailer.createTransport({
       service: "Gmail",
        auth: {
            user: "candacerossi85@gmail.com", //this should be your gmail account
            pass: "12345"
        }
    });
    var textBody = `FROM: ${request.body.name}; PHONE: ${request.body.phone}`;
    var htmlBody = `<h2> Mail From Contact Form </h2> <p>from: ${request.body.name} <a href='mailto: ${request.body.email}'>${request.body.email}</a></p>`;
    var mail = {
        from: request.body.name, //this should be your account
        to: "rossicandace85@gmail.com", // this could be anyone's email
        subject: "Mail From Contact Form",
        text: textBody,
        html: htmlBody
    };
    transporter.sendMail(mail, (err, info) => {
        if (err) {
            console.log(err);
            response.json({message: "an error occured; check the server's console log"});
        }
        else {
            response.json({message: `message sent with ID: ${info.messageId}`});
        }
    });
});

app.listen(PORT, () => console.log("listening on port 8000"));
