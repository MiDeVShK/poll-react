import React from 'react';
import github from "../../img/github.png"


function Credit(props) {
  return (
    <div className='flex gap-1 items-center'>
      <p>{props.name}</p>
      <a href={props.url}><img className="w-5 mr-3" src={github} alt=""/></a>
    </div>
    )
}

export default Credit