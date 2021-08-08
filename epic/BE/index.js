const express = require("express");
const creds = require('./config');
const PORT = creds.PORT || 3001
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');

app.use(express.json());

//body parser middleware
app.use(bodyParser.json());
// app.use(bodyParser.text({type: 'text/xml'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors()); 

//static folder
// app.use(express.static(path.join(__dirname,'public')));


//Routing

app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home Page' });
});

// app.get('/contact', (req, res) => {
//   res.render('contact', { 
//     title: 'Contact Page' });
// })

//not in use at the moment
// if (process.env.NODE_ENV === 'production'){


  //keep
  // app.use(express.static(path.join(__dirname, 'public')));

  // app.get('*', function(req, res){
  //     res.sendFile(path.join(__dirname, 'public', 'index.html'))
  // })


// }

//not in use at the moment
// app.use(
//   cors({
//     origin: 'http://localhost:3000/send',
//     credentials: true,
//   })
// );

//keep
// app.use((request, response, next) => {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


//keep
//use npm start. if error starting delete node and pkg-lock and npm install again
// var transporter = nodemailer.createTransport({
//   name: "smtp.gmail.com",
//   host: "smtp.gmail.com", 
//   port: PORT,
//   secure: true,
//   requireTLS: true,
//   auth: {
//     user: creds.USER,
//     pass: creds.PASS
//   }
// });

  // verify connection configuration
// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });


app.post('/send', (req, res) => {
  let data = req.body 
  console.log("alligator data", data)
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
  subject: `Message from ${data.name}`,
  html: `
  <h3>Information</h3>
  <ul>
  <li>Name: ${data.name}</li>
  <li>Phone: ${data.phone}</li>
  <li>email: ${data.email}</li>
  <h3>Message</h3>
  <p> name: ${data.name} \n  email: ${data.email} \n ${data.phone}</p>
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

//keep
// app.post('/send', async (req, res, next) => {
  
//   var data = req.body;
//   console.log("this is the data alligator", JSON.stringify(data));
//   var to = "rossicandace85@gmail.com"
//   var subject = "Mail From Contact Form"
//   // var name = `${data.name}`
//   // var email = `${data.email}`
//   // var phone = `${data.phone}`
//   var message = `${subject} \n  name: ${data.name} \n  email: ${data.email} \n ${data.phone}`


// var mail = {
//     from: to,
//     to: to,
//     subject: subject,
//     text: message
//   }

// transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: 'fail'
//       })
//     } else {
//       res.json({
//        status: 'success'
//       })
//     }
//   });

//   // transporter.close();
// });



app.listen(PORT, () => console.log("listening on port 3001"));
