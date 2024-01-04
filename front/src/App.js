import React from 'react'
import { Routes,Route  } from "react-router-dom";
import AddProduct from './pages/admin/Product/addProduct'
import ListProduct from './pages/admin/Product/listProduct'
import ListCategorie from './pages/admin/categorie/listCategorie'
import AddCategorie from './pages/admin/categorie/addCategorie'
import ListOrder from './pages/admin/order/listOder'
import Details from './pages/admin/order/details'
import ListCustomer from './pages/admin/customer/listCustomer'
import MyOrder from './pages/user/myOrder';
import Profile from './pages/user/profile';
import Register from './pages/auth/register';
import Login from './pages/auth/login';

function App() {
  return (
    
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/admin/addProduct" element={<AddProduct/>} />
        <Route path="/admin/listProduct" element={<ListProduct />} />
        <Route path="/admin/listCategorie" element={<ListCategorie />} />
        <Route path="/admin/addCategorie" element={<AddCategorie />} />
       <Route path="/admin/Order" element={<ListOrder />} />
       <Route path="/admin/DetailOrder" element={<Details />} />
      <Route path="/admin/Customer" element={<ListCustomer />} />

      
      <Route path="/" element={<MyOrder />} />
      <Route path="/user/profile" element={<Profile />} />

      </Routes>
    
    // <AddProduct />

  )
}

export default App

