import React, { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { cn } from "../utils/cn";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    id: "001",
    title: "DESIGN",
    tags: [
      "Website design",
      "Product design",
      "Brand identity systems",
      "Rapid prototyping",
      "Design systems",
    ],
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "002",
    title: "DEVELOPMENT",
    tags: [
      "Web app development",
      "Front-end engineering",
      "Shopify & headless ecommerce",
      "Performance audits",
    ],
    image:
      "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "003",
    title: "MARKETING",
    tags: [
      "Social media campaigns",
      "Content & email marketing",
      "Paid search",
      "SEO strategy",
      "Launch asset kits",
    ],
    image:
      "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=800&auto=format&fit=crop",
  },
];

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the "lag" effect
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Handle mouse movement within the section
  const handleMouseMove = (e: React.MouseEvent) => {
    // We want the image to be centered on the cursor, so we subtract half the width/height (approx 300px / 200px)
    // Adjust these offsets based on the actual image card size defined in CSS
    mouseX.set(e.clientX - 150);
    mouseY.set(e.clientY - 100);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-black text-white py-[120px] flex flex-col justify-center overflow-hidden cursor-default"
    >
      <div className="w-full max-w-content mx-auto px-6 md:px-10 relative z-10">
        {/* Intro Text - Blur In Entrance */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", x: -20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 max-w-lg"
        >
          <p className="font-sans text-[16px] md:text-[18px] text-white/70 leading-relaxed">
            This is how we turn the biggest and boldest ideas into flawless
            digital products.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="flex flex-col">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
              className="group relative border-t border-white/10 py-12 md:py-16 transition-all duration-500"
            >
              <Link to="/services" className="block w-full">
                <div
                  className={cn(
                    "flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 transition-opacity duration-500",
                    activeService !== null && activeService !== index
                      ? "opacity-30"
                      : "opacity-100"
                  )}
                >
                  {/* Index */}
                  <span className="font-sans text-[12px] font-bold text-white/40 font-mono">
                    {service.id}
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-sans font-black text-[48px] md:text-[80px] leading-[0.9] text-white uppercase mb-6 tracking-tight">
                      {service.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-[12px] py-[6px] rounded-[4px] bg-white/10 text-white/60 text-[11px] font-sans font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Hover Image (Desktop Only) */}
      <div className="hidden md:block pointer-events-none fixed top-0 left-0 w-full h-full z-50 mix-blend-difference">
        {/* 
           Using mix-blend-difference or just high z-index. 
           The prompt asks for "A floating hover card... specific to that service".
           We place it fixed and move it with transforms.
        */}
      </div>

      {/* Actual Image Container - We render it outside the mix-blend container to keep colors true */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-40 w-[300px] h-[400px] rounded-[16px] overflow-hidden"
        style={{ x: springX, y: springY }}
      >
        <AnimatePresence mode="wait">
          {activeService !== null && (
            <motion.div
              key={activeService}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full h-full bg-gray-800 shadow-2xl"
            >
              <img
                src={SERVICES[activeService].image}
                alt="Service Preview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
