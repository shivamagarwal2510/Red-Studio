import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";

export const TermsConditions: React.FC = () => {
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
              TERMS & CONDITIONS
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-8 text-[15px] md:text-[16px] leading-[1.6] text-[#222] dark:text-zinc-300 transition-colors">
              <p>Last updated: June 2025</p>
              <p>
                Please read these terms and conditions carefully before using
                Our Service.
              </p>

              <h2 className="font-sans font-bold text-[18px] uppercase mt-8 text-black dark:text-white transition-colors">
                1. Interpretation and Definitions
              </h2>
              <p>
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>

              <h2 className="font-sans font-bold text-[18px] uppercase mt-8 text-black dark:text-white transition-colors">
                2. Acknowledgment
              </h2>
              <p>
                These are the Terms and Conditions governing the use of this
                Service and the agreement that operates between You and the
                Company. These Terms and Conditions set out the rights and
                obligations of all users regarding the use of the Service.
              </p>

              <h2 className="font-sans font-bold text-[18px] uppercase mt-8 text-black dark:text-white transition-colors">
                3. Intellectual Property
              </h2>
              <p>
                The Service and its original content (excluding Content provided
                by You or other users), features and functionality are and will
                remain the exclusive property of the Company and its licensors.
              </p>

              <h2 className="font-sans font-bold text-[18px] uppercase mt-8 text-black dark:text-white transition-colors">
                4. Termination
              </h2>
              <p>
                We may terminate or suspend Your access immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if You breach these Terms and Conditions.
              </p>

              <h2 className="font-sans font-bold text-[18px] uppercase mt-8 text-black dark:text-white transition-colors">
                5. Governing Law
              </h2>
              <p>
                The laws of the Country, excluding its conflicts of law rules,
                shall govern this Terms and Your use of the Service. Your use of
                the Application may also be subject to other local, state,
                national, or international laws.
              </p>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
};
