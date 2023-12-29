
import React from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css'

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li><Link to="/admin/addProduct">Add Product</Link></li>
          <li><Link to="/admin/listProduct">List Products</Link></li>
          <li><Link to="/admin/addCategorie">Add Category</Link></li>
          <li><Link to="/admin/listCategorie">List Categories</Link></li>
          <li><Link to="/admin/Order">List Orders</Link></li>
          <li><Link to="/admin/DetailOrder">Order Details</Link></li>
          <li><Link to="/admin/Customer">List Customers</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
