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
      image: "/images/moveomatic-case-study-pic.png",
      title: "Move-O-Matic",
      description: "I designed a toy with two classmates during my Master's program.",
      category: "Design",
      mainLink: "",
      githubLink: ""
    }, {
      image: "/images/u-disc-pic.png",
      title: "UDisc App Redesign Prototype",
      description: "I redesigned an app to include a more robust social component.",
      category: "Design",
      mainLink: "",
      githubLink: ""
    }, {
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
      image: "/images/clicky-game-pic.png",
      title: "Clicky Game",
      description: "A clicker game built in React.js. Click the images to score a point, but don't click one more than once or it's game over.",
      category: "Development",
      mainLink: "https://still-citadel-09620.herokuapp.com/",
      githubLink: "https://github.com/rlacon/ClickyGame"
    }, {
      image: "/images/game-matching-app-pic.png",
      title: "Game Matcher",
      description: "An app that allows users to select a criteria of favorite games and matches with other users who have made selections. Create an account, or log in with the following credentials:",
      userName: 'Username: 123',
      pass: 'Password: 123',
      category: "Development",
      mainLink: "https://game-matching-app.herokuapp.com/dashboard",
      githubLink: "https://github.com/rlacon/Project2"
    }, {
      image: "/images/lacons-pharmacy-pic.png",
      title: "Responsive Website",
      description: "I created a website for my dad's pharmacy, which became incredibly useful during the Covid-19 vaccination process.",
      category: "Development",
      mainLink: "http://www.laconspharmacy.com/",
      githubLink: "https://github.com/laconspharmacy/laconspharmacy.github.io"
    }, {
      image: "/images/giphy-api-pic.png",
      title: "Giphy API",
      description: "Demonstration of the Giphy API with a Simpsons theme.",
      category: "Development",
      mainLink: "https://rlacon.github.io/giphy-api/",
      githubLink: "https://github.com/rlacon/giphy-api"
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

export default Portfolio;