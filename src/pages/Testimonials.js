// import React, { Component } from 'react';
// import portfolioData from '../assets/portfolioData';

// class Testimonials extends Component {
//   render() {
//     const data = portfolioData.testimonials;

//     if (this.props.data) {
//       var testimonials = this.props.data.testimonials.map(function (t) {
//         return <li key={t.user}>
//           <blockquote>
//             <p>{t.text}</p>
//             <cite>{t.user}</cite>
//           </blockquote>
//         </li>
//       });
//     } else {
//       testimonials = data.testimonials.map(function (t) {
//         return <li key={t.user}>
//           <blockquote>
//             <p>{t.text}</p>
//             <cite>{t.user}</cite>
//           </blockquote>
//         </li>
//       });
//     }

//     return (
//       <section id="testimonials">
//         <div className="text-container">
//           <div className="row">

//             <div className="two columns header-col">
//               <h1><span>Client Testimonials</span></h1>
//             </div>

//             <div className="ten columns flex-container">
//               <ul className="slides">
//                 {testimonials}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Testimonials;

import React, { Component } from 'react';
import portfolioData from '../assets/portfolioData';

class Testimonials extends Component {
  render() {
    const data = portfolioData.testimonials;
    var testimonials = data.testimonials.map(function (t) {
      return <blockquote className="p-6 grid grid-cols-1 gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1" key={t.user}>
        <div className="col-span-2">
          <p className="text-lg text-center leading-8">"{t.text}"</p>
        </div>
        <div className="col-span-1 h-auto">
          <cite className="font-bold text-lg text-center leading-8">– {t.user}</cite>
        </div>
      </blockquote>
    });

    return (
      <>
        {testimonials}
      </>
    );
  }
}

export default Testimonials;
