import React, { useState, useEffect } from 'react'
import '../assets/main.css';
import Card from '../components/Card';

function Portfolio(props) {
  const [data, setData] = useState([
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", category: "Development" },
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", category: "Development" },
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", category: "Development" },
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", category: "Development" }
  ]);
  return (
    <Card className="mt-100000" data={data} />
  );
}

export default Portfolio