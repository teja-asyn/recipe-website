import axios from '../utils/axios';
import React, { useEffect } from 'react'


const Home = () => {
  const getProducts = async () =>{
    try{
      const response = await axios.get("https://fakestoreapi.com/products/1");
      console.log("Products:", response.data);
    }
    catch(err){
      console.error("Error fetching products:", err);
    }
  }

  useEffect(()=>{
    getProducts()
  },[])
  
  return (
    <div>
      Home
      <button onClick={getProducts}>Get Products</button>
    </div>
  )
}

export default Home
