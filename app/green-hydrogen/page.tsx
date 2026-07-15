import type { Metadata } from "next";
import { PremiumServiceHero } from "@/components/PremiumServiceHero";
import { EditorialIntro } from "@/components/EditorialIntro";
import { BentoFeatureGrid, FeatureCard } from "@/components/BentoFeatureGrid";
import { InteractiveHorizontalFlow, FlowStep } from "@/components/InteractiveHorizontalFlow";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Factory, Leaf, ShieldCheck, Zap, TrendingUp, Shield } from "lucide-react";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Green Hydrogen | GNE Infra",
  description:
    "Green hydrogen solutions for industrial decarbonization: electrolyzer integration, project development, and sustainable H2 infrastructure.",
};

const features: FeatureCard[] = [
  {
    title: "Integrated Capability",
    description: "Combined Developer and EPC capability ensuring seamless green hydrogen generation and deployment.",
    icon: Factory,
    image: "/service-green-hydrogen.jpg",
  },
  {
    title: "Renewable Integration",
    description: "100% renewable-powered hydrogen production coupled with cutting-edge electrolyzer technology.",
    icon: Leaf,
    image: "/hero-solar-farm.png",
  },
  {
    title: "Bankable Projects",
    description: "Structured feasibility, offtake alignment, and stringent regulatory compliance for investor-ready assets.",
    icon: ShieldCheck,
    image: "/collaboration.jpg",
  },
  {
    title: "Target Sectors",
    description: "Focused on decarbonizing fertilizers, refining, steel, heavy industry, and future mobility applications.",
    icon: Zap,
    image: "/service-manufacturing.jpg",
  },
  {
    title: "Annuity Cashflows",
    description: "Emphasis on securing long-term offtake partnerships generating consistent, reliable revenue streams.",
    icon: TrendingUp,
    image: "/value.jpg",
  },
  {
    title: "Scalable Platform",
    description: "Scalable execution methodology adapting from 5 MW pilot plants up to utility-scale 100+MW deployments.",
    icon: Shield,
    image: "/hero-hybrid-2.webp",
  },
];

const processSteps: FlowStep[] = [
  { title: "Renewable Energy Supply Integration" },
  { title: "Electrolysis & Production" },
  { title: "Storage & Distribution Infrastructure" },
  { title: "Industrial Offtake & End Use" },
];

export default function GreenHydrogenPage() {
  return (
    <div className="bg-transparent">
      <PremiumServiceHero
        title="Green Hydrogen"
        subtitle="Developing bankable green hydrogen projects with electrolyzer integration, renewable coupling, and end-to-end execution support for industrial decarbonization."
        image="/green hydrogen.png"
      />

      <EditorialIntro 
        title="Building the Hydrogen Economy" 
        content="GNE Infra is actively expanding into the green hydrogen sector with a dedicated focus on renewable-powered hydrogen production, advanced electrolyzer deployment, robust storage infrastructure, and strategic industrial offtake partnerships. Our approach masterfully combines existing renewable energy assets with next-generation hydrogen technologies to directly support India's National Green Hydrogen Mission while delivering highly scalable, commercially viable projects." 
      />

      {/* Featured Green Hydrogen Video */}
      <ScrollReveal>
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.12)] bg-slate-950">
              <video
                src="/GreenHydrogen.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-auto object-cover max-h-[700px] aspect-video"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <BentoFeatureGrid title="Our Hydrogen Strategy" features={features} />

      <InteractiveHorizontalFlow title="Value Chain Integration" steps={processSteps} />
    </div>
  );
}