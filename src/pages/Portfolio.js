import React, { useEffect, useState } from 'react';
import '../assets/main.css';
import CardGallery from '../components/CardGallery';
import { Transition } from 'react-transition-group';
import Data from "../assets/projectData.json";

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
  const [data] = useState(Data);

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
          <CardGallery className="whitespace-pre-line" data={data} />
        </div>
      )}
    </Transition>
  );
}

export default Portfolio;