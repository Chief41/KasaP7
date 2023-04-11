import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";

const SlideShow = ({ images }) => {
  const [index, setIndex] = useState(0);
  const slideUp = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };
  const slideDown = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  return (
    <div
      className="relative justify-between flex items-center my-5 h-[40vh] w-full bg-cover rounded-md"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      {images.length > 1 && (
        <>
          <BsChevronLeft
            size={35}
            className="hover:cursor-pointer opacity-70 h-10 text-main-color"
            onClick={slideDown}
          />
          <BsChevronRight
            size={35}
            className="hover:cursor-pointer opacity-70 h-10 text-main-color"
            onClick={slideUp}
          />
        </>
      )}
      {images.length > 1 && (
        <div className="absolute left-0 right-0 z-2 bottom-4 ml-50 text-center text-white text-lg">
          {index + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

export default SlideShow;
