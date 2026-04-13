import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { cn } from "../utils/cn";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "Insights", path: "/insights" },
  { name: "About", path: "/about" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm transition-all duration-300 border-b border-transparent",
          scrolled && "border-gray-100 dark:border-zinc-800 py-2"
        )}
      >
        <div className="w-full max-w-content mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between relative">
          {/* Left: Logo */}
          <div className="flex-shrink-0 z-20">
            <Link
              to="/"
              className="font-sans font-medium text-[15px] tracking-tight text-black dark:text-white hover:opacity-70 transition-opacity"
            >
              Red Studio
            </Link>
          </div>

          {/* Center/Right: Nav Links */}
          <div className="flex items-center ml-auto md:ml-0 md:absolute md:left-0 md:right-0 md:justify-center pointer-events-none">
            <ul className="flex items-center gap-4 md:gap-[32px] pointer-events-auto">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={cn(
                      "font-sans font-normal text-[13px] transition-colors",
                      location.pathname === item.path
                        ? "text-black dark:text-white font-medium"
                        : "text-black dark:text-zinc-400 hover:text-gray-600 dark:hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0 z-20">
            <button
              onClick={toggleTheme}
              className="p-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-[18px] py-[8px] text-[12px] font-bold font-sans text-white bg-[#FF3333] rounded-full hover:bg-[#E62E2E] hover:shadow-sm transition-all duration-300"
            >
              Start a project &rarr;
            </Link>
          </div>

          {/* Mobile Theme Toggle */}
          <div className="md:hidden flex items-center ml-4 z-20">
            <button
              onClick={toggleTheme}
              className="p-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
