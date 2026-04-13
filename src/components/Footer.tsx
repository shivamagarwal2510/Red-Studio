import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-zinc-950 pt-[80px] pb-[40px] border-t border-gray-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="w-full max-w-content px-6 md:px-10 mx-auto">
        {/* 3-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-[24px] mb-24">
          {/* Column 1: BROWSE */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-[12px] uppercase tracking-wider text-black dark:text-white mb-2">
              BROWSE
            </h4>
            <Link
              to="/"
              className="font-sans text-[13px] text-black dark:text-zinc-400 hover:opacity-60 dark:hover:text-white transition-all"
            >
              Home
            </Link>
            <Link
              to="/work"
              className="font-sans text-[13px] text-black dark:text-zinc-400 hover:opacity-60 dark:hover:text-white transition-all"
            >
              Work
            </Link>
            <Link
              to="/services"
              className="font-sans text-[13px] text-black dark:text-zinc-400 hover:opacity-60 dark:hover:text-white transition-all"
            >
              Services
            </Link>
            <Link
              to="/insights"
              className="font-sans text-[13px] text-black dark:text-zinc-400 hover:opacity-60 dark:hover:text-white transition-all"
            >
              Insights
            </Link>
            <Link
              to="/about"
              className="font-sans text-[13px] text-black dark:text-zinc-400 hover:opacity-60 dark:hover:text-white transition-all"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-sans text-[13px] text-black dark:text-zinc-400 hover:opacity-60 dark:hover:text-white transition-all"
            >
              Start a project
            </Link>
          </div>

          {/* Column 2: CONNECT */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-[12px] uppercase tracking-wider text-black dark:text-white mb-2">
              CONNECT
            </h4>
            <a
              href="#"
              className="font-sans text-[13px] text-black dark:text-zinc-400 hover:opacity-60 dark:hover:text-white transition-all"
            >
              X (Twitter)
            </a>
            <a
              href="#"
              className="font-sans text-[13px] text-black dark:text-zinc-400 hover:opacity-60 dark:hover:text-white transition-all"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="font-sans text-[13px] text-black dark:text-zinc-400 hover:opacity-60 dark:hover:text-white transition-all"
            >
              Facebook
            </a>
            <a
              href="#"
              className="font-sans text-[13px] text-black dark:text-zinc-400 hover:opacity-60 dark:hover:text-white transition-all"
            >
              Instagram
            </a>
            <a
              href="mailto:hello@redstudio.com"
              className="font-sans text-[13px] text-black dark:text-zinc-400 hover:opacity-60 dark:hover:text-white transition-all"
            >
              Email us
            </a>
          </div>

          {/* Column 3: LEGAL */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-[12px] uppercase tracking-wider text-black dark:text-white mb-2">
              LEGAL
            </h4>
            <Link
              to="/privacy"
              className="font-sans text-[13px] text-black dark:text-zinc-400 hover:opacity-60 dark:hover:text-white transition-all"
            >
              Privacy policy
            </Link>
            <Link
              to="/terms"
              className="font-sans text-[13px] text-black dark:text-zinc-400 hover:opacity-60 dark:hover:text-white transition-all"
            >
              Terms & conditions
            </Link>
            <span className="font-sans text-[13px] text-gray-400 dark:text-zinc-600 mt-2">
              © 2025
            </span>
          </div>
        </div>

        {/* Footer Signature */}
        <div className="w-full flex justify-center mt-12 pt-12">
          <h1 className="font-serif text-[14vw] leading-[0.8] text-black dark:text-white text-center tracking-tight transition-colors duration-300">
            RED STUDIO
          </h1>
        </div>
      </div>
    </footer>
  );
};
