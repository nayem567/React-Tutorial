import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
         <h2>Contact</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste optio odit enim vitae adipisci ut doloremque libero aliquid accusantium quam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, molestiae quod! Ad, cum. Sapiente cupiditate esse reprehenderit minima quae eveniet. Cupiditate, officia ullam cumque dicta molestias ab reprehenderit porro beatae voluptas necessitatibus sequi nam? Possimus cupiditate a modi aut dolorem? </p>
         <button onClick={() =>{
          navigate('/')
         }}>Go to Home</button>
    </div>
  )
}

export default Contact