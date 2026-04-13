import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroHeading } from "../components/HeroHeading";
import { FeatureImage } from "../components/FeatureImage";
import { WhoWeAre } from "../components/WhoWeAre";
import { WorkGrid } from "../components/WorkGrid";
import { Services } from "../components/Services";
import { Insights } from "../components/Insights";
import { CTABanner } from "../components/CTABanner";
import { Footer } from "../components/Footer";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col font-sans transition-colors duration-300">
      <Navbar />

      <main className="w-full flex flex-col">
        <HeroHeading />
        <FeatureImage />
        <WhoWeAre />
        <WorkGrid />
        <Services />
        <Insights />
        <CTABanner />
        <Footer />
      </main>
    </div>
  );
};
