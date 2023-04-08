import React from 'react';
import './switchDarkMode.css';

const Switch = () => {
  return (
        <div>
            <input className="dark-theme-switch" type="checkbox" id="switch"/>
            <label className="label-switch" htmlFor="switch"></label>
        </div>
    )
}

export default Switch