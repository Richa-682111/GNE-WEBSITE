export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  tags: string[];
  readingTime: string;
  image: string;
  category: string;
};

export const posts: Post[] = [
  {
    slug: "store-the-sun-solar-bess",
    title: "STORE THE SUN: UNLEASHING ENERGY INDEPENDENCE WITH SOLAR + BESS",
    excerpt:
      "For decades, we’ve relied on the sun by day and the grid by night. Welcome to the era of Solar + Battery Energy Storage Systems (BESS) — a breakthrough synergy reshaping global energy.",
    date: "2026-06-30",
    tags: ["BESS", "Solar Power", "Energy Independence"],
    readingTime: "5 min read",
    image: "/bess-blog.png",
    category: "BESS & EMS"
  },
  {
    slug: "built-to-endure-solar-epc-quality",
    title: "BUILT TO ENDURE: THE UNWAVERING QUALITY AT THE CORE OF HIGH-PERFORMANCE SOLAR EPC",
    excerpt:
      "In the dynamic landscape of solar energy, where longevity and performance are non-negotiable, the EPC process stands as the bedrock of enduring success. Here's GNE Infra's commitment.",
    date: "2026-06-25",
    tags: ["Solar EPC", "Quality Assurance", "Engineering"],
    readingTime: "4 min read",
    image: "/solar-blog.png",
    category: "Solar EPC"
  },
  {
    slug: "hydrogen-energy-projects-roadmap",
    title: "HYDROGEN ENERGY PROJECTS: BUILDING A ROADMAP FROM PILOTS TO SCALE",
    excerpt:
      "How to plan integration with renewables, manage risk, and develop execution milestones. A practical roadmap for industrial and utility-scale hydrogen initiatives.",
    date: "2026-06-15",
    tags: ["Hydrogen", "Clean Energy", "Decarbonization"],
    readingTime: "6 min read",
    image: "/hydrogen-blog.png",
    category: "Green Hydrogen"
  }
];
