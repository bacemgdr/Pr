import React from "react";
function Register() {
  return (
    <div className="register">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1" 
        />

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="passwordemail"
            className="form-control"
            id="exampleInputEmail1" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
          Phone 
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
           Adresse
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1" 
          />
        </div>
      </div>
     

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  );
}

export default Register;
