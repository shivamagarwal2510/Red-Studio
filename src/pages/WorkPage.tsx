import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { CTABanner } from "../components/CTABanner";
import { Reveal } from "../components/Reveal";
import { projects } from "../data/projects";

export const WorkPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col font-sans transition-colors duration-300">
      <Navbar />

      <main className="w-full flex-grow flex flex-col items-center">
        <section className="w-full max-w-content px-6 md:px-10 mx-auto pt-[120px] pb-[80px] text-center">
          <div className="w-full h-px bg-[#EDEDED] dark:bg-zinc-800 mb-[48px] transition-colors duration-300" />

          <Reveal>
            <h1 className="font-serif font-normal text-[64px] sm:text-[90px] md:text-[130px] leading-[0.9] tracking-tight text-black dark:text-white mb-[32px] uppercase transition-colors">
              Latest Work
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-sans text-[15px] md:text-[17px] leading-[1.6] text-[#222] dark:text-zinc-300 max-w-[600px] mx-auto transition-colors">
              From market leaders to tomorrow’s start-ups, we turn ambition into
              experiences that simply work.
            </p>
          </Reveal>
        </section>

        <section className="w-full max-w-content px-6 md:px-10 mx-auto pb-[120px]">
          <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row gap-[32px] md:gap-[40px] mb-[64px] md:mb-[96px]">
              <div className="w-full md:w-1/2">
                <ProjectCard
                  {...projects[0]}
                  image={projects[0].gridImage}
                  imageHeight="h-[320px] md:h-[420px]"
                />
              </div>
              <div className="w-full md:w-1/2 md:mt-12">
                <ProjectCard
                  {...projects[1]}
                  image={projects[1].gridImage}
                  imageHeight="h-[320px] md:h-[420px]"
                />
              </div>
            </div>

            <div className="w-full mb-[80px] md:mb-[100px]">
              <ProjectCard
                {...projects[2]}
                image={projects[2].gridImage}
                imageHeight="h-[400px] md:h-[680px]"
                fullWidth
              />
            </div>

            <div className="flex flex-col md:flex-row gap-[32px] md:gap-[40px] mb-[80px] md:mb-[100px]">
              <div className="w-full md:w-[40%]">
                <ProjectCard
                  {...projects[3]}
                  image={projects[3].gridImage}
                  imageHeight="h-[300px] md:h-[380px]"
                />
              </div>
              <div className="w-full md:w-[60%]">
                <ProjectCard
                  {...projects[4]}
                  image={projects[4].gridImage}
                  imageHeight="h-[360px] md:h-[500px]"
                />
              </div>
            </div>

            <div className="w-full mb-[80px] md:mb-[120px]">
              <ProjectCard
                {...projects[5]}
                image={projects[5].gridImage}
                imageHeight="h-[400px] md:h-[680px]"
                fullWidth
              />
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};
