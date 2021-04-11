import React, { Component } from 'react';

class DownloadResumeBtn extends Component {
  render() {
    return (
      <a href="/images/RyanLaconResume_2021.pdf" download>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-purple-700 rounded">
          <svg className="float-left mx-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" /></svg>
          Download Resume
        </button>
      </a>
    );
  }
}

export default DownloadResumeBtn;