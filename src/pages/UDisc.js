import React, { Component } from 'react';
import Prototype from '../components/Prototype';
import BackToMenuBtn from '../components/BackToMenuBtn';

class UDisc extends Component {
  render() {
    return (
      <div>
        <div className="container mx-auto px-6 py-4">
          <BackToMenuBtn />
          <h1 className="font-bold text-5xl text-center text-purple-500">UDisc App Redesign</h1>
          <br />
          <p className="text-xl">I'm an avid user of the UDisc app. I had some ideas to build out a more robust social component:</p>
          <br />
          <ul className="text-gray-700 text-lg leading-8">
            <li>1. There will be a dedicated friends list.</li>
            <li>2. It would now be possible to add friends through a QR code.</li>
            <li>3. The app will display where friends are currently playing when they begin a new score card.</li>
            <li>4. It's possible to send instant messages to friends.</li>
            <li>5. Invite friends to games through a new invitation feature.</li>
          </ul>
        </div>
        <br />
        <Prototype />
      </div>
    );
  }
}

export default UDisc;
