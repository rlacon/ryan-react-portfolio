import React from 'react'
import '../assets/main.css';

function SkillsGallery(props) {
  return (
    <section id='skills'>
      <div className="container mx-auto px-6 py-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">

          <div className="overflow-hidden bg-gray-800">
            <img className="block mx-auto h-24 w-24" src="images/code.svg" alt="Project" />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-purple-500 text-xl">Development</div>
              <p className="text-white text-base">HTML/CSS, JavaScript, Node.js, React, MongoDB, API Fetching, and more.</p>
            </div>
          </div>

          <div className="overflow-hidden bg-gray-800">
            <img className="block mx-auto h-24 w-24" src="/images/design.svg" alt="Project" />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-purple-500 text-xl">Design</div>
              <p className="text-white text-base">Wireframes, Style Guides, Slide Decks, Journey Maps, and Visual Design.</p>
            </div>
          </div>

          <div className="overflow-hidden bg-gray-800">
            <img className="block mx-auto h-24 w-24" src="/images/user.svg" alt="Project" />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-purple-500 text-xl">Research</div>
              <p className="text-white text-base">Information Architecture, Contextual Inquiries, Surveys, Interviews, Personas, and Analytics.</p>
            </div>
          </div>

          <div className="overflow-hidden bg-gray-800">
            <img className="block mx-auto h-24 w-24" src="/images/clipboard.svg" alt="Project" />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-purple-500 text-xl">Product Management</div>
              <p className="text-white text-base">All of these skills and experiences give me a breadth of scope over the process of building a product.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SkillsGallery;