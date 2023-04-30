import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Form from "../Components/Form";


const Home = () => {
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/restaurants?populate=*", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 99e52a207247c803802caa4c971b86cd803b7cdd910aaa9cc2347c9e28525b1b7c3056847347d5a454c0e7b3c9da4d491c64e6f9d14bc736c59effbeec44ac5c561fffb9dff9812a60c9b499b4c3061acd4f4d6ec10391f0d8daba5d73634cd9bc3d29fbe36cb60cf8117fb69fbacec6b27df229bd2082fa558399483889a310"
        },
      })
        .then((response) => response.json())
        .then((data) => setRestaurants(data.data))
        .catch((error) => setError(error))
  }, []);
  
  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className="Home">
    <Navbar/>
      <ul> 
        {restaurants.map(({ id, attributes }) => ( 
          <li key={id} style={{listStyle:'none'}}>
            <h1 key={'h1' + id }>{attributes.Name}</h1>
            <p key={'p' + id}>{attributes.Description}</p>
          </li>
        ))}
      </ul>
    <Form/>
    </div>
  );
};

export default Home;