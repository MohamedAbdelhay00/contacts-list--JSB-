import React, { useState } from 'react';

import "./AddUser.css";
import Img from "../Ellipse 1.png";

const AddUser = ({ handleCancel }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    picture: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async () => {
    try {
      const res = await fetch("https://dummyapi.io/data/v1/user/create", {
        method: 'POST',
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          email: data.email,
          picture: 'https://static.thenounproject.com/png/4035892-200.png'
        }),
        headers: {
          'Content-Type': 'application/json',
          'app-id': '64fc4a747b1786417e354f31'
        }
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      // Reset the form and show success message
      setData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        picture: "",
      });

      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000); // Display success message for 3 seconds

      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form className="addUser" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
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
              value={data.firstName}
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
              value={data.lastName}
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
              value={data.phone}
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
              value={data.email}
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
        <button type="button" className="btn-1 rounded-5" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit" className="btn-2 rounded-5">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddUser;
