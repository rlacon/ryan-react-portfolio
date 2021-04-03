import React, { useState } from 'react'
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const CardGallery = (props) => {

  const options = [
    { value: "Design", label: "Design" },
    { value: "Development", label: "Development" },
  ];

  const [data, setData] = useState(props.data)

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (newOption) => {
    const filteredData = props.data.filter(d => d.category === newOption.value);
    setData(filteredData)
    setSelectedOption(newOption)
  };

  return (
    <section id='work' className="container mx-auto px-6 py-4">
      <h1 className="text-center mb-6 font-bold text-5xl text-purple-500">Projects</h1>
      <Dropdown options={options} handleChange={handleChange} />
      <br></br>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {data.map((d, i) => {
          const { image, title, description, userName, pass, category, githubLink, mainLink, optionalLink, extraLink } = d;
          return (
            <div className="flex-col flex rounded overflow-hidden shadow-lg bg-gray-100" key={i}>
              <img className="w-full" src={image} alt="Project" />
              <div className="px-4 py-2">
                <div className="font-bold text-purple-500 text-xl mb-2">{title}</div>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-4">#{category}</span>
                <p className="text-gray-700 text-base">{description}</p>
              </div>
              <div className="px-4 ">
                <p className="text-gray-700 font-semibold text-base">{userName}</p>
                <p className="text-gray-700 font-semibold text-base">{pass}</p>
              </div>
              <div className="mt-auto px-6 py-4">
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-purple-700 rounded">
                  {title === "UDisc App Redesign Prototype" ? (
                    <Link to="/portfolio/u-disc">View Project</Link>
                  ) : title === "" ? (
                    <Link>gfh</Link>
                  ) : (
                    <a href={mainLink} target="_blank" rel="noreferrer noopener">View Project</a>
                  )}
                </button>
                <a className={githubLink === "" ? "hidden" : "text-blue500 hover:text-blue700 underline font-bold py-4 px-8 uppercase tracking-wider"} href={githubLink} target="_blank" rel="noreferrer noopener">Github</a>
                <a href={extraLink} target="_blank" rel="noreferrer noopener" className="text-blue500 hover:text-blue700 underline font-bold py-4 px-8 uppercase tracking-wider">{optionalLink}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CardGallery;