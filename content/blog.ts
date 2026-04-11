export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: "solar-epc-india-key-considerations",
    title: "Solar EPC India: key considerations for bankable delivery",
    excerpt:
      "A practical checklist covering design, procurement, QA/QC, commissioning, and O&M readiness for performance.",
    date: "2026-04-01",
    tags: ["Solar EPC India", "Quality", "Commissioning"]
  },
  {
    slug: "bess-solutions-ems-strategy",
    title: "BESS solutions: why EMS strategy decides ROI",
    excerpt:
      "Storage economics depends on dispatch strategy, constraints, and monitoring—here’s how to think about it.",
    date: "2026-03-15",
    tags: ["BESS solutions", "EMS software", "Analytics"]
  },
  {
    slug: "hydrogen-energy-projects-roadmap",
    title: "Hydrogen energy projects: building a roadmap from pilots to scale",
    excerpt:
      "How to plan integration with renewables, manage risk, and develop execution milestones.",
    date: "2026-02-20",
    tags: ["Hydrogen energy projects", "Integration", "Roadmap"]
  }
];

