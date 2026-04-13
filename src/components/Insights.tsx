import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { insights } from "../data/insights";

export const Insights: React.FC = () => {
  const homeArticles = insights.slice(0, 4);

  return (
    <section className="w-full max-w-content px-6 md:px-10 mx-auto pt-[100px] pb-[100px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
        <div className="max-w-md">
          <h2 className="font-sans font-black text-[32px] md:text-[48px] uppercase tracking-tight text-black dark:text-white mb-4 transition-colors">
            INSIGHTS
          </h2>
          <p className="font-sans text-[16px] text-black/70 dark:text-zinc-400 leading-relaxed transition-colors">
            Deep-dives from our team on design, code and how to ship smarter as
            an agency.
          </p>
        </div>
        <Link
          to="/insights"
          className="text-[13px] font-medium text-black dark:text-white hover:opacity-60 transition-opacity mt-4 md:mt-0"
        >
          All posts &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[64px]">
        {homeArticles.map((article, index) => (
          <Link
            to={`/insights/${article.id}`}
            key={article.id}
            className="flex flex-col group cursor-pointer"
          >
            <Reveal delay={index * 0.1}>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-[16px] bg-[#F5F5F0] dark:bg-zinc-900 mb-[24px] flex items-center justify-center p-8 transition-colors duration-300">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal filter grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
            <h3 className="font-sans font-black text-[18px] md:text-[22px] leading-tight text-black dark:text-white mb-3 uppercase transition-colors">
              {article.title}
            </h3>
            <span className="font-sans text-[12px] font-medium text-black dark:text-white border-b border-black/20 dark:border-white/20 self-start pb-0.5 group-hover:border-black dark:group-hover:border-white transition-colors">
              Read post &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
