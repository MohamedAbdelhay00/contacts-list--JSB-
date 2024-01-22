// Fetch.js

import React, { useState, useEffect } from "react";
import User from "./User.js";

import './ContactsList.css'

const Fetch = ({ searchQuery }) => {
  const [users, setUsers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch("https://dummyapi.io/data/v1/user", {
      headers: {
        'app-id': '64fc4a747b1786417e354f31', // Replace with your actual app ID if required
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // Filter users based on the search query
        const filteredUsers = data.data.filter((user) =>
          user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setUsers(filteredUsers);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [searchQuery]);

  const handleSlideChange = (index) => {
    // Ensure that the index stays within the valid range
    const newIndex = (index + users.length) % users.length;
    setActiveIndex(newIndex);
  };

  return (
    <div id="userCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {users.map((user, index) => (
          index % 2 === 0 ? (
            <div key={index / 2} className={`carousel-item${index === 0 ? ' active' : ''}`}>
              <div className="row">
                <div className="col-md-12">
                  <User
                    firstName={user.firstName}
                    lastName={user.lastName}
                    picture={user.picture}
                  />
                </div>
                <div className="d-flex justify-content-center">
                <hr class="hr-line border border-light border-2 opacity-75 " />
              </div>
                {index + 1 < users.length && (
                  <div className="col-md-12">
                    <User
                      firstName={users[index + 1].firstName}
                      lastName={users[index + 1].lastName}
                      picture={users[index + 1].picture}
                    />
                  </div>
                )}
              </div>
            </div>
          ) : null
        ))}
      </div>
      <div className="slider-btns d-flex justify-content-between">
        <div className="after"></div>
        <div className="slider-btns d-flex justify-content-end">
          <button
            data-bs-target="#userCarousel"
            data-bs-slide="prev"
            onClick={() => handleSlideChange(activeIndex - 1)}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <span className="carousel-slide-number text-light d-flex justify-content-center align-items-center">
            {activeIndex + 1} / {Math.ceil(users.length / 2)}
          </span>
          <button
            data-bs-target="#userCarousel"
            data-bs-slide="next"
            onClick={() => handleSlideChange(activeIndex + 1)}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fetch;
