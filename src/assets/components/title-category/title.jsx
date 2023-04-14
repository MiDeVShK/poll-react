import React from 'react';


function Title(props) {
  return (
        <h1 className='py-2 px-4 text-4xl'>
        {props.text}
        </h1>
    )
}

export default Title