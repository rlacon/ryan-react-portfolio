import React, { Component } from 'react';
import portfolioData from '../assets/portfolioData';

class Testimonials extends Component {
  render() {
    const data = portfolioData.testimonials;

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(t){
        return  <li key={t.user}>
            <blockquote>
               <p>{t.text}</p>
               <cite>{t.user}</cite>
            </blockquote>
         </li>
      });
    } else {
      testimonials = data.testimonials.map(function(t){
        return  <li key={t.user}>
            <blockquote>
               <p>{t.text}</p>
               <cite>{t.user}</cite>
            </blockquote>
         </li>
      });
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {testimonials}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
