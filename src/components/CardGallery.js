import React from 'react'
import '../assets/main.css';

function CardGallery(props) {
  return (
    <section id='work' className="container mx-auto px-6 py-4">
      <h1 className="text-center mb-6 font-bold text-5xl text-purple-500">Projects</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {props.data.map((d, i) => {
          const { image, title, description, category, githubLink, mainLink } = d;
          return (
            <div className="rounded overflow-hidden shadow-lg bg-gray-100" key={i}>
              <img className="w-full" src={image} alt="Project" />
              <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">{title}</div>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-4">#{category}</span>
                <p className="text-gray-700 text-base">{description}</p>
              </div>
              <div className="px-6 py-4">
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-purple-700 rounded">
                  View Project
                </button>
                <a href={githubLink} className="text-blue500 hover:text-blue700 underline font-bold py-4 px-8 uppercase tracking-wider">Github</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CardGallery;

