import React from 'react'
import portfolioData from '../assets/portfolioData';
import '../assets/main.css';

function AboutHero(props) {
  return (
    <div className="p-6 bg-gradient-t-blue-burst overflow-auto">
      <div className="container mx-auto px-6 py-4">
        <img className="m-6 w-1/4 float-right rounded-full" src={profilepic} alt="Ryan Lacon Profile Pic" />
        <h1 className="font-bold text-5xl text-white">About Me</h1>
        <p className="text-xl text-white">{bio}</p>
      </div>
    </div>
  );
}

export default AboutHero;

const data = portfolioData.main;
const profilepic = "images/" + data.image;
const bio = data.bio;