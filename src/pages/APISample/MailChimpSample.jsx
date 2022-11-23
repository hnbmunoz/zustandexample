import React,{useState, useEffect} from 'react'
import axios from 'axios';

const MailChimpSample = () => {
  // const [sampleValue, setSampleValue] = useState([]);
  const [newFname, setNewFname] = useState('');
  const [newLname, setNewLname] = useState('');
  const [newEmail, setNewEmail] = useState('');


  const handleFname = (e) => {
    setNewFname(e.currentTarget.value)
  }

  const handleLname = (e) => {
    setNewLname(e.currentTarget.value)
  }

  const handleEmail = (e) => {
    setNewEmail(e.currentTarget.value)
  }

  const addData = (e) => {
    //Not Working CORS Error
    e.preventDefault();
    const data = {
      members : [
        {
         
          email_address: newEmail,
          status: "subscribed",
          merge_fields: {
            FNAME: newFname,
            LNAME: newLname
          }
        }
      ]
    }
  
    const jsonData = JSON.stringify(data);
    const url = "https://us10.api.mailchimp.com/3.0/lists/8c53346ce4"
    
    axios.post(url, jsonData, {
      auth: {
        username: 'hnbmunoz',
        password: 'b7cf0a00924c9c0bbfc36ebeec1619d8-us10'
      }
    }).then((response) => {
      console.log(response.status);      
    })
  }
  const inputContainer = {
    padding:"1rem",
    maxWidth:"15rem"
  }

  return (
    <div>
      <div style={inputContainer} className="flex-column">
        <input placeholder='First Name' value={newFname} onChange={handleFname}></input>
        <input placeholder='Last Name' value={newLname} onChange={handleLname}></input>
        <input placeholder='Email Address' value={newEmail} onChange={handleEmail}></input>
        <button style={{cursor:"pointer"}} onClick={addData}>Create New</button>
      </div>
    </div>
  )
}

export default MailChimpSample