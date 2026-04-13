import React from "react";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export const WorkGrid: React.FC = () => {
  return (
    <section className="w-full max-w-content px-6 md:px-10 mx-auto pb-24 pt-12">
      <div className="flex justify-between items-baseline w-full mb-[64px]">
        <h2 className="font-sans font-black text-[32px] md:text-[48px] uppercase tracking-tight text-black dark:text-white transition-colors">
          WORK
        </h2>
        <Link
          to="/work"
          className="font-sans text-[13px] font-medium text-black dark:text-white hover:opacity-60 transition-opacity"
        >
          All work &rarr;
        </Link>
      </div>

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
      </div>
    </section>
  );
};
