import AdminLayout from '../adminLayout/AdminLayout'
import React, { useState } from "react";

import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const AddProduct = () => {
  const navigate = useNavigate();

  const [productTitle, setTitle] = useState("");
  const [productDescription, setDescription] = useState("");
  const [productPrice, setPrice] = useState("");
  const [productCategorie, setCategory] = useState("");
  const [productRating, setRating] = useState("");
  const [productImg, setImage] = useState("");


  //create product function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/http://localhost:5000/product", {
        productTitle,
        productDescription,
        productPrice,
        productCategorie,
        productRating,
        productImg,
      }

      );
      if (res && res.data.success) {
        toast.success("Product Created Successfully");
        navigate("//admin/listProductd");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };


  return (


    <AdminLayout>

      <div className="App">
        <h1> Add Product  </h1>
        <form action="#" onSubmit={handleSubmit}>
          <div className="input-box22">
          <label className="btn btn-outline-secondary col-md-12">
          {productImg ? productImg.name : "Upload Photo"}
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            hidden
          />
        </label>
          </div>
          <div className="mb-3">
        {productImg && (
          <div className="text-center">
            <img
              src={URL.createObjectURL(productImg)}
              alt="productPic"
              height={"200px"}
              className="img img-responsive"
            />
          </div>
        )}
          <div className="input-box2">
          <input
          type="text"
          value={productTitle}
          placeholder="write a name"
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
        />
          </div>
          <div className="input-box2">
            <input
                type="text"
                value={productDescription}
                placeholder="write a description"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="input-box2">
            <input  
             type="number"
             value={productPrice}
             placeholder="write a Price"
             className="form-control"
             onChange={(e) => setPrice(e.target.value)}
           />
          </div>
          <div className="input-box2">
            <input  
             type="number"
             value={productRating}
             placeholder="write a Price"
             className="form-control"
             onChange={(e) => setRating(e.target.value)}
           />
          </div>

          <div className="input-box2"></div>

          <Select
          bordered={false}
          placeholder="Select Category"
          size="large"
          showSearch
          className="form-select mb-3"
          onChange={(value) => {
            setCategory(value);
          }}
        >
          <Option value="0">Mens Collection</Option>
          <Option value="1">Women Collection</Option>
          <Option value="2">Accessoire Collection</Option>


        </Select>
      </div>

      <div className="input-box2">
        <button className="btn btn-primary">
          CREATE PRODUCT
        </button>
      </div>

         
        </form>


    </div>    
      </AdminLayout >
    );
  };

export default AddProduct;