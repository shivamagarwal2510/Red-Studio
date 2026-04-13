import React from "react";
import { Link } from "react-router-dom";

export const CTABanner: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#FFD6D6] to-[#FF3333] dark:from-[#4a0000] dark:to-[#FF3333] py-[100px] md:py-[140px] transition-colors duration-300">
      <div className="w-full max-w-content px-6 md:px-10 mx-auto text-center flex flex-col items-center justify-center">
        <h2 className="font-sans font-black text-[32px] md:text-[56px] uppercase leading-[0.95] text-black dark:text-white mb-10 max-w-3xl transition-colors">
          Have a challenge <br /> for us?{" "}
          <span className="text-black/40 dark:text-white/40 transition-colors">
            We love <br /> challenges.
          </span>
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-[24px] py-[12px] bg-[#FF3333] dark:bg-white dark:text-black text-white text-[13px] font-bold font-sans rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          Start a project &rarr;
        </Link>
      </div>
    </section>
  );
};
