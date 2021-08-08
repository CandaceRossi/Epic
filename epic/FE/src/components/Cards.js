import React, {useState} from 'react';
import axios from 'axios';
import { Card } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import gorjusyep from "../images/gorjusyep.jpg";
import beigebasement from "../images/beigebasement.jpg";
import commercialslick from "../images/commercialslick.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobile } from '@fortawesome/free-solid-svg-icons';
import '../sass/cards.scss';



const Cards = () => {
   
 const [data, setData] = useState({
   name: "",
    email: "",
    phone: "",
    message: "",
    sent: false,
  });
console.log("discord data req", data)
  const onNameChange = (event) => {
        setData({...data, name: event.target.value})
        console.log("updated name state", data)
    }

    const onEmailChange = (event) => {
        setData({...data, email: event.target.value})
    }

    const onPhoneChange = (event) => {
        setData({...data, phone: event.target.value})
         console.log("updated phone state", data)
    }

    const onMsgChange = (event) => {
        setData({...data, message: event.target.value})
    }


const submitEmail = (e) => {
  
  e.preventDefault();  
  let data = {
    // name: {name: "name"}, 
    // email: {email: "email"},
    // phone: {phone: "phone"},
    // message: {message: "message"}

    name: {name: data.name}, 
    email: {email: data.email},
    phone: {phone: data.phone},
    message: {message: data.message}

  }
//"http://localhost:465/send"
 axios
      .post("http://localhost:3001/send", data
   )
      .then((response) => {
          if (response.data.message === 'success'){
              console.log("data that sent", data)
            alert("Message Sent."); 
              setData({sent: true}, resetForm());
              
          }else if(response.data.message === 'fail'){
            alert("Message failed to send.")
              setData({sent: false})
          }
        })
  };
  const resetForm = () => {
    setData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
//  setTimeout(() => {
//       setData(
//         {
//           send: false
//         },
//         3000
//       );
//     });


    return (
      <div className="cards-container">
            <div className="cards-style">

                <Card style={{ border: "none", margin: "0 auto" }}>
                    <Card.Body style={{
                        background: "#d6cec3", color: "rgb(21, 29, 68)", margin: "none", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "row"
                    }}>

                     
                        <img className="firstimg" src={beigebasement} style={{ width: "370px", height: "250px", paddingTop: "15px", display: "flex" }} alt="room" />
                        <div className="imagecard" style={{ border: "none", background: "#d6cec3", color: "rgb(21, 29, 68)", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                            <Card.Title style={{ background: "#d6cec3", color: "rgb(21, 29, 68)", margin: "0 auto", maxWidth: "395px" }}>Beautiful Colors To Make Your Space Feel Just Right!</Card.Title>
                            <Card.Text style={{ background: "#d6cec3", color: "rgb(21, 29, 68)", margin: "0 auto", maxWidth: "360px", fontSize: "1.2rem", display: "flex", alignItems: "flex-start" }}>
                                Preparation is key! Our team starts by protecting all areas, removing electric plates and door handles –
                                patching holes and de-glossing trim so that the finish product is beautiful and durable.
                            </Card.Text>

                        </div>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Body>
                        <Card.Title>We'll Call You!</Card.Title>
                        <Card.Text>
                            Fill in the form and we'll Get In Touch!
    </Card.Text>
                        <div className="card-style">
                            <form onSubmit={submitEmail}>
                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="name">Name</label>
                                    </div><div className="col-75">
                                        <input value={data.name} onChange={onNameChange} style={{ fontSize: "1.2em" }} type="text" id="name" name="name" placeholder="your full name.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="phone">Phone</label>
                                    </div>
                                    <div className="col-75">
                                        <input value={data.phone} onChange={onPhoneChange} style={{ fontSize: "1.2em" }} type="number" id="number" name="number" placeholder="your phone number.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <input className="landingbutton" type="Submit" value="Give Me A Call" />
                                </div>
                            </form>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div> 
    )
}
export default Cards;