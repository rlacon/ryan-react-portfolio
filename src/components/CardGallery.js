import React from 'react'
import '../assets/main.css';

function CardGallery(props) {
  return (
    <div className="container mx-auto px-6 py-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {props.data.map((d, i) => {
          const { image, title, category } = d;
          return (
            <div className="rounded overflow-hidden shadow-lg bg-gray-100" key={i}>
              <img className="w-full" src={image} alt="Project" />
              <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{category}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#winter</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardGallery;

