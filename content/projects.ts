export type Project = {
  id: string;
  title: string;
  type: "Utility-scale" | "Rooftop" | "BESS" | "Hybrid";
  location: string;
  capacity: string;
  status: "Commissioned" | "Under construction" | "Design";
  year: number;
  lat?: number;
  lng?: number;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Solar EPC – Utility Scale",
    type: "Utility-scale",
    location: "India",
    capacity: "100 MWp",
    status: "Commissioned",
    year: 2024,
    lat: 22.9734,
    lng: 78.6569,
    highlights: ["Commissioning-ready documentation", "Yield-optimized design", "HSE-led execution"]
  },
  {
    id: "p2",
    title: "Industrial Rooftop Portfolio",
    type: "Rooftop",
    location: "India",
    capacity: "15 MWp",
    status: "Commissioned",
    year: 2023,
    highlights: ["Structural & safety compliance", "Net-metering alignment", "Rapid deployment"]
  },
  {
    id: "p3",
    title: "BESS + EMS Deployment",
    type: "BESS",
    location: "India",
    capacity: "50 MWh",
    status: "Under construction",
    year: 2025,
    highlights: ["Dispatch optimization", "Degradation-aware operations", "KPI dashboards"]
  }
];

