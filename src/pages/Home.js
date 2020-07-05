import React, { useState } from 'react';
import Hero from '../components/Hero';
import SkillsGallery from '../components/SkillsGallery';
import CardGallery from '../components/CardGallery';
import '../assets/main.css';
function Home(props) {

  const [data] = useState([
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", description: "An app that does this", category: "Development", githubLink: "www.google.com" },
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", description: "An app that does this", category: "Development" },
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", description: "An app that does this", category: "Development" },
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", description: "An app that does this", category: "Development" }
  ]);

  const [skillData] = useState([
    { image: "images/code.svg", title: "Development", description: "HTML/CSS, JavaScript, Node.js, React, MongoDB, API Fetching, and more." },
    { image: "images/design.svg", title: "Design", description: "Wireframes, Style Guides, Slide Decks, Journey Maps, and Visual Design. If you want me to build something, it will resemble the mockups down to the pixel." },
    { image: "images/user.svg", title: "Research", description: "Information Architecture, Contextual Inquiries, Surveys, Interviews, Personas, and Analytics." },
    { image: "images/clipboard.svg", title: "Product Management", description: "HTML/CSS, JavaScript, Node.js, React, MongoDB, API Fetching, and more." }
  ]);

  return (
    <>
      <Hero />
      <SkillsGallery data={skillData} />
      <CardGallery data={data} />
    </>
  );
}

export default Home;