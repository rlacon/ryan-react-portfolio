import React from "react";
import Prototype from "../components/Prototype";
import BackToMenuBtn from "../components/BackToMenuBtn";
import ImageGallery from "../components/ImageGallery";

const MoveOMatic = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-4">
      <BackToMenuBtn />
      <div className="mt-10">
        <ImageGallery images={images} />
      </div>
    </div>
  );
};

export default MoveOMatic;
