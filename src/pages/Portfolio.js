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
    {
      image: "/images/ghost_writer.png",
      title: "Ghost Writer",
      description: "A collaborative writing app that allows users to write different sections of a story. Once all sections have been written, the story moves to a Completed Stories page. Create an account, or log in with the following credentials:",
      userName: 'Username: guest',
      pass: 'Password: guest123',
      category: "Development",
      mainLink: "https://ghost-writer.herokuapp.com/",
      githubLink: "https://github.com/rlacon/Project-3---Ghost-writer-social/"
    }, {
      image: "/images/google-book-search-pic.png",
      title: "Google Books Search",
      description: "Demonstration of the Google Books API to input search queries and return a list of matching results.",
      category: "Development",
      mainLink: "https://rlacon-book-search.herokuapp.com/",
      githubLink: "https://github.com/rlacon/GoogleBooksSearch/"
    }, {
      image: "/images/game-matching-app-pic.png",
      title: "Game Matcher",
      description: "An app that allows users to select a criteria of favorite games and matches with other users who have made selections. Create an account, or log in with the following credentials:",
      userName: 'Username: 123',
      pass: 'Password: 123',
      category: "Development",
      mainLink: "https://www.google.com/",
      githubLink: "https://www.google.com/"
    }]);

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

export default Portfolio