import React, { useState, useEffect } from "react";
import User from "./User/User";
import "./ContactsList/ContactsList.css";

import axios from "axios";

const Fetch = ({ searchQuery }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [addedUsers, setAddedUsers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchUsers = async (url, setUsers, query) => {
    try {
      console.log("Query:", query);
      const response = await axios.get(url, {
        headers: {
          "app-id": "65b4bfe4b19b580537029cce",
        },
      });

      const data = response.data;
      console.log(data);

      const filteredUsers = data.data.filter((user) =>
        user.firstName.toLowerCase().includes(query.toLowerCase())
      );
      console.log("Filtered Users:", filteredUsers); // Add this line

      setUsers(filteredUsers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log("Search Query:", searchQuery); // Add this line
    fetchUsers("https://dummyapi.io/data/v1/user", setAllUsers, searchQuery);
    fetchUsers(
      "https://dummyapi.io/data/v1/user?created=1",
      setAddedUsers,
      searchQuery
    );
  }, [searchQuery]);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const combinedUsers = [...allUsers, ...addedUsers];

  return (
    <div id="userCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {combinedUsers.map((user, index) =>
          index % 2 === 0 ? (
            <div
              key={`${user.id}-${index}`}
              className={`carousel-item${
                Math.floor(index / 2) === activeIndex ? "active" : ""
              }`}
            >
              <div className="row">
                <div key={user.id} className="col-md-12">
                  <User
                    id={user.id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    picture={user.picture}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <hr className="hr-line border border-light border-2 opacity-75 " />
                </div>
                {index + 1 < combinedUsers.length && (
                  <div key={`${combinedUsers[index + 1].id}-${index + 1}`} className="col-md-12">
                    <User
                      id={combinedUsers[index + 1].id}
                      firstName={combinedUsers[index + 1].firstName}
                      lastName={combinedUsers[index + 1].lastName}
                      picture={combinedUsers[index + 1].picture}
                    />
                  </div>
                )}
              </div>
            </div>
          ) : null
        )}
      </div>
      <div className="slider-btns d-flex justify-content-between">
        <div className="after"></div>
        <div className="slider-btns d-flex justify-content-end">
          <button
            data-bs-target="#userCarousel"
            data-bs-slide="prev"
            onClick={() =>
              handleSlideChange(
                (activeIndex - 1 + combinedUsers.length) %
                  Math.ceil(combinedUsers.length / 2)
              )
            }
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <span className="carousel-slide-number text-light d-flex justify-content-center align-items-center">
            {Math.floor(activeIndex / 2) + 1} /{" "}
            {Math.ceil(combinedUsers.length / 2)}
          </span>
          <button
            data-bs-target="#userCarousel"
            data-bs-slide="next"
            onClick={() =>
              handleSlideChange(
                (activeIndex + 1) % Math.ceil(combinedUsers.length / 2)
              )
            }
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fetch;
