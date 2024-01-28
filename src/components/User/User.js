import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Img from '../../Ellipse 1.png';
import UpdateUser from '../Update/UpdateUser';

import './User.css'

const User = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  let userImg;
  let userNo = '01010101010';

  if (props.picture === '') {
    userImg = Img;
  } else {
    userImg = props.picture;
  }

  const [value, setValue] = useState('initial');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyapi.io/data/v1/user`, {
          headers: {
            'app-id': '65b4bfe4b19b580537029cce',
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    console.log(value);
  }, [value]);
  
  

  

  const handleDelete = (deleteID) => {
    axios.delete(`https://dummyapi.io/data/v1/user/${deleteID}`, {
      headers: {
        'Content-Type': 'application/json',
        'app-id': '65b4bfe4b19b580537029cce',
      }
    })
    .then(res => {
      console.log('DELETED RECORD:', res.data);
      window.location.reload()
    })
    .catch(error => {
      console.error('Error deleting user:', error);
    });
  };

  return (
    <div>
      {!isEditing ? (
        <div userId={props.id} className="row g-1 user d-flex flex- justify-content-center align-items-center">
          <div className="col-md-2 col-sm-12 userImg d-flex justify-content-center px-3">
            <img className='border-0' src={userImg} alt='userImg'/>
          </div>
          <div className='col-md-7 col-sm-12 userInfo d-flex flex-column p-4 text-light'>
            <h6 className=''>{props.firstName + " " + props.lastName}</h6>
            <p className=''>{userNo}</p>
          </div>
          <div className='col-md-3 col-sm-12 opIocons d-flex justify-content-end'>
            <button className='btn-1 border-0 mx-4 py-2 px-3 rounded' onClick={handleEdit}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => handleDelete(props.id)} className='btn-2 border-0 mx-4 py-2 px-3 rounded'><i className="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
      ) : (
        <div className=''>
          <UpdateUser userId={props.id} />
          <div className='b'>
          <button className=" btn bg-danger text-light px-5 py-3 d-flex my-3" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
