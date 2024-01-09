import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Rating,Typography,} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import './home.css'
import UserLayout from "./userLayout/userLayout";
// import Hero from "../../components/hero/hero";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(""); // Initialize with an empty string

  useEffect(() => {
    getProduct();
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const getProduct = async () => {
    try {
      const res = await axios.get('http://localhost:5000/product');
      if (res.status === 200) {
        setProducts(res.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (productId) => {
    const selectedProduct = products.find(product => product._id === productId);
    setCart(prevCart => [...prevCart, selectedProduct]);
    localStorage.setItem("cart", JSON.stringify([...cart, selectedProduct]));
  };

  const confirmOrder = async () => {
    try {
      // Check if a payment method is selected
      if (!selectedPaymentMethod) {
        alert("Please select a payment method before confirming the order.");
        return;
      }
const userId = localStorage.getItem("userId")
      // Create an order using the API
      const res = await axios.post('http://localhost:5000/order', {
        products: cart.map(item => item._id),
        payment: selectedPaymentMethod,
        buyer: userId,
        status: "Not Process",
      });

    //   if (res.status === 201) 
        // Order created successfully
        alert("Order confirmed!");
        setCart([]);
        localStorage.removeItem("cart");
        setSelectedPaymentMethod(""); // Reset selected payment method to empty string
      
    } catch (error) {
      console.error("Error confirming order:", error);
      alert("Error confirming order. Please try again.");
    }
  };

  // Static list of payment methods for the dropdown
  const paymentMethods = ["Credit Card", "PayPal", "Cash on Delivery"];

  return (
    <UserLayout>
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <Card className="" sx={{ maxWidth: 345 }} key={product._id}>
            <CardMedia component="img" alt="green iguana" height="140" image={product.productImg} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.productTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.productDescription}
              </Typography>
            </CardContent>
            <CardActions>
              <div>${product.productPrice}</div>
          
              {user && (
                <FontAwesomeIcon onClick={() => addToCart(product._id)} icon={faCartPlus} />
              )}
              <Rating name="read-only" value={product.productRating} readOnly />
            </CardActions>
          </Card>
        ))}
  
      </div>
  
      {user && (
        <div className="cart-section">
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item._id}>{item.productTitle}</li>
            ))}
          </ul>
  
          <div className="payment-section">
            <label>Select Payment Method:</label>
            <select
              value={selectedPaymentMethod}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            >
              <option value="" disabled>Select Payment Method</option>
              {paymentMethods.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </div>
  
          {cart.length > 0 && <button onClick={confirmOrder}>Confirm Order</button>}
        </div>
      )}
    </div>
  </UserLayout>
  
  );
};

export default Home;
