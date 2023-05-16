import React from 'react';

const Contact = () => {
  return (
    <div id='contact'>
      <h1>BOOK YOUR TABLE</h1>
      <form action="">
        <input type="text" placeholder='Full Name' />
        <input type="email" placeholder='Type Your E-Mail' />
        <textarea placeholder='write Here......'></textarea>
        <input type="submit" value='BOOK'/>
      </form>
    </div>
  )
}

export default Contact;
