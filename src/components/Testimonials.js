import React, { Component } from 'react';
import portfolioData from '../assets/portfolioData';

class Testimonials extends Component {
  render() {
    const data = portfolioData.testimonials;
    const testimonials = data.testimonials.map(function (t) {
      return <div key={t.user}>
        <blockquote className="text-center bg-gray-800 p-6 ">
            <p className="text-white text-lg text-center leading-8">"{t.text}"</p>
            <cite className="text-blue400 font-bold text-lg leading-8">– {t.user}</cite>
        </blockquote>
        <hr />
      </div>
    });

    return (
      <div className="container mx-auto px-6 py-4">
        <h1 className="mb-6 font-bold text-5xl text-center text-purple-500">Testimonials</h1>
        {testimonials}
      </div>
    );
  }
}

export default Testimonials;
