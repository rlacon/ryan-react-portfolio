import React from "react";
import BackToMenuBtn from "../components/BackToMenuBtn";
import ImageGallery from "../components/ImageGallery";

const MoveOMatic = () => {
  const researchImage = [
    {
      original: "/images/write_haven/write_haven_research.png",
    }
  ];

  const researchImage2 = [
    {
      original: "/images/write_haven/write_haven_research_2.png",
    }
  ];

  const personas = [
    {
      original: "/images/write_haven/write_haven_personas.png",
    }
  ];

  const bookResearch = [
    {
      original: "/images/write_haven/write_haven_book_research.png",
    }
  ];

  const competitiveAnalysis = [
    {
      original: "/images/write_haven/write_haven_competitive_analysis.png",
    }, {
      original: "/images/write_haven/write_haven_fanfiction.png",
    }, {
      original: "/images/write_haven/write_haven_scrivener.png",
    }, {
      original: "/images/write_haven/write_haven_wattpad.png",
    }
  ];

  const sketches = [
    {
      original: "/images/write_haven/write_haven_sketches_1.png",
    }, {
      original: "/images/write_haven/write_haven_sketches_2.png",
    }, {
      original: "/images/write_haven/write_haven_sketches_3.png",
    }, {
      original: "/images/write_haven/write_haven_sketches_4.png",
    }
  ];

  const wireframes1 = [
    {
      original: "/images/write_haven/write_haven_wireframes_1.png",
    }, {
      original: "/images/write_haven/write_haven_wireframes_2.png",
    }, {
      original: "/images/write_haven/write_haven_wireframes_3.png",
    }
  ];

  const wireframes2 = [
    {
      original: "/images/write_haven/write_haven_wireframes_4.png",
    }, {
      original: "/images/write_haven/write_haven_wireframes_5.png",
    }, {
      original: "/images/write_haven/write_haven_wireframes_6.png",
    }, {
      original: "/images/write_haven/write_haven_wireframes_7.png",
    }, {
      original: "/images/write_haven/write_haven_wireframes_8.png",
    }
  ];

  const outlines = [
    {
      original: "/images/write_haven/write_haven_outlines_1.png",
    }, {
      original: "/images/write_haven/write_haven_outlines_2.png"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-4">
      <BackToMenuBtn />
      <h1 className="font-bold text-5xl text-center text-purple-500">
        Write Haven
      </h1>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        The Brief
      </h3>
      <p className="text-gray-700 text-lg leading-8">
        Writer’s block is a prevalent epidemic in the writing community. I <a className="underline text-blue500" href="https://docs.google.com/forms/d/e/1FAIpQLScRurDv8LNYP09rNTSyihV8OdTLaNaaHecgQwxUMs3msxo6iw/viewform?usp=sf_link" target="_blank">created a survey</a> to analyze the writing process and shared it with members of the Kelly Writer's House at the University of Pennsylvania, and various online writing communities such as reddit.com/r/writing.
      </p>
      <br />
      <div className="mt-10 m-auto">
        <ImageGallery images={researchImage} />
      </div>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Personas
      </h3>
      <p className="text-gray-700 text-lg leading-8">
        In addition to the survey, I <a className="underline text-blue500" href="https://docs.google.com/document/d/17FOFX87OxURINj7qzLNjuzBVPZR8otYxjFHYtvcw-HI/edit?usp=sharing" target="_blank">interviewed 12 writers</a> including beginner fan fiction writers, published authors, and even a Radio Producer at WHYY-FM. With this data, I identified two primary audiences to consider in the app:
      </p>
      <div className="mt-10 m-auto">
        <ImageGallery images={personas} />
      </div>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Book Research
      </h3>
      <p className="text-gray-700 text-lg leading-8">
        I received a ton of suggestions for books to read on this subject, and dove into the material to find more data. Two books in particular revealed compelling insights:
      </p>
      <div className="mt-10 m-auto">
        <ImageGallery images={bookResearch} />
      </div>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Competitive Analysis
      </h3>
      <p className="text-gray-700 text-lg leading-8">
        The competitive landscape had a lot of weaknesses in their appeal to beginner writers:
      </p>
      <br />
      <ul className="text-gray-700 text-lg leading-8">
        <li>1. Lack of innovative features beyond basic text editors and community-integration.</li>
        <li>2. Outdated technology and overwhelming format options.</li>
        <li>3. Don’t teach beginner writers how actually to write, or what to write about.</li>
      </ul>
      <div className="mt-10 m-auto">
        <ImageGallery images={competitiveAnalysis} />
      </div>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Sketches
      </h3>
      <div className="mt-10 m-auto">
        <ImageGallery images={sketches} />
      </div>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Wireframes Round 1
      </h3>
      <p className="text-gray-700 text-lg leading-8">
        I designed wireframes and a clickable prototype to test the outlining process, while managing a way to chunk out sections of a story. Many users found this to be confusing and didn't understand the value, so I went back to the drawing board.
      </p>
      <div className="mt-10 m-auto">
        <ImageGallery images={wireframes1} />
      </div>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Wireframes Round 2
      </h3>
      <p className="text-gray-700 text-lg leading-8">
        My riskiest assumption was the dependence on a writing community to solve writer's block. I found a Wiki Site called TVtropes.org that contains endless categories of various tropes (commonly recurring literary and rhetorical devices, motifs or clichés in creative works), and categorized them into genres that follow the Three-Act-Structure of storytelling.
      </p>
      <br />
      <p className="text-gray-700 text-lg leading-8">
        I turned these wireframes into a second prototype. My participants understood the context of this user flow better.
      </p>
      <div className="mt-10 m-auto">
        <ImageGallery images={wireframes2} />
      </div>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Rapid Validation
      </h3>
      <p className="text-gray-700 text-lg leading-8">
        I harvested this content into a spreadsheet to fake back-end the writing process. Meanwhile, I made a job posting on Upwork.com to find freelancers to write stories for me with these methods. I received many enthusiastic replies from writers who all struggled with writer's block, and were eager to hear my solution. I hired 5 of these writers to write a story with these methods.
      </p>
      <br />
      <p className="text-gray-700 text-lg leading-8">
        I created a Google Form survey to simulate the onboarding process and collect their story selections. Upon receiving a response, I generated the content and sent links to the spreadsheets.
      </p>
      <br />
      <p className="text-gray-700 text-lg leading-8">
        The most consistent feedback I received was the need for a character creator, so I produced another outline to capture these core elements.
      </p>
      <br />
      <ul className="text-gray-700 text-lg leading-8">
        <li><a className="underline text-blue500" href="https://docs.google.com/forms/d/e/1FAIpQLSfSn0mgfDTi0E7FA1_Oz6m63tw2PmzrvPg1FaBMM0zhTteV4A/viewform?usp=sf_link" target="_blank">Onboarding Survey</a></li>
        <li><a className="underline text-blue500" href="https://docs.google.com/spreadsheets/d/1ywGBKAeYPuUn1as14mzR7X-7RbroIfEdVC_QwEEtkow/edit?usp=sharing" target="_blank">Story Outlines</a></li>
        <li><a className="underline text-blue500" href="https://docs.google.com/spreadsheets/d/1W00xfCTrCyH6MGySrmILl_uJketA7hfbZDBtNQtu2zE/edit?usp=sharing" target="_blank">Character Creator</a></li>
      </ul>
      <div className="mt-10 m-auto">
        <ImageGallery images={outlines} />
      </div>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Responses
      </h3>
      <p className="text-gray-700 text-lg leading-8">
        <a className="underline text-blue500" href="https://docs.google.com/forms/d/e/1FAIpQLScDKFxEf8LtwefYQ6xhrnma3b47j683Vg_i7k0wZijtMT3Lxg/viewform?usp=sf_link" target="_blank">I followed up on the writers with a survey</a> to acquire more data on their writing experience. The results showed that this method resonated with them, and made the writing process easier.
      </p>
      <br />
      <p className="text-gray-700 text-lg leading-8">
        Anne Lamott's concept of "shitty first drafts" was successful since many of the writers said this process gave them better ideas for future stories. Stephen King's concept of writing 1,000 words a day applied here since the data showed that the tropes and outlines allowed the writers to focus on the act of writing solely:
      </p>
      <br />
      <ul className="text-gray-700 text-lg leading-8">
        <li className="italic">"Once I hit this point, the writing really took off and I didn't find myself stopping very often. Now that I think of it, I ended up writing a superhero style origin story. The end of one story and the beginning of another." — Rebecca</li>
        <br />
        <li className="italic">"Too many writers, both amateur and experienced, are reluctant to use tropes and I feel like that is like being reluctant to use wood to build a chair.” — Mark</li>
        <br />
        <li className="italic">"I think the overall story shows that the outline system works well. Structural beats came naturally, even though I was purposefully trying to ignore them.” — Lewis</li>
        <br />
        <li className="italic">"I really thought this was an extremely useful app. Although I struggled somewhat with the writing process (more for the fact I couldn't commit to an idea!), the writing process as a whole was made much simpler." — Amy</li>
        <br />
        <li className="italic">"The simplicity of the app's outline was a refreshing change and the tropes made it easy to come up with plot points without a lengthy research and brainstorming process." — Allena</li>
      </ul>
      <div className="mt-10 m-auto">
        <ImageGallery images={researchImage2} />
      </div>
      <br />
      <BackToMenuBtn />
    </div>
  );
};

export default MoveOMatic;
