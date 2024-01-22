import {useState} from 'react';

import "./ContactsList.css";
import AddUser from './AddUser'
import CarouselItem from './CarouselItem'

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
        <div id="carouselExample" class="carousels carousel container slide">
        <div class="carousel-inner">
        <div class="carousel-item active"><CarouselItem handleClick={handleClick}/></div>
        <div class="carousel-item"><CarouselItem handleClick={handleClick}/></div>
        <div class="carousel-item"><CarouselItem handleClick={handleClick}/></div>
        </div>
      </div>
    }
    </div>
  );
};

export default ContactsList;
