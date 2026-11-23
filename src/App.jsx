import { useState, useEffect } from 'react';
import { Routes , Route} from 'react-router'; 
import { HomePage } from './pages/Home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/order/OrdersPage';
import { TrackingPage } from './pages/tracking/TrackingPage';
import { ErrorPage } from './pages/error/ErrorPage';
import axios from 'axios';
import './App.css';

function App() {

  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const fetchCart = async ()=>{
    const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);
    }

    fetchCart();

  },[]); 
     

  return(
    <Routes>

      <Route index element={<HomePage cart={cart}/>}></Route>

      <Route path="checkout" element={<CheckoutPage cart={cart}/>} />

      <Route path="orders" element={<OrdersPage cart={cart}/>} />

      <Route path="tracking" element={<TrackingPage cart={cart}/>} />

      <Route path="*" element={<ErrorPage/>} />

    </Routes>
  )
}

export default App
