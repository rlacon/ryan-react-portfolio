import React, { Component } from 'react';
import portfolioData from '../assets/portfolioData';

class Testimonials extends Component {
  render() {
    const data = portfolioData.testimonials;
    var testimonials = data.testimonials.map(function (t) {
      return <>
        <blockquote className="p-6 grid grid-cols-1 gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1" key={t.user}>
          <div className="col-span-2">
            <p className="text-lg text-center leading-8">"{t.text}"</p>
          </div>
          <div className="col-span-1 h-auto">
            <cite className="text-purple-500 font-bold text-lg text-center leading-8">– {t.user}</cite>
          </div>
        </blockquote>
        <hr />
      </>
    });

    return (
      <>
        {testimonials}
      </>
    );
  }
}

export default Testimonials;
