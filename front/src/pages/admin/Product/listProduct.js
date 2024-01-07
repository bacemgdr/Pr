import AdminLayout from '../adminLayout/AdminLayout'
import React , {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const  ListProduct= () => {
  const navigate = useNavigate();
    const [data , setData] = useState([]);
    useEffect(() =>{
        getProduct();
   },[])
   const getProduct = async() => {
  
    const res = await axios.get('http://localhost:5000/product');
    if(res.status === 200) {
      setData(res.data);
    }
  };

  
  const handleAddProduct = () => {
    // Navigate to the "/admin/addProduct" route
    navigate('/admin/addProduct');
  };
 

    return (
      <AdminLayout>

      

      <div>
            <h2>Product List</h2>
            <div>
            <table className="styled-table">
      <thead>
        <tr>
          <th style={{textAlign : "center"}}>No</th>
          <th style={{textAlign : "center"}}>Image</th>
          <th style={{textAlign : "center"}}>Title</th>
          <th style={{textAlign : "center"}}>Price</th>
        
          <th style={{textAlign : "center"}}>categorie</th>
          <th style={{textAlign : "center"}}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item ,index) => {
            return (

              <tr key={index}>
                <th scope="row">{index + 1 }</th>
                <td> <img src={item.productImg} alt="Description de l'image"></img></td>
                <td>{item.productTitle}</td>
                <td>{item.productPrice}</td>
                <td>{item.productCategorie}</td>
               
              </tr>


            )
          })}
      </tbody>
    </table>
            </div>
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
      
      </AdminLayout>
    );
  };

  export default ListProduct;