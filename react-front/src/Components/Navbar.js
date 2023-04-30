import React from 'react'
import { useState, useEffect } from 'react';
export default function Navbar() {
    const [error, setError] = useState(null);
    const [navbar, setNavbar] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1337/api/navbar?populate=*", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 99e52a207247c803802caa4c971b86cd803b7cdd910aaa9cc2347c9e28525b1b7c3056847347d5a454c0e7b3c9da4d491c64e6f9d14bc736c59effbeec44ac5c561fffb9dff9812a60c9b499b4c3061acd4f4d6ec10391f0d8daba5d73634cd9bc3d29fbe36cb60cf8117fb69fbacec6b27df229bd2082fa558399483889a310"
        },
      })
        .then((response) => response.json())
        .then((data) => setNavbar(data.data.attributes.content))
        .catch((error) => setError(error))
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <nav style={{backgroundColor: 'grey'}}>
        <ul style={{display:'flex', justifyContent: 'space-around', margin:'0px', padding:'10px'}}>
            {navbar.map(({id, name, slug}) => {
                return (
                    <li key={id} style={{listStyleType:'none'}}>
                    <a href={slug} style={{color:'white', textDecoration:'none'}}>{name}</a>
                    </li>

                )
            })}
        </ul>
    </nav>
  )
}
