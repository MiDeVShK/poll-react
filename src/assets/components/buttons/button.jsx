import React from 'react';
import './button.css';


function Button(props) {
  return (
        <button id='create-button' className='py-2 px-4 mx-.5 text-4xl' >
          {props.text}
        </button>
    )
}

export default Button