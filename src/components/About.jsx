import React from 'react';
import aboutimage from '../images/about.png';

const About = () => {
  return (
    <div id='about'>
      <div className='about-text'>
        <h1>UPCOMING EVENTS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates delectus voluptas modi culpa, quidem consectetur dolore. Nam, inventore a natus at blanditiis atque perspiciatis, hic eos pariatur deleniti quo autem?</p>
        <button>Read More</button>
      </div>
      <div className='about-image'>
        <img src={aboutimage} alt="" />
      </div>
    </div>
  )
}

export default About;
