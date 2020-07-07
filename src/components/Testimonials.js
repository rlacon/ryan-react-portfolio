import React, { Component } from 'react';
import portfolioData from '../assets/portfolioData';

class Testimonials extends Component {
  render() {
    const data = portfolioData.testimonials;
    const testimonials = data.testimonials.map(function (t) {
      return <div key={t.user}>
        <blockquote className="p-6 grid grid-cols-1 gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
          <div className="col-span-2">
            <p className="text-gray-700 text-lg text-center leading-8">"{t.text}"</p>
          </div>
          <div className="col-span-1 h-auto">
            <cite className="text-purple-700 font-bold text-lg text-center leading-8">– {t.user}</cite>
          </div>
        </blockquote>
        <hr />
      </div>
    });

    return (
      <div className="container mx-auto px-6 py-4">
        <h1 className="text-center mb-6 font-bold text-5xl text-purple-500">Testimonials</h1>
        {testimonials}
      </div>
    );
  }
}

export default Testimonials;
