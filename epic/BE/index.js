const express = require("express");
const creds = require('./config');
const PORT = creds.PORT || 3001
const nodemailer = require("nodemailer");

const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});

//Routing
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home Page' });
});

app.get('/send', function(req,res){
  console.log("first this get request", res)
res.send("we received your info!")
});

app.post('/send', (req, res, next) => {
  let newData = req.body 
  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  })


let mailOptions = {
  from: "rossicandace85@gmail.com",
  to: "rossicandace85@gmail.com",
  subject: `Message from ${newData.name}`,
  html: `
  <h3>Information</h3>
  <ul>
  <li>Name: ${newData.name}</li>
  <li>LastName: ${newData.lname}</li>
  <li>Phone: ${newData.phone}</li>
  <li>Email: ${newData.email}</li>
  <h3>Message</h3>
  <p>${newData.message}</p>
  </ul>
  `
};

smtpTransport.sendMail(mailOptions, (error, res) => {
  if(error){
    res.send(error)
  }
  else{
    console.log("success is the promise", res)
    res.send("success")
  }
})

smtpTransport.close();

})


app.listen(PORT, () => console.log("listening on port 3001"));
