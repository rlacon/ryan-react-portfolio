import React from "react";
import Gallery from "react-image-gallery";

const ImageGallery = ({images}) => {
  return (
    <div>
        <Gallery items={images} />
    </div>
  );
};

export default ImageGallery;
