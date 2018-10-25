
import React from 'react';
import './card.css';


const card = (props) =>(
  <div style={{border:'1px solid red', margin:'20px auto', height: '200px', padding:'20px'}}>
     <p>name: {props.user.name}</p>
     <p>email: {props.user.email}</p>
  </div>
)

export default card;
