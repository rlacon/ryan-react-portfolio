import React, { useState } from 'react'
import '../assets/main.css';
import CardGallery from '../components/CardGallery';

function Portfolio(props) {
  const [data] = useState([
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", description: "An app that does this", category: "Development", mainLink: "https://www.google.com/", githubLink: "https://www.google.com/" },
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", description: "An app that does this", category: "Development", mainLink: "https://www.google.com/", githubLink: "https://www.google.com/"},
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", description: "An app that does this", category: "Development", mainLink: "https://www.google.com/", githubLink: "https://www.google.com/" },
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", description: "An app that does this", category: "Development", mainLink: "https://www.google.com/", githubLink: "https://www.google.com/" }
  ]);
  return (
    <CardGallery data={data} />
  );
}

export default Portfolio