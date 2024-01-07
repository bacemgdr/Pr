
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminLayout from "../adminLayout/AdminLayout";

const ListOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/order/all"); // Update the API endpoint
      if (res.status === 200) {
        setOrders(res.data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <AdminLayout>
      <div>
        <h1>Admin Order List</h1>
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <p>Order ID: {order._id}</p>
              <p>Status: {order.status}</p>
              <p>Payment Method: {order.payment}</p>
          
              <Link to={`/admin/DetailOrder/${order._id}`}>
                <button>View Details</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
};

export default ListOrder;
