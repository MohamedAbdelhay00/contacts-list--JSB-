import React, { useState } from 'react';
import Fetch from './Fetch.js';

import './ContactsList.css';

const CarouselItem = ({ handleClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleForm = (event) => {
    event.preventDefault();
    // You can perform additional actions if needed when the form is submitted
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <div className="searchBy mt-5 mb-3 w-100 text-center">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search by Name"
            onChange={handleChange}
            value={searchQuery}
          />
        </div>
        <div className="s-btn w-100 d-flex justify-content-end">
          <button type="submit" className="btn pe-3 my-4 me-5" onClick={handleClick}>
            <i className="fa-solid fa-plus m-2"></i>
            Add New Contact
          </button>
        </div>
      </form>
      <div className="users p-5 w-100">
        <Fetch searchQuery={searchQuery} />
      </div>
    </>
  );
};

export default CarouselItem;
