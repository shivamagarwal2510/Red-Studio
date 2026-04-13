import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTABanner } from "../components/CTABanner";
import { Reveal } from "../components/Reveal";
import { insights } from "../data/insights";

export const InsightsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col font-sans transition-colors duration-300">
      <Navbar />

      <main className="w-full flex-grow flex flex-col items-center">
        <section className="w-full max-w-content px-6 md:px-10 mx-auto pt-[120px] pb-[80px] text-center">
          <Reveal>
            <h1 className="font-serif font-normal text-[64px] sm:text-[90px] md:text-[140px] leading-[0.85] tracking-tight text-black dark:text-white mb-[40px] uppercase transition-colors">
              INSIGHTS
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-[#222] dark:text-zinc-300 max-w-[600px] mx-auto transition-colors">
              Deep-dives from our team on design, code and how to ship smarter
              as an agency.
            </p>
          </Reveal>
        </section>

        <section className="w-full max-w-content px-6 md:px-10 mx-auto pb-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[64px]">
            {insights.map((article, index) => (
              <Link
                to={`/insights/${article.id}`}
                key={article.id}
                className="flex flex-col group cursor-pointer"
              >
                <Reveal delay={index * 0.05}>
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-[16px] bg-[#F5F5F0] dark:bg-zinc-900 mb-[24px] flex items-center justify-center p-12 transition-colors duration-300">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal filter grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Reveal>
                <h3 className="font-sans font-black text-[20px] md:text-[24px] leading-tight text-black dark:text-white mb-4 uppercase transition-colors">
                  {article.title}
                </h3>
                <span className="font-sans text-[13px] font-bold text-black dark:text-white border-b border-black/20 dark:border-white/20 self-start pb-0.5 group-hover:border-black dark:group-hover:border-white transition-colors">
                  Read post &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};
