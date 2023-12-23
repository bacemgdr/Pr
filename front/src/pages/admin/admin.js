import React from "react";
import SideBar from "../Sidebar/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dasboard from "./dasboard/Dasboard";
import AddProduct from "./Product/addProduct";
import ListProduct from "./Product/listProduct";
import AddCategorie from "./categorie/addCategorie";
import ListOrder from "./order/listOder";
import Details from "./order/details";
import ListCustomer from "./customer/listCustomer";

function Admin() {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/admin/" element={<Dasboard />} />
          <Route path="/admin/AddProduct" element={<AddProduct />} />
          <Route path="/admin/listProduct" element={<ListProduct />} />
          <Route path="/admin/AddCategorie" element={<AddCategorie />} />
          <Route path="/admin/listCategorie" element={<listCategorie />} />
          <Route path="/admin/Order" element={<ListOrder />} />
          <Route path="/admin/DetailOrder" element={<Details />} />
          <Route path="/admin/Customer" element={<ListCustomer />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default Admin;
