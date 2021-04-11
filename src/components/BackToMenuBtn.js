import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class BackToMenuBtn extends Component {
  render() {
    return (
      <NavLink to="/portfolio">
        <div>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-purple-700 rounded">
            <svg className="float-left mx-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
            Return to Menu
          </button>
        </div>
      </NavLink>
    );
  }
}

export default BackToMenuBtn;