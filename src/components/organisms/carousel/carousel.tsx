import React, { useState } from "react";
import ProfileCard from "../../molecules/profileCard/card";
import Tooltip from "../tooltip/tooltip";
import { Profile, Tooltip as TooltipProps } from "@/types/hero";

const Carousel = ({
  profiles = [],
  tooltipItems,
}: {
  profiles: Profile[];
  tooltipItems: TooltipProps;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center rounded-xl -mt-24 m py-4 max-md:pb-0 max-md:mt-6 md:py-0 w-[100%]">
      <div className="md:relative flex items-center w-[100%] justify-center h-[36rem] max-md:h-[26rem]">
        <button
          onClick={prevSlide}
          className="absolute text-4xl lg:left-3 md:left-0 max-md:left-1 z-40 p-2 text-white rounded-full animate-fadeIn"
        >
          &#10094;
        </button>

        <div className="flex items-center justify-center w-full">
          {profiles.map((profile: Profile, index: number) => {
            const isActive = index === currentIndex;
            const isLeft =
              index === (currentIndex + profiles.length - 1) % profiles.length;
            const isRight = index === (currentIndex + 1) % profiles.length;

            let positionClasses = "opacity-0 scale-0";

            if (isActive) {
              positionClasses =
                "z-20 scale-100 opacity-100 transform translate-x-0";
            } else if (isLeft) {
              positionClasses =
                "z-10 scale-90 opacity-85 transform lg:-translate-x-[33%] xl:-translate-x-[45%] md:-translate-x-[25%] max-md:-translate-x-[20%]";
            } else if (isRight) {
              positionClasses =
                "z-10 scale-90 opacity-85 transform lg:translate-x-[33%] xl:translate-x-[45%] md:translate-x-[25%] max-md:translate-x-[20%]";
            }

            return (
              <div
                key={index}
                className={`absolute transition-transform duration-500 ease-in-out ${positionClasses}`}
              >
                <div className="flex items-center justify-center animate-fadeIn">
                  {isActive ? (
                    <Tooltip
                      position="center"
                      textColor="#00C696"
                      content={tooltipItems.data}
                      iconSrc={tooltipItems.icon}
                    >
                      <ProfileCard {...profile} />
                    </Tooltip>
                  ) : (
                    <ProfileCard {...profile} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          className="absolute text-4xl lg:right-3 md:right-0 max-md:right-1 z-40 p-2 text-white rounded-full animate-fadeIn"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
