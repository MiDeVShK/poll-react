import React from 'react';
import './share.css';
import share from "../../img/share.svg"


function Share() {
  return (
        <div id='share-button'>
          <img className='w-6' src={share} alt="" />
        </div>
    )
}

export default Share