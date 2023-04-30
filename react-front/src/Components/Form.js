import React, { useState } from 'react'

export default function Form() {

    let [name, setName] = useState('')
    let [message, setMessage] = useState('')
    let [user, setUser] = useState('')

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
        console.log(message)
      };
    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log(name)
      };
    const handleUserChange = (event) => {
        setUser(event.target.value);
        console.log(user)
      };

    function PostInscription(event) {

        event.preventDefault();

        fetch("http://localhost:1337/api/forms", {
    
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer 99e52a207247c803802caa4c971b86cd803b7cdd910aaa9cc2347c9e28525b1b7c3056847347d5a454c0e7b3c9da4d491c64e6f9d14bc736c59effbeec44ac5c561fffb9dff9812a60c9b499b4c3061acd4f4d6ec10391f0d8daba5d73634cd9bc3d29fbe36cb60cf8117fb69fbacec6b27df229bd2082fa558399483889a310",
          },
          body: JSON.stringify({
            data:{
              name: name,
              message: message,
              user: user,
            }
          }),
    
        })
          .then((response) => response.json())
          .then((data) => alert("Vous êtes inscrit"));
      }
  return (
    <form method='POST' onSubmit={PostInscription} style={{display:"flex", flexDirection:'column', width:'150px', marginLeft:'40vw', marginTop:'40px'}}>
        <label>Name *
            <input type='text' placeholder='John' required={true} onChange={handleNameChange} value={name}></input>
        </label>
        <label>Mail *
            <input type='mail' placeholder='John@john' required={true} onChange={handleUserChange} value={user}></input>
        </label>
        <label>Message
            <input type='text' placeholder='Message (facultatif)' onChange={handleMessageChange} value={message}></input>
        </label>
        <input type='submit' value='Register' style={{marginTop:'10px'}}></input>
    </form>
  )
}
