export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  heroImage: string;
  gridImage: string;
  images: string[];
  description: string;
  process: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  outcome: {
    title: string;
    description: string;
  };
}

// Image Constants
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
const IMG_BUY_HEJ =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/yellow/20443691_6299913-1.avif"; // Extra 1

// Extra Images for details
const IMG_EXTRA_2 =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/yellow/74879019_9808781.avif";
const IMG_EXTRA_3 =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/yellow/8422370_3897478.avif";

export const projects: Project[] = [
  {
    id: "relation",
    index: "001",
    title: "RELATION",
    category: "Branding / UI",
    year: "2024",
    heroImage: IMG_RELATION,
    gridImage: IMG_RELATION,
    images: [IMG_EXTRA_2, IMG_EXTRA_3],
    description:
      "A complete brand overhaul for a modern dating app focusing on meaningful connections.",
    process: {
      title: "PROCESS",
      description: "We started by deconstructing the current dating landscape.",
      steps: [
        {
          title: "Research",
          description:
            "Conducting in-depth user research to understand pain points in modern dating.",
        },
        {
          title: "Strategy",
          description:
            "Defining a voice that speaks to authenticity rather than gamification.",
        },
        {
          title: "Design",
          description:
            "Creating a visual system that feels warm, tactile, and human.",
        },
      ],
    },
    outcome: {
      title: "OUTCOME",
      description:
        "A 40% increase in user retention and a brand that feels distinctly human in a digital space.",
    },
  },
  {
    id: "grey-space",
    index: "002",
    title: "GREY SPACE",
    category: "Architecture",
    year: "2023",
    heroImage: IMG_GREY_SPACE,
    gridImage: IMG_GREY_SPACE,
    images: [IMG_EXTRA_3, IMG_RELATION],
    description:
      "Minimalist architectural visualization for a new cultural center in Copenhagen.",
    process: {
      title: "PROCESS",
      description: "Balancing light, shadow, and concrete.",
      steps: [
        {
          title: "Concept",
          description:
            "Exploring the relationship between brutalism and nature.",
        },
        {
          title: "Modeling",
          description:
            "High-fidelity 3D modeling of the structure and surrounding landscape.",
        },
        {
          title: "Rendering",
          description:
            "Achieving photorealistic lighting conditions for various times of day.",
        },
      ],
    },
    outcome: {
      title: "OUTCOME",
      description:
        "The visualization helped secure funding for the project's next phase of development.",
    },
  },
  {
    id: "reflections",
    index: "003",
    title: "REFLECTIONS",
    category: "Art Direction",
    year: "2024",
    heroImage: IMG_REFLECTIONS,
    gridImage: IMG_REFLECTIONS,
    images: [IMG_EXTRA_2, IMG_GREY_SPACE],
    description:
      "An editorial campaign exploring the duality of modern fashion.",
    process: {
      title: "PROCESS",
      description: "Using mirrors and light to create distortion.",
      steps: [
        {
          title: "Art Direction",
          description:
            "Curating a moodboard centered around glass, water, and reflection.",
        },
        {
          title: "Production",
          description:
            "A two-day shoot in a custom-built set with complex lighting rigs.",
        },
        {
          title: "Post-Production",
          description:
            "Minimal retouching to maintain the raw, optical effects.",
        },
      ],
    },
    outcome: {
      title: "OUTCOME",
      description:
        "Featured in three major design publications and set a new visual tone for the brand.",
    },
  },
  {
    id: "bubble",
    index: "004",
    title: "BUBBLE INTRO",
    category: "Motion Design",
    year: "2023",
    heroImage: IMG_BUBBLE,
    gridImage: IMG_BUBBLE,
    images: [IMG_EXTRA_3, IMG_REFLECTIONS],
    description:
      "A playful, physics-based motion language for a fintech startup.",
    process: {
      title: "PROCESS",
      description: "Making finance feel friendly and soft.",
      steps: [
        {
          title: "Motion Study",
          description:
            "Experimenting with soft-body physics and fluid dynamics.",
        },
        {
          title: "Implementation",
          description:
            "Translating After Effects prototypes into Lottie files for web.",
        },
        {
          title: "System",
          description: "Creating a motion guideline for the internal team.",
        },
      ],
    },
    outcome: {
      title: "OUTCOME",
      description:
        "Increased engagement on the landing page by 25% due to interactive elements.",
    },
  },
  {
    id: "react",
    index: "005",
    title: "REACT",
    category: "Development",
    year: "2024",
    heroImage: IMG_REACT,
    gridImage: IMG_REACT,
    images: [IMG_EXTRA_2, IMG_BUBBLE],
    description:
      "A high-performance headless commerce build for a global retailer.",
    process: {
      title: "PROCESS",
      description: "Speed, scale, and stability.",
      steps: [
        {
          title: "Architecture",
          description:
            "Designing a microservices architecture using Next.js and Shopify Plus.",
        },
        {
          title: "Development",
          description:
            "Building reusable component libraries for rapid page assembly.",
        },
        {
          title: "Optimization",
          description:
            "Achieving perfect Lighthouse scores through aggressive caching and code splitting.",
        },
      ],
    },
    outcome: {
      title: "OUTCOME",
      description:
        "Page load times reduced by 60%, leading to a significant boost in conversion rates.",
    },
  },
  {
    id: "buy-hej",
    index: "006",
    title: "BUY HEJ",
    category: "Ecommerce",
    year: "2023",
    heroImage: IMG_BUY_HEJ,
    gridImage: IMG_BUY_HEJ,
    images: [IMG_EXTRA_3, IMG_REACT],
    description: "Direct-to-consumer furniture brand launch.",
    process: {
      title: "PROCESS",
      description: "Scandinavian simplicity meets digital commerce.",
      steps: [
        {
          title: "UX Design",
          description:
            "Simplifying the purchase flow for customizable furniture.",
        },
        {
          title: "Visual Design",
          description: "Letting the product photography take center stage.",
        },
        {
          title: "Launch",
          description:
            "Coordinating a multi-channel launch across social and search.",
        },
      ],
    },
    outcome: {
      title: "OUTCOME",
      description: "Sold out of initial inventory within 48 hours of launch.",
    },
  },
];
