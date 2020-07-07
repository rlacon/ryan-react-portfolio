import React, { useEffect, useState } from 'react';
import '../assets/main.css';
import CardGallery from '../components/CardGallery';
import { Transition } from 'react-transition-group';

const duration = 150;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: -3,
}

const transitionStyles = {
  entering: { opacity: -3 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

function Portfolio(props) {
  const [data] = useState([
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", description: "An app that does this", category: "Development", mainLink: "https://www.google.com/", githubLink: "https://www.google.com/" },
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", description: "An app that does this", category: "Development", mainLink: "https://www.google.com/", githubLink: "https://www.google.com/" },
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", description: "An app that does this", category: "Development", mainLink: "https://www.google.com/", githubLink: "https://www.google.com/" },
    { image: "https://source.unsplash.com/random", title: "Ghost Writer", description: "An app that does this", category: "Development", mainLink: "https://www.google.com/", githubLink: "https://www.google.com/" }
  ]);

  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(!fade)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Transition in={fade} timeout={duration}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          <CardGallery data={data} />
        </div>
      )}
    </Transition>
  );
}

export default Portfolio