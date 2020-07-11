import React, { Component } from 'react';
import portfolioData from '../assets/portfolioData';

class Resume extends Component {
  render() {
    const data = portfolioData.resume;
    const work = data.work.map(function (t) {
      return <div key={t.company}>
        <blockquote className="text-gray-700 p-6 grid grid-cols-1 gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
          <div className=" text-lg col-span-1 h-auto">
            <p className="text-purple-700 font-bold leading-8">{t.company}</p>
            <p className="text-lg leading-8">{t.title}</p>
            <p className="italic text-lg leading-8">{t.years}</p>
          </div>
          <div className="col-span-2">
            <p className="text-gray-700 text-lg leading-8">{t.description}</p>
          </div>
        </blockquote>
        <hr />
      </div>
    });

    const education = data.education.map(function (t) {
      return <div key={t.school}>
        <blockquote className="text-gray-700 p-6 grid grid-cols-1 gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
          <div className=" text-lg col-span-1 h-auto">
            <p className="text-purple-700 font-bold leading-8">{t.school}</p>
            <p className="text-lg leading-8">{t.degree}</p>
            <p className="italic text-lg leading-8">{t.graduated}</p>
          </div>
          <div className="col-span-2">
            <p className="text-gray-700 text-lg leading-8">{t.description}</p>
          </div>
        </blockquote>
        <hr />
      </div>
    });

    return (
      <div className="container mx-auto px-6 py-4">
        <h2 className="text-center mb-6 font-bold text-5xl text-purple-500">Resume</h2>
        <div className="mb-12">
          <h3 className="text-center mb-2 font-bold text-3xl text-purple-700">Work</h3>
          {work}
        </div>
        <h3 className="text-center mb-2 font-bold text-3xl text-purple-700">Education</h3>
        {education}
      </div>
    );
  }
}

export default Resume;
