const express = require("express");
const creds = require('./config');
const PORT = creds.PORT || 3001
const nodemailer = require("nodemailer");
// const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cors()); 

//body parser middleware
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

//Routing
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home Page' });
});

app.post('/send', (req, res) => {
  console.log(req.body)
  let newData = req.body 
  
  console.log("alligator data", newData)
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
  <li>Phone: ${newData.phone}</li>
  <li>email: ${newData.email}</li>
  <h3>Message</h3>
  <p> name: ${newData.name} \n  email: ${newData.email} \n ${newData.phone}</p>
  </ul>
  `
};

smtpTransport.sendMail(mailOptions, (error, res) => {
  if(error){
    res.send(error)
  }
  else{
    res.send("success")
  }
})

smtpTransport.close();

})


app.listen(PORT, () => console.log("listening on port 3001"));
