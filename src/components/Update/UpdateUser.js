import React, { useState, useEffect } from "react";
import axios from 'axios';

import './UpdateUser.css'

const UpdateUser = ({ userId }) => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
    });

    useEffect(() => {
        axios.get(`https://dummyapi.io/data/v1/user/${userId}`, {
            headers: {
                'app-id': '65b4bfe4b19b580537029cce',
            }
        })
        .then(res => {
            setUserData(res.data);
        })
        .catch(err => console.log(err));
    }, [userId]);
    

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    function handleUpdate(event) {
        event.preventDefault();
        axios.put(`https://dummyapi.io/data/v1/user/${userId}`, userData, {
            headers: {
                'Content-Type': 'application/json',
                'app-id': '65b4bfe4b19b580537029cce',
            }
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        window.location.reload()
    }

    return (
        <>
            <div className="">
                <h2 className="text-center bg-gradient text-light">Edit User</h2>
                <form className="update" onSubmit={handleUpdate}>
                    <label>
                        <input className="p-3 m-2 rounded-5 border-0"
                            type="text"
                            value={userData.firstName}
                            name="firstName"
                            onChange={handleChange}
                            placeholder="FirstName"
                        />
                    </label>
                    <label>
                        
                        <input className="p-3 m-2 rounded-5 border-0"
                            type="text"
                            value={userData.lastName}
                            name="lastName"
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <div className="w-100 d-flex justify-content-center">
                    <button className="btn bg-success text-light text-center px-5 py- d-flex px-5 py-3 d-flex" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateUser;