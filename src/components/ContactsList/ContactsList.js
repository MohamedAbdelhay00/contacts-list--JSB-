import {useState} from 'react';

import "./ContactsList.css";
import AddUser from '../AddUser/AddUser'
import CarouselItem from '../CarouselItem/CarouselItem'

const ContactsList = () => {

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        
        setIsShown(true);
      };

      const handleCancel = event => {
        setIsShown(false);
        event.preventDefault();
      };

  return (
    <div>
    {
        isShown ? <AddUser handleCancel={handleCancel}/> : 
        <div id="carouselExample" className="carousels carousel container slide">
        <div className="carousel-inner">
        <div className="carousel-item active"><CarouselItem handleClick={handleClick}/></div>
        <div className="carousel-item"><CarouselItem handleClick={handleClick}/></div>
        <div className="carousel-item"><CarouselItem handleClick={handleClick}/></div>
        </div>
      </div>
    }
    </div>
  );
};

export default ContactsList;
