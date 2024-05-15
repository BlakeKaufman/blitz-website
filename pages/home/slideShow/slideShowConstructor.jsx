import React, { useEffect, useState } from "react";
import "./index.css"; // CSS for styling

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialViewportHeight, setInitialViewportHeight] = useState(0);

  // const goToNextSlide = () => {
  //   setCurrentIndex((prevIndex) => {
  //     if (prevIndex + 1 > slides.length - 1) return prevIndex;
  //     return (prevIndex += 1);
  //   });
  // };

  // const goToPrevSlide = () => {
  //   setCurrentIndex((prevIndex) => {
  //     if (prevIndex - 1 < 0) return prevIndex;
  //     return (prevIndex -= 1);
  //   });
  // };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setInitialViewportHeight(window.innerHeight);
  }, []);

  return (
    <div className="slideshow-container">
      <div
        style={{ height: initialViewportHeight * 0.8 }}
        className="movableContainer"
      >
        <div className="slides">
          {slides.map((slide, index) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <div
                style={{
                  left: `${(index - currentIndex) * 92}%`,
                  backgroundColor: slide.backgroundColor
                    ? slide.backgroundColor
                    : "unset",

                  color: index === 0 || index === 2 ? "#ffffff" : "#000000",
                }}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`slide ${index === currentIndex ? "active" : ""} ${
                  index - currentIndex === 0 && isHovered ? "hovered" : ""
                }`}
                key={index}
              >
                {slide.img && (
                  <img className="backgroundImage" src={slide.img} alt="" />
                )}
                <h1>{slide.title}</h1>
                <h2>{slide.description}</h2>
                <button
                  style={{
                    backgroundColor: index === 2 ? "#ffffff" : "#000000",
                    color: index === 2 ? "#000000" : "#ffffff",
                  }}
                >
                  {slide.callToAction}
                </button>
                {/* {slide} */}
              </div>
            );
          })}
        </div>
      </div>

      <div className="dot-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
