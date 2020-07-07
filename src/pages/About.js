import React, { useEffect, useState } from 'react';
import AboutHero from "../components/AboutHero"
import Resume from "../components/Resume"
import { Transition } from 'react-transition-group';
import Testimonials from "../components/Testimonials"

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

function About(props) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(!fade)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Transition in={fade} timeout={duration}>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            <AboutHero />
            <Resume />
            <Testimonials />
          </div>
        )}
      </Transition>
    </>
  );
}

export default About