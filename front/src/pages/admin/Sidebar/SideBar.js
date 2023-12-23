import React from "react";
import "./Sidebar.css";

function SideBar() {
  return (
    <div>
      <div className="nav-side-menu">
        <div className="brand">Brand Logo</div>
        <i
          className="fa fa-bars fa-2x toggle-btn"
          data-toggle="collapse"
          data-target="#menu-content"
        ></i>

        <div className="menu-list">
          <ul id="menu-content" className="menu-content collapse out">
            <li>
              <a href="#">
                <i className="fa fa-dashboard fa-lg"></i> Dashboard
              </a>
            </li>

            <li
              data-toggle="collapse"
              data-target="#products"
              className="collapsed active"
            >
              <a href="#">
                <i className="fa fa-gift fa-lg"></i> Product{" "}
                <span className="arrow"></span>
              </a>
            </li>
            <ul className="sub-menu collapse" id="products">
              <li className="active">
                <a >Add Product</a>
              </li>
              <li>
                <a href="#">List Product </a>
              </li>
            </ul>

            <li data-toggle="collapse" data-target="#service" className="collapsed">
              <a href="#">
                <i className="fa fa-globe fa-lg"></i> Categorie{" "}
                <span className="arrow"></span>
              </a>
            </li>
            <ul className="sub-menu collapse" id="service">
              <li>Add Categorie</li>
              <li>List Categorie</li>
            
            </ul>

            <li data-toggle="collapse" data-target="#new" className="collapsed">
              <a href="#">
                <i className="fa fa-car fa-lg"></i> Order<span className="arrow"></span>
              </a>
            </li>
            <ul className="sub-menu collapse" id="new">
              <li>List Order</li>
            </ul>

            <li>
              <a href="#">
                <i className="fa fa-user fa-lg"></i> Customer
              </a>
                <li>List Customer</li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
