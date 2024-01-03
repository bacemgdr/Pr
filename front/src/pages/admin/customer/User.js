import React , {useState, useEffect} from "react";

import axios from "axios";


const User = () => {
  const [data,setData] = useState([]);
   useEffect(() =>{
    getUsers();
   },[])
    const getUsers = async () =>{
      const res = await axios.get('http://localhost:5000/user');
      if(res.status === 200) {
        setData(res.data);
      }
    };

    console.log("data");



return (
   
  <div style={{marginTop:"120px"}}>

    <table className="styled-table">
      <thead>
        <tr>
          <th style={{textAlign : "center"}}>No</th>
          <th style={{textAlign : "center"}}>Name</th>
          <th style={{textAlign : "center"}}>email</th>
        
          <th style={{textAlign : "center"}}>role</th>
          <th style={{textAlign : "center"}}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item ,index) => {
            return (

              <tr key={index}>
                <th scope="row">{index + 1 }</th>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
               
              </tr>


            );
          })};
      </tbody>
    </table>
  </div>
);
};
export default User;
