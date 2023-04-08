import React from 'react';
import './buttonNav.css';


function ButtonNav(props) {
  return (
        <button className='py-2 px-4 mx-.5 uppercase'>
          {props.text}
        </button>
    )
}

export default ButtonNav