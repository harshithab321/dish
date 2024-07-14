import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';

const Home = () => {
  const [data, setData] = useState([]); // Initialize state as null
  const [error, setError] = useState(null); // State to handle errors
  const[ispublisheds,setIspublished]=useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/dishupload/getdish')
      .then(response => {
        setData(response.data); // Ensure you access response.data
      })
      .catch(error => {
        setError(error.message); // Set error message
      });

      axios.get('http://localhost:3000/api/dishreuired/ispublished')
      .then(response => {
        setIspublished(response.data); // Ensure you access response.data
      })
      .catch(error => {
        setIspublished(error.message); // Set error message
      });
  }, []);

console.log(data);
console.log(ispublisheds);
return (
  
    <div className='container'>
      {
    data.map((item) => {
    const isPublishedItem = ispublisheds.find(dish => dish.dishId === item._id);
    return (
      <div className="dish_container" key={item._id}>
        <div className="card">
          <img className="image" src={item.imageUrl} alt="Avatar" />
          <div className='dish_details'>
            <span>{item.dishname}</span>
            {isPublishedItem && (
              <button className={isPublishedItem.ispublished ? "Published" : "Not_Published"}>{isPublishedItem.ispublished ? "Published" : "Not Published"}</button>
            )}
          </div>
        </div>
      </div>
    )
  })
 
}
</div>
  )
}



export default Home;
