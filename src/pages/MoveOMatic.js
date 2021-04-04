import React from "react";
import Prototype from "../components/Prototype";
import BackToMenuBtn from "../components/BackToMenuBtn";
import ImageGallery from "../components/ImageGallery";

const MoveOMatic = () => {
  const ideateImages = [
    {
      original: "/images/moveomatic/moveomatic_1.png",
    },
    {
      original: "/images/moveomatic/moveomatic_2.png",
    },
    {
      original: "/images/moveomatic/moveomatic_3.png",
    },
    {
      original: "/images/moveomatic/moveomatic_4.png",
    },
  ];

  const handworkStudioImage = [
    {
      original: "/images/moveomatic/moveomatic_5.jpg",
    },
  ];

  const affinityDiagram = [
    {
      original: "/images/moveomatic/moveomatic_6.jpg",
    },
  ];

  const persona = [
    {
      original: "/images/moveomatic/moveomatic_persona.png",
    },
  ];

  const prototype = [
    {
      original: "/images/moveomatic/moveomatic_prototype.gif",
    },
  ];

  const buyAFeature = [
    {
      original: "/images/moveomatic/moveomatic_7.jpg",
    },
    {
      original: "/images/moveomatic/moveomatic_8.jpg",
    },
    {
      original: "/images/moveomatic/moveomatic_9.png",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-4">
      <BackToMenuBtn />
      <h1 className="font-bold text-5xl text-center text-purple-500">
        Move-O-Matic
      </h1>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        The Brief
      </h3>
      <p>
        "Move-O-Matic" was a project at Jefferson University, in a class that
        combines UX and Industrial Design students (Fall 2017). The brief is as
        follows: <br />
        <br />
        "Design and develop a toy for children between 4-8 years of age. Using
        qualitative and quantitative research methods, analyze and select a
        product category and consumer group. Research appropriate developmental
        milestones and incorporate it in the design for the target demographic.
        The toy must have a physical form and incorporate a digital interface."
      </p>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        The Team
      </h3>
      <p>
        I worked with two other UX Designers on this project, Antonia and Ben.
      </p>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Ideation
      </h3>
      <p>
        Antonia is a former dance major and wanted to design a toy that
        incorporated movement. Her initial concept was Body Draw, which is a toy
        that would let kids draw on a screen wearing wrist-bands. We set out to
        conduct research and validate the demand for this type of toy.
      </p>
      <div className="w-1/2 mt-10 m-auto">
        <ImageGallery images={ideateImages} />
      </div>
      <br />
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        The Research
      </h3>
      <p>
        Finding kids to interview was challenging since no one in our group had
        access to kids in our target demographic of 6-8 years old. I caught a
        big break when I met Julia Yosen, who is the Camp Director at the
        Handwork Studio. The Handwork Studio is a fashion camp that teaches kids
        tactile activities such as needle arts and machine sewing.
      </p>
      <div className="mt-10">
        <ImageGallery images={handworkStudioImage} />
      </div>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Main Insights
      </h3>
      <p>Based on my interview with Julia, I discovered the following:</p>
      <ul>
        <li>
          1. Kids love building things and are happy about what they make.
        </li>
        <li>
          2. They want to share their creations and feel a sense of ownership
          over them.
        </li>
        <li>3. The kids like to role-play scenarios using their inventions.</li>
        <li>4. Kids have a preference for vibrant colors. </li>
        <li>
          5. Secretive learning is a crucial component in the Handwork Studio's
          lesson plans.
        </li>
      </ul>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Affinity Diagram
      </h3>
      <p>
        Antonia interviewed a dance teacher and gained some valuable information
        as well. With Body Draw, I was unsure if kids would want to get up and
        start dancing when testing our toy. She assured me that kids such as the
        ones in these dance classes had bundles of energy. With our findings, we
        compiled a quick affinity diagram.
      </p>
      <div className="mt-10">
        <ImageGallery images={affinityDiagram} />
      </div>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Persona
      </h3>
      <div className="mt-10">
        <ImageGallery images={persona} />
      </div>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Prototyping
      </h3>
      <p>
        We experimented with different ways to prototype our idea and see if it
        was fun, such as Google Drawings. Our first idea didn't work, and we
        tried using a projector to give more feedback to the user.
      </p>
      <div className="mt-10">
        <iframe
          className="m-auto"
          title="vimeo-player"
          src="https://player.vimeo.com/video/249092505"
          width="640"
          height="359"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="mt-10">
        <iframe
          className="m-auto"
          title="vimeo-player"
          src="https://player.vimeo.com/video/249093547"
          width="640"
          height="359"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Building the Prototype
      </h3>
      <p>
        I used Axure to build the space-themed mini-games with the script Ben
        wrote as inspiration. I had to create the games in such a way that I was
        in control of the interactions while creating the illusion that the
        games were fully functional.
      </p>
      <div className="mt-10 w-1/2 m-auto">
        <ImageGallery images={prototype} />
      </div>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Focus Group
      </h3>
      <p>
        Julia was kind enough to coordinate a focus group for us at the Handwork
        Studio with some of her most enthusiastic students. I was worried going
        into it that the kids wouldn't find the games fun, or that we'd
        encounter technical hang-ups. It turned out Antonia's hypothesis on kids
        being bundles of energy was correct—they had a blast playing with the
        toy.​
      </p>
      <iframe
        className="m-auto"
        title="vimeo-player"
        src="https://player.vimeo.com/video/249106131"
        width="640"
        height="359"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Buy-A-Feature
      </h3>
      <p>
        Overall, the focus group was a resounding success. Even after the kids
        found out I was controlling the games, they were still asking to play as
        I packed up the projector. Ben also sketched a bunch of potential
        features on notecards and let the kids vote on their favorite ones,
        which made the feedback process more interactive.
      </p>
      <div className="w-1/2 mt-10 m-auto">
        <ImageGallery images={buyAFeature} />
      </div>
      <br />
      <h3 className="text-center mb-2 font-bold text-3xl text-blue500">
        Takeaways
      </h3>
      <p>
        My group and I set out to design a toy that would keep kids active and
        had a secretive learning component, which I believe we accomplished.
        During our "Buy-a-Feature" session, the kids said they didn't want to
        jump in a game because they thought jumping was boring. As evidenced in
        the video, not only were they jumping the entire time, but they were
        having a ton of fun doing it. By them not being consciously aware of
        this, I can safely say the Move-O-Matic has the necessary components for
        secretive learning. ​​​​​​​
      </p>
      <br />
      <BackToMenuBtn />
    </div>
  );
};

export default MoveOMatic;
