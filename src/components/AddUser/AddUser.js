import React, { useState } from "react";
import Img from "../../Ellipse 1.png";

import './AddUser.css'

import axios from "axios";

const AddUser = ({ handleCancel }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "", 
    email: "", 
    picture: 'https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png'
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (userData.firstName && userData.lastName) {
      axios
        .post("https://dummyapi.io/data/v1/user/create", userData, {
          headers: {
            'app-id': '65b4bfe4b19b580537029cce',
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          setIsSuccess(true); 
        })
        .catch((err) => {
          console.log(err);
          setIsSuccess(false);
        });
       
    }
  };

  return(
    <div className="container">
      <form action="true" className="addUser" onSubmit={handleSubmit}>
       <div className="userImg m-5 d-flex flex-column justify-content-center align-items-center ">
         <img src={Img} alt='userImg'/>
         <p className="m-3">Upload Photo</p>
       </div>
       <div className="inFileds container">
         <div className="row m-4">
           <div className="col-md-6 col-sm-12">
             <input
              type="text"
              className="w-100 my-3 p-3 rounded-5"
              placeholder="First Name"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <input
              type="text"
              className="w-100 my-3 p-3 rounded-5"
              placeholder="Last Name"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row m-4">
          <div className="col-md-6 col-sm-12">
            <input
              type="text"
              className="w-100 my-3 p-3 rounded-5"
              placeholder="Phone No."
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <input
              type="text"
              className="w-100 my-3 p-3 rounded-5"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className='w-100 text-center'>
      {isSuccess && <span className="success-message text-center w-100">Contact Successfully Added</span>}
      </div>
      <div className="btns container d-flex justify-content-between mt-5">
      <button type="submit" className="btn-2 rounded-5">
          Save
        </button>
        <button type="button" className="btn-1 rounded-5" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
    </div>
  );
};

export default AddUser;