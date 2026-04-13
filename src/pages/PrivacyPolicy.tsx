import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col font-sans transition-colors duration-300">
      <Navbar />

      <main className="w-full flex-grow flex flex-col items-center">
        <section className="w-full max-w-[800px] px-6 md:px-10 mx-auto pt-[120px] pb-[120px]">
          <Reveal>
            <h1 className="font-serif font-normal text-[48px] md:text-[64px] leading-[0.9] text-black dark:text-white mb-12 uppercase transition-colors">
              PRIVACY POLICY
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-8 text-[15px] md:text-[16px] leading-[1.6] text-[#222] dark:text-zinc-300 transition-colors">
              <p>Last updated: June 2025</p>
              <p>
                At Red Studio, we respect your privacy and are committed to
                protecting your personal data. This privacy policy will inform
                you as to how we look after your personal data when you visit
                our website and tell you about your privacy rights and how the
                law protects you.
              </p>

              <h2 className="font-sans font-bold text-[18px] uppercase mt-8 text-black dark:text-white transition-colors">
                1. Information We Collect
              </h2>
              <p>
                We may collect, use, store and transfer different kinds of
                personal data about you which we have grouped together follows:
                Identity Data, Contact Data, Technical Data, and Usage Data.
              </p>

              <h2 className="font-sans font-bold text-[18px] uppercase mt-8 text-black dark:text-white transition-colors">
                2. How We Use Your Data
              </h2>
              <p>
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Where we need to perform the contract we are about to enter
                  into or have entered into with you.
                </li>
                <li>
                  Where it is necessary for our legitimate interests (or those
                  of a third party) and your interests and fundamental rights do
                  not override those interests.
                </li>
                <li>
                  Where we need to comply with a legal or regulatory obligation.
                </li>
              </ul>

              <h2 className="font-sans font-bold text-[18px] uppercase mt-8 text-black dark:text-white transition-colors">
                3. Data Security
              </h2>
              <p>
                We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used or
                accessed in an unauthorized way, altered or disclosed. In
                addition, we limit access to your personal data to those
                employees, agents, contractors and other third parties who have
                a business need to know.
              </p>

              <h2 className="font-sans font-bold text-[18px] uppercase mt-8 text-black dark:text-white transition-colors">
                4. Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy or our
                privacy practices, please contact us at hello@redstudio.com.
              </p>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
};
