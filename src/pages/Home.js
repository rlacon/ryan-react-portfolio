import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import SkillsGallery from '../components/SkillsGallery';
import '../assets/main.css';
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

function Home(props) {

  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(!fade)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [skillData] = useState([
    { image: "images/code.svg", title: "Development", description: "HTML/CSS, JavaScript, React, Node.js, MongoDB, API Fetching, and more." },
    { image: "images/design.svg", title: "Design", description: "Wireframes, Style Guides, Slide Decks, Journey Maps, and Visual Design. If you want me to build something, it will resemble the mockups down to the pixel." },
    { image: "images/user.svg", title: "Research", description: "Information Architecture, Contextual Inquiries, Surveys, Interviews, Personas, and Analytics." },
    { image: "images/clipboard.svg", title: "Product Management", description: "My experiences as a designer and developer enable me to see the big picture, scope work, and determine which tasks take priority." }
  ]);

  return (
    <>
      <Transition in={fade} timeout={duration}>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            <Hero />
            <SkillsGallery data={skillData} />
          </div>
        )}
      </Transition>
    </>
  );
}

export default Home;