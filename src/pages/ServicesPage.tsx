import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTABanner } from "../components/CTABanner";
import { Reveal } from "../components/Reveal";

interface ServiceSectionProps {
  title: string;
  description: string;
  tags: string[];
  images: {
    large: string;
    smallTop: string;
    smallBottom: string;
  };
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  tags,
  images,
}) => (
  <div className="flex flex-col md:flex-row gap-12 md:gap-24 border-t border-gray-100 dark:border-zinc-800 py-[80px] md:py-[100px] first:border-t-0 transition-colors duration-300">
    <div className="w-full md:w-1/4">
      <Reveal>
        <h2 className="font-sans font-black text-[24px] md:text-[32px] uppercase tracking-tight text-black dark:text-white sticky top-24 transition-colors">
          {title}
        </h2>
      </Reveal>
    </div>

    <div className="w-full md:w-3/4">
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 h-[300px] md:h-[480px]">
          <Reveal className="w-2/3 h-full">
            <div className="w-full h-full bg-gray-100 dark:bg-zinc-900 rounded-[20px] overflow-hidden transition-colors duration-300">
              <img
                src={images.large}
                alt={`${title} Main`}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <div className="w-1/3 flex flex-col gap-4 h-full">
            <Reveal className="w-full h-1/2" delay={0.1}>
              <div className="w-full h-full bg-gray-100 dark:bg-zinc-900 rounded-[20px] overflow-hidden transition-colors duration-300">
                <img
                  src={images.smallTop}
                  alt={`${title} Detail 1`}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="w-full h-1/2" delay={0.2}>
              <div className="w-full h-full bg-gray-100 dark:bg-zinc-900 rounded-[20px] overflow-hidden transition-colors duration-300">
                <img
                  src={images.smallBottom}
                  alt={`${title} Detail 2`}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.3}>
          <p className="font-sans text-[18px] md:text-[22px] leading-relaxed text-black dark:text-zinc-300 max-w-2xl mb-6 transition-colors">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-gray-100 dark:bg-zinc-900 rounded-[4px] text-[11px] font-bold uppercase tracking-wide text-black/70 dark:text-white/70 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </div>
);

const IMG_RELATION =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/yellow/2148792986.avif";
const IMG_GREY_SPACE =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/yellow/3d-rendered-abstract-design-elements-composition.avif";
const IMG_REFLECTIONS =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/yellow/envato-labs-image-edit-19.avif";
const IMG_BUBBLE =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/yellow/20849708_6364976.avif";
const IMG_REACT =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/yellow/9866.avif";
const IMG_EXTRA_1 =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/yellow/20443691_6299913-1.avif";
const IMG_EXTRA_2 =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/yellow/74879019_9808781.avif";
const IMG_EXTRA_3 =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/yellow/8422370_3897478.avif";

export const ServicesPage: React.FC = () => {
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
              SERVICES
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-[#222] dark:text-zinc-300 max-w-[600px] mx-auto transition-colors">
              How we turn big and bold ideas into digital-first products. This
              is what we can help your business with.
            </p>
          </Reveal>
        </section>

        <section className="w-full max-w-content px-6 md:px-10 mx-auto pb-[120px]">
          <ServiceSection
            title="DESIGN"
            description="Great ideas need clear, human-centred visuals. We turn insight into brands, user-interfaces and motion that feels right."
            tags={[
              "Website design",
              "Product design",
              "Brand identity systems",
              "Rapid prototyping",
              "Design systems",
            ]}
            images={{
              large: IMG_RELATION,
              smallTop: IMG_EXTRA_2,
              smallBottom: IMG_EXTRA_1,
            }}
          />

          <ServiceSection
            title="DEVELOPMENT"
            description="We bring the experience to live in working code. Fast, accessible and future-proof builds turn sketches into stable, scalable products."
            tags={[
              "Web app development",
              "Front-end engineering",
              "Shopify & headless ecommerce",
              "Performance audits",
            ]}
            images={{
              large: IMG_REACT,
              smallTop: IMG_BUBBLE,
              smallBottom: IMG_EXTRA_3,
            }}
          />

          <ServiceSection
            title="MARKETING"
            description="Launches should land with impact. We pair data, story and design to drive awareness, adoption and growth."
            tags={[
              "Social media campaigns",
              "Content & email marketing",
              "Paid search",
              "SEO strategy",
              "Launch asset kits",
            ]}
            images={{
              large: IMG_REFLECTIONS,
              smallTop: IMG_GREY_SPACE,
              smallBottom: IMG_EXTRA_2,
            }}
          />
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};
