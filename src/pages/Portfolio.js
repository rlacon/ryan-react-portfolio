import React, { useState } from 'react'
import '../assets/main.css';
import CardGallery from '../components/CardGallery';

function Portfolio(props) {
  const [data] = useState([
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", category: "Development" },
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", category: "Development" },
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", category: "Development" },
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", category: "Development" }
  ]);
  return (
    <CardGallery data={data} />
  );
}

export default Portfolio