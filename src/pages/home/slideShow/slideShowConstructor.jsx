import React, { useEffect, useRef, useState } from "react";
import "./index.css"; // CSS for styling

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialViewportHeight, setInitialViewportHeight] = useState(0);
  const slidesRef = useRef(null);
  var scrollTimer = null;

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex += 1);
    });
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex - 1 < 0) return prevIndex;
      return (prevIndex -= 1);
    });
  };

  // useEffect(() => {
  //   if (!slidesRef.current) return;
  //   const slidePositions = [];
  //   slidesRef.current.childNodes.forEach((slide) => {
  //     const rect = slide.getBoundingClientRect();
  //     slidePositions.push(rect.left); // Get the left position of each slide
  //   });
  //   console.log(slidePositions);
  // }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setInitialViewportHeight(window.innerHeight);
  }, []);

  console.log(currentIndex);

  return (
    <div className="slideshow-container">
      {/* <div style={{}} className="movableContainer"> */}
      <ul
        onScroll={() => {
          // if (scrollTimer !== null) {
          //   clearTimeout(scrollTimer);
          // }
          // scrollTimer = setTimeout(function () {
          //   const slidePositions = [];
          //   if (slidesRef.current) {
          //     console.log(slidesRef.current.getBoundingClientRect());
          //     slidesRef.current.childNodes.forEach((slide) => {
          //       const rect = slide.getBoundingClientRect();
          //       slidePositions.push(rect.left); // Get the left position of each slide
          //     });
          //   }
          //   const currentSlide = slidePositions.findIndex(
          //     (item) => item > 0 && item < window.innerWidth
          //   );
          //   console.log("TEST");
          //   if (currentSlide === currentIndex) return;
          //   console.log(currentSlide > currentSlide);
          //   if (currentSlide > currentIndex) goToNextSlide();
          //   else if (currentSlide < currentIndex) goToPrevSlide();
          //   // console.log("SWITCH INDEX");
          // }, 1000);
        }}
        // onTransitionEndCapture={handleTransitionEnd}
        ref={slidesRef}
        style={{ height: initialViewportHeight * 0.8 }}
        className="slides"
      >
        {slides.map((slide, index) => {
          const [isHovered, setIsHovered] = useState(false);

          if (!slide.title)
            return (
              <li
                key={slide.length}
                style={{
                  left: `${(slides.length - 1) * 92}%`,
                  width: window.innerWidth * 0.2,
                  scrollSnapAlign: "none",
                }}
                className="slide t"
              ></li>
            );

          return (
            <li
              style={{
                left: `${(index - currentIndex) * 92}%`,
                backgroundColor: slide.backgroundColor
                  ? slide.backgroundColor
                  : "unset",
                marginRight:
                  index === slides.length - 1 ? window.innerWidth * 0.05 : 0,

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
            </li>
          );
        })}
      </ul>

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
