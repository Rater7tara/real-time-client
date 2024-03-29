import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

const backgrounds = [
    "url(https://iili.io/J1Htd2s.jpg)",
    "url(https://i.ibb.co/bmfP0Zg/banner-bg-2.jpg)",
  ];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
          setShowAnimation(true);
          setTimeout(() => {
            setCurrentIndex((prevIndex) =>
              prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
            );
            setShowAnimation(false);
          }, 1000);
        }, 8000);
    
        return () => clearInterval(timer); // Clear the timer on component unmount
      }, []);
      const backgroundStyle = {
        backgroundImage: backgrounds[currentIndex],
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "transform 1s", // Set transition duration to 500ms
        transform: showAnimation ? "scale(1.03)" : "scale(1)",
      };

    return (
        <div className="w-full h-[60vh] lg:h-screen overflow-hidden">
      <div className="w-full h-full" style={backgroundStyle}>
        <div className="h-full max-w-[1520px] mx-auto flex justify-start items-center relative">
          <div className="max-w-[700px] space-y-4 md:space-y-8 md:mt-16 px-4 2xl:px-0 overflow-hidden ms-5">
          <Slide>
          <h1 className="text-4xl lg:text-7xl font-kanit font-extrabold text-white">
            Let's Yourself Be Challenged
      </h1>
      </Slide>
            <p className="text-[#b8b8b8] font-kanit ">
            Transform your fitness journey with our dynamic gym website. Discover a range of personalized training programs tailored to your goals, led by expert coaches. Whether you're looking to build strength, improve endurance, or enhance flexibility, our inclusive community and state-of-the-art facilities provide the perfect environment for you to thrive.
            </p>
            <div className="flex gap-4">
              {/* <button className="my-btn-fill">Contract Us</button> */}
              <button className="btn bg-base-200">Contract Us</button>
              <button className="btn btn-error text-white">More About Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;