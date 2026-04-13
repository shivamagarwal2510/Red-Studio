export interface Insight {
  id: string;
  title: string;
  category: string;
  length: string;
  date: string;
  image: string;
}

// Insight Images
const IMG_SPRINT =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/yellow/Gemini_Generated_Image_1v5gvh1v5gvh1v5g_converted.avif";
const IMG_PIXELS =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/yellow/Gemini_Generated_Image_qm5gcjqm5gcjqm5g_converted.avif";
const IMG_FLAGS =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/yellow/Gemini_Generated_Image_bcbp3bcbp3bcbp3b_converted.avif";
const IMG_ACCESS =
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/yellow/Gemini_Generated_Image_crpyccrpyccrpycc_converted.avif";

export const insights: Insight[] = [
  {
    id: "design-sprints",
    title: "DESIGN SPRINTS DONE RIGHT",
    category: "Process",
    length: "5 mins",
    date: "Jun 24, 2025",
    image: IMG_SPRINT,
  },
  {
    id: "beyond-pixels",
    title: "BEYOND PIXELS: MEASURING DESIGN IMPACT",
    category: "Strategy",
    length: "4 mins",
    date: "Jun 18, 2025",
    image: IMG_PIXELS,
  },
  {
    id: "feature-flags",
    title: "SHIPPING FASTER WITH FEATURE FLAGS",
    category: "Engineering",
    length: "7 mins",
    date: "Jun 12, 2025",
    image: IMG_FLAGS,
  },
  {
    id: "accessibility-myths",
    title: "ACCESSIBILITY MYTHS",
    category: "Design",
    length: "6 mins",
    date: "May 30, 2025",
    image: IMG_ACCESS,
  },
];
