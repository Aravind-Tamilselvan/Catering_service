import React from 'react';
// import './YourComponent.css'; // Make sure to import the CSS file
import "../../style/style.css";

const YourComponent = () => {
  return (
    <div className="YourComponent">
      <div id="card">
        <img id="avatar" src="your-avatar-url.jpg" alt="Avatar" />
        <div id="info">
          <h1 id="name">John Doe</h1>
          <p id="activity">Web Developer</p>
          <div id="stats">
            <div className="stats-text">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 17v-2h4v2h5V7h-2V5h-4V3H9v2H4v10a1 1 0 0 0 1 1h5zM5 6h5V4H5v2zm0 2h5V8H5v2zm5 4v2H5v-2h5zm4 2v2h-4v-2h4zm-4-6V7h4v2h-4z" />
              </svg>
              <span>100</span>
            </div>
            <div className="stats-text">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M18 9v4H6V9H4v6h16V9h-2zm-2-7.83l-1.58 1.59L12 3l-4.42 4.42L6 7.64 12 2l4.42 4.36-1.42-1.42z" />
              </svg>
              <span>50</span>
            </div>
          </div>
          <button id="btn">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
