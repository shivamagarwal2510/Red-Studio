import React from "react";
import { Reveal } from "./Reveal";
import { InfiniteMarquee } from "./InfiniteMarquee";

const LOGOS = [
  { name: "IRENE", font: "font-sans font-bold" },
  { name: "Slice", font: "font-serif italic" },
  { name: "n.a", font: "font-sans font-black" },
  { name: "SOMEDAY", font: "font-sans font-extrabold" },
  { name: "Compose", font: "font-serif" },
  { name: "Accent", font: "font-sans font-light" },
];

export const WhoWeAre: React.FC = () => {
  return (
    <section className="w-full pt-[40px] pb-[80px] px-6 md:px-10 max-w-content mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between mb-[80px]">
        <div className="w-full md:w-[200px] mb-6 md:mb-0">
          <Reveal>
            <h2 className="font-sans font-bold text-[13px] uppercase tracking-wider text-black dark:text-white transition-colors">
              Who We Are
            </h2>
          </Reveal>
        </div>

        <div className="w-full md:max-w-[600px]">
          <Reveal delay={0.1}>
            <p className="font-sans text-[18px] md:text-[20px] leading-[1.5] text-black dark:text-zinc-300 mb-8 font-normal transition-colors">
              We are a creative design studio. We turn bold ideas into intuitive
              experiences. The perfect blend of strategy, craft and code. We
              ship fast, learn faster and leave every pixel better than we found
              it.
            </p>

            <div className="flex gap-8">
              <a
                href="#contact"
                className="font-sans text-[12px] font-medium text-black dark:text-white border-b border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white pb-0.5 transition-colors"
              >
                Get in touch &rarr;
              </a>
              <a
                href="#about"
                className="font-sans text-[12px] font-medium text-black dark:text-white border-b border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white pb-0.5 transition-colors"
              >
                About Red Studio &rarr;
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="w-full border-t border-gray-100 dark:border-zinc-800 pt-12 transition-colors duration-300">
        <InfiniteMarquee
          items={LOGOS}
          speed={20}
          hoverSpeed={40}
          itemClassName="gap-12 md:gap-24 pr-12 md:pr-24"
          renderItem={(logo) => (
            <span
              className={`text-[24px] md:text-[28px] text-black dark:text-white whitespace-nowrap opacity-40 grayscale hover:opacity-100 transition-opacity duration-300 ${logo.font}`}
            >
              {logo.name}
            </span>
          )}
        />
      </div>
    </section>
  );
};
