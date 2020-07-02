import React from 'react'
import portfolioData from '../assets/portfolioData';
import '../assets/main.css';

function AboutHero(props) {
  return (
    <div className="p-4 bg-gradient-t-blue-burst flex-wrap items-center xl:flex lg:flex md:flex-grow sm:flex-grow">
      <div className="flex-1 p-6 m-auto lg:max-w-xs xl:max-w-xs">
        <h2 className="font-bold text-5xl text-white">About Me</h2>
        <p className="whitespace-pre-line text-xl text-white">{bio}</p>
      </div>
      <div className="flex-1 p-4 align-middle mx-auto sm:w-6/12 md:w-6/12 lg:w-full xl:w-full">
        <img className="rounded-full" src={profilepic} alt="Ryan Lacon Profile Pic" />
      </div>
    </div>
  );
}

export default AboutHero;

const data = portfolioData.main;
const profilepic = "images/" + data.image;
const bio = "I've always been interested in anything creative, whether it involved drawing comics, writing, photography, or charcoal sketching. " + "\n"
  + "I was ecstatic to discover UX Design, which seemed like a perfect blend of creativity and technology. " + "\n"
  + "Soon, I became interested in learning more about how the technology worked and immersed myself in the world of web development. I found that coding agreed a lot with the analytical side of my mind that made me a great researcher, and continued my journey into development."