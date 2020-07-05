import React from 'react'
import '../assets/main.css';

function SkillsGallery(props) {
  return (
    <section id='skills' className="my-16">
      <div className="container mx-auto px-6 py-4">
        <h1 className="text-center mb-6 font-bold text-5xl text-purple-500">Skills</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {props.data.map((d, i) => {
            const { image, title, description } = d;
            return (
              <div className="overflow-hidden bg-gray-800" key={i}>
                <img className="block mx-auto h-24 w-24" src={image} alt="Skill" />
                <div className="px-6 py-4 text-center">
                  <div className="font-bold text-purple-500 text-xl">{title} </div>
                  <p className="text-white text-base">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsGallery;