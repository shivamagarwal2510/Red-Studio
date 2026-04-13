import React from "react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

export const HeroHeading: React.FC = () => {
  const drawTransition = {
    duration: 1.5,
    ease: "easeOut",
    delay: 0.8,
  };

  return (
    <div className="w-full flex flex-col items-center text-center px-4 relative mt-[60px] md:mt-[100px] mb-[40px]">
      <Reveal>
        <div className="relative inline-block">
          <h1 className="font-serif font-normal text-[64px] sm:text-[100px] md:text-[160px] lg:text-[190px] leading-[0.85] tracking-tight text-black dark:text-white relative z-10 transition-colors duration-300">
            RED STUDIO
          </h1>

          <div className="absolute -top-6 -right-4 md:-top-10 md:-right-12 w-[50px] md:w-[80px]">
            <svg
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <motion.path
                d="M10 50C15 40 25 20 35 10"
                stroke="#FF3333"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={drawTransition}
              />
              <motion.path
                d="M30 50C35 40 45 20 55 10"
                stroke="#FF3333"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ ...drawTransition, delay: 1.0 }}
              />
            </svg>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-[20px] md:mt-[30px] w-[50%] md:w-[35%]">
            <svg
              viewBox="0 0 200 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M5 15C30 25 50 5 75 5C100 5 120 25 145 25C170 25 180 5 195 5"
                stroke="#FF3333"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={drawTransition}
              />
            </svg>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
