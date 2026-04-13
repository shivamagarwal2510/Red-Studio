import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTABanner } from "../components/CTABanner";
import { Reveal } from "../components/Reveal";
import { InfiniteMarquee } from "../components/InfiniteMarquee";

const LOGOS = ["IRENE", "Slice", "n.a", "SOMEDAY", "Compose", "Accent"];

export const ContactPage: React.FC = () => {
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
              WORK WITH US
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-[18px] md:text-[22px] leading-[1.5] text-black dark:text-zinc-300 max-w-[600px] mx-auto text-left md:text-center transition-colors">
              Ready to turn ambition into a successful product? Tell us about
              your challenge and we'll help you launch something magical, fast.
            </p>
          </Reveal>
        </section>

        <section className="w-full max-w-content px-6 md:px-10 mx-auto mb-[120px]">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="w-full md:w-1/3">
              <Reveal>
                <h2 className="font-sans font-black text-[32px] md:text-[40px] uppercase tracking-tight text-black dark:text-white mb-4 transition-colors">
                  ENQUIRY
                </h2>
                <div className="w-4 h-0.5 bg-black/20 dark:bg-white/20 transition-colors" />
              </Reveal>
            </div>

            <div className="w-full md:w-2/3">
              <form className="flex flex-col gap-8">
                <Reveal delay={0.1}>
                  <div className="flex flex-col gap-4">
                    <label className="font-sans text-[12px] font-bold uppercase tracking-wide text-black dark:text-white transition-colors">
                      ABOUT YOU
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full bg-[#F9F9F7] dark:bg-zinc-900 rounded-[8px] px-6 py-4 text-[15px] text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10 transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full bg-[#F9F9F7] dark:bg-zinc-900 rounded-[8px] px-6 py-4 text-[15px] text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10 transition-all"
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="flex flex-col gap-4">
                    <label className="font-sans text-[12px] font-bold uppercase tracking-wide text-black dark:text-white transition-colors">
                      ABOUT THE BUSINESS
                    </label>
                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full bg-[#F9F9F7] dark:bg-zinc-900 rounded-[8px] px-6 py-4 text-[15px] text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10 transition-all"
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="flex flex-col gap-4">
                    <label className="font-sans text-[12px] font-bold uppercase tracking-wide text-black dark:text-white transition-colors">
                      ABOUT THE PROJECT
                    </label>
                    <textarea
                      placeholder="Explain the challenge"
                      rows={6}
                      className="w-full bg-[#F9F9F7] dark:bg-zinc-900 rounded-[8px] px-6 py-4 text-[15px] text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-black/10 dark:focus:ring-white/10 transition-all resize-none"
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
                  <button
                    type="submit"
                    className="w-full bg-[#FF3333] text-white font-sans font-bold text-[14px] py-4 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    Submit enquiry &rarr;
                  </button>
                </Reveal>
              </form>
            </div>
          </div>
        </section>

        <section className="w-full max-w-content px-6 md:px-10 mx-auto mb-[120px]">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              <Reveal>
                <div className="flex justify-between items-baseline border-b border-gray-100 dark:border-zinc-800 pb-4 transition-colors duration-300">
                  <span className="font-sans text-[12px] font-bold uppercase tracking-wide text-black dark:text-white transition-colors">
                    NEW BUSINESS
                  </span>
                  <a
                    href="mailto:business@redstudio.com"
                    className="font-sans text-[14px] text-black dark:text-zinc-300 hover:opacity-60 transition-opacity underline decoration-gray-300 dark:decoration-zinc-700 underline-offset-4"
                  >
                    business@redstudio.com
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex justify-between items-baseline border-b border-gray-100 dark:border-zinc-800 pb-4 transition-colors duration-300">
                  <span className="font-sans text-[12px] font-bold uppercase tracking-wide text-black dark:text-white transition-colors">
                    GENERAL CONTACT
                  </span>
                  <a
                    href="mailto:hi@redstudio.com"
                    className="font-sans text-[14px] text-black dark:text-zinc-300 hover:opacity-60 transition-opacity underline decoration-gray-300 dark:decoration-zinc-700 underline-offset-4"
                  >
                    hi@redstudio.com
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex justify-between items-start border-b border-gray-100 dark:border-zinc-800 pb-4 transition-colors duration-300">
                  <span className="font-sans text-[12px] font-bold uppercase tracking-wide text-black dark:text-white mt-1 transition-colors">
                    DROP IN
                  </span>
                  <address className="font-sans text-[14px] text-black dark:text-zinc-300 text-right not-italic leading-relaxed transition-colors">
                    27 Curtain Road
                    <br />
                    Shoreditch
                    <br />
                    London
                    <br />
                    EC2A 3LT
                  </address>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex justify-between items-baseline border-b border-gray-100 dark:border-zinc-800 pb-4 transition-colors duration-300">
                  <span className="font-sans text-[12px] font-bold uppercase tracking-wide text-black dark:text-white transition-colors">
                    CALL US
                  </span>
                  <a
                    href="tel:+4401234567980"
                    className="font-sans text-[14px] text-black dark:text-zinc-300 hover:opacity-60 transition-opacity underline decoration-gray-300 dark:decoration-zinc-700 underline-offset-4"
                  >
                    +44 (0) 1234 567 980
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex justify-between items-start border-b border-gray-100 dark:border-zinc-800 pb-4 transition-colors duration-300">
                  <span className="font-sans text-[12px] font-bold uppercase tracking-wide text-black dark:text-white mt-1 transition-colors">
                    CONNECT
                  </span>
                  <div className="flex flex-col items-end gap-1">
                    <a
                      href="#"
                      className="font-sans text-[14px] text-black dark:text-zinc-300 hover:opacity-60 transition-opacity underline decoration-gray-300 dark:decoration-zinc-700 underline-offset-4"
                    >
                      X (Twitter)
                    </a>
                    <a
                      href="#"
                      className="font-sans text-[14px] text-black dark:text-zinc-300 hover:opacity-60 transition-opacity underline decoration-gray-300 dark:decoration-zinc-700 underline-offset-4"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="font-sans text-[14px] text-black dark:text-zinc-300 hover:opacity-60 transition-opacity underline decoration-gray-300 dark:decoration-zinc-700 underline-offset-4"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="font-sans text-[14px] text-black dark:text-zinc-300 hover:opacity-60 transition-opacity underline decoration-gray-300 dark:decoration-zinc-700 underline-offset-4"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="w-full md:w-1/2">
              <Reveal delay={0.2}>
                <div className="w-full aspect-[4/5] bg-gray-100 dark:bg-zinc-900 rounded-[24px] overflow-hidden transition-colors duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="w-full max-w-content px-6 md:px-10 mx-auto mb-[120px]">
          <InfiniteMarquee
            items={LOGOS}
            speed={25}
            hoverSpeed={50}
            itemClassName="gap-12 md:gap-24 pr-12 md:pr-24"
            renderItem={(name, index) => (
              <span
                key={index}
                className="text-[24px] md:text-[28px] text-black dark:text-white whitespace-nowrap font-bold font-sans transition-colors"
              >
                {name}
              </span>
            )}
          />
        </div>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};
