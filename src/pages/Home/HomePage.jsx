import axios from 'axios';
import { useEffect, useState } from 'react';
import "./HomePage.css";
import { Header } from "../../components/Header";
import { ProductGrid } from './ProductGrid';

export function HomePage({cart}) {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchHomeData = async ()=>{
      const response = await axios.get('/api/products')
      setProducts(response.data);
    };

    fetchHomeData();
    
  },[]);

    // fetch('http://localhost:3000/api/products')
    //   .then((response)=>{
    //     return response.json();
    //   }).then((data)=>{
    //     console.log(data);
    //   });

  return (
    <>
      <title>HomePage</title>
      <link rel="icon" href="../public/images/favicon/home-favicon.png"></link>

      <Header cart={cart}/>

      <div className="home-page">
        <ProductGrid products={products}/>
      </div>
    </>
  );
}
