import React from 'react'
import portfolioData from '../assets/portfolioData';
import '../assets/main.css';

function AboutHero(props) {
  return (
    <div className="p-6 bg-gradient-t-blue-burst overflow-auto">
      <div className="container mx-auto px-6 py-4">
      <img className="m-6 w-1/4 float-right rounded-full" src={profilepic} alt="Ryan Lacon Profile Pic" />
      <h2 className="font-bold text-5xl text-white">About Me</h2>
      <p className="text-xl text-white">{bio}</p>
      </div>
    </div>
  );
}

export default AboutHero;

const data = portfolioData.main;
const profilepic = "images/" + data.image;
const bio = "I've always been interested in anything creative, whether it involved drawing comics, writing, photography, or charcoal sketching. " 
  + "I was ecstatic to discover UX Design, which seemed like a perfect blend of creativity and technology. " 
  + "Soon, I became interested in learning more about how the technology worked and immersed myself in the world of web development. I found that coding agreed a lot with the analytical side of my mind that made me a great researcher, and continued my journey into development."