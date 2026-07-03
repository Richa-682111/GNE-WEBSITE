"use client";

import { useState, useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
interface Step {
  yearLabel: string;
  fy: string;
  hex: string;
  glow: string;
  bullets: string[];
  keyInitiatives?: string[];
}

const STEPS: Step[] = [
  {
    yearLabel: "YEAR 1",
    fy: "FY2025-26",
    hex: "#f97316",
    glow: "rgba(249,115,22,0.45)",
    bullets: [
      "Solar EPC > 100 MW",
      "Office established in Pune",
      "Strategic entry into Green Hydrogen Business",
    ],
  },
  {
    yearLabel: "YEAR 2",
    fy: "FY2026-27",
    hex: "#ca8a04",
    glow: "rgba(202,138,4,0.45)",
    bullets: [
      "Solar EPC > 450 MW",
      "Develop 100 MW IPP Solar + BESS",
      "GH2 Electrolyser Business Growth",
      "Commission BESS Manufacturing factory",
      "Onboard strategic investors",
      "Develop indigenous EMS with IIT Delhi",
    ],
  },
  {
    yearLabel: "YEAR 3",
    fy: "FY2027-28",
    hex: "#16a34a",
    glow: "rgba(22,163,74,0.45)",
    bullets: [
      "Develop off-grid hybrid projects (500 MW PV + 2GWh BESS)",
      "Expand IPP portfolio to 100 MW Solar",
      "BESS Expansion > 2 GWh globally",
    ],
    keyInitiatives: [
      "Establish position as Green Hydrogen developer",
      "Advance R&D and tech innovation",
    ],
  },
  {
    yearLabel: "YEAR 4",
    fy: "FY2028-29",
    hex: "#2563eb",
    glow: "rgba(37,99,235,0.45)",
    bullets: [
      "Drive deep technological innovation",
      "Accelerate global market growth",
      "Initiate preparation for IPO",
    ],
  },
  {
    yearLabel: "YEAR 5",
    fy: "FY2029-30",
    hex: "#7c3aed",
    glow: "rgba(124,58,237,0.45)",
    bullets: [
      "Upscaling to Public Limited Company",
      "Establish as top-tier global renewable EPC",
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   SVG CONFIG
   ViewBox: 0 0 1000 490, SVG container height: 420px
   Scale: 420/490 ≈ 0.857 px per SVG unit (height)
           ~900/1000 = 0.9 px per SVG unit (width)

   PATH starts at y=432 SVG units → 432 × 0.857 ≈ 370px from top
   Cards: grid marginTop=-270px → grid top at 420-270=150px
     Year 1 top = 150 + 220 = 370px ✓  ← path start matches Year 1 card top
     Year 5 top = 150 + 0   = 150px
───────────────────────────────────────────────────────────── */
const PATH =
  "M 18 432 L 215 268 L 302 332 L 452 136 L 538 206 L 650 160 L 734 218 L 946 16";

const PATH_POINTS: [number, number][] = [
  [18,  432],
  [215, 268],
  [302, 332],
  [452, 136],
  [538, 206],
  [650, 160],
  [734, 218],
  [946,  16],
];

const TRAVEL_MS  = 20000; // slow — 20 s per loop
const BOUNCE_AMP = 14;    // SVG units
const BOUNCE_HZ  = 2.8;

/* ─────────────────────────────────────────────────────────────
   PATH MATHS — cumulative arc length interpolation
───────────────────────────────────────────────────────────── */
function buildSegments(pts: [number, number][]) {
  const segs: {
    x0: number; y0: number; x1: number; y1: number; len: number; cumLen: number;
  }[] = [];
  let cum = 0;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const len = Math.hypot(x1 - x0, y1 - y0);
    cum += len;
    segs.push({ x0, y0, x1, y1, len, cumLen: cum });
  }
  return { segs, totalLen: cum };
}

const { segs: SEGS, totalLen: TOTAL_LEN } = buildSegments(PATH_POINTS);

function getPos(frac: number): { x: number; y: number } {
  const target = frac * TOTAL_LEN;
  let prev = 0;
  for (const seg of SEGS) {
    if (target <= seg.cumLen) {
      const t = (target - prev) / seg.len;
      return {
        x: seg.x0 + t * (seg.x1 - seg.x0),
        y: seg.y0 + t * (seg.y1 - seg.y0),
      };
    }
    prev = seg.cumLen;
  }
  const last = PATH_POINTS[PATH_POINTS.length - 1];
  return { x: last[0], y: last[1] };
}

/* ─────────────────────────────────────────────────────────────
   SOLAR PANEL  — at the arrow tip, 2× larger than before
───────────────────────────────────────────────────────────── */
function SolarPanel({ x, y }: { x: number; y: number }) {
  const w = 110, h = 76;
  const px = x - w / 2 + 10;
  const py = y - h - 22;

  return (
    <g>
      {/* Frame */}
      <rect x={px} y={py} width={w} height={h} rx={4} fill="#1e3a5f" />
      {/* Vertical grid lines */}
      {[1, 2].map((i) => (
        <line
          key={`v${i}`}
          x1={px + (w / 3) * i} y1={py}
          x2={px + (w / 3) * i} y2={py + h}
          stroke="#4a90d9" strokeWidth="1.2"
        />
      ))}
      {/* Horizontal grid line */}
      <line x1={px} y1={py + h / 2} x2={px + w} y2={py + h / 2} stroke="#4a90d9" strokeWidth="1.2" />
      {/* Sheen */}
      <rect x={px} y={py} width={w} height={h} rx={4} fill="url(#panelSheen)" opacity="0.35" />
      {/* Pole */}
      <line x1={px + w / 2} y1={py + h} x2={px + w / 2} y2={py + h + 22} stroke="#888" strokeWidth="2.5" />
      {/* Base shadow */}
      <ellipse cx={px + w / 2} cy={py + h + 22} rx={14} ry={4} fill="#22c55e" opacity="0.22" />
      {/* Label */}
      <text
        x={px + w / 2} y={py - 7}
        textAnchor="middle"
        fontSize="11"
        fill="#7c3aed"
        fontWeight="800"
        fontFamily="Sora, sans-serif"
      >
        SOLAR
      </text>
      {/* Glow ring */}
      <rect
        x={px - 3} y={py - 3}
        width={w + 6} height={h + 6}
        rx={6}
        fill="none"
        stroke="#7c3aed"
        strokeWidth="1.5"
        opacity="0.35"
      />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
   ANIMATED LOTTIE SUN
   S = 78 SVG units ≈ ~70px on screen (≈ h2 size)
   Travels along PATH, bounces, fades out at solar panel, loops.
───────────────────────────────────────────────────────────── */
const SUN_S = 78; // SVG units — roughly h2 heading height on screen

function AnimatedSun() {
  const [pos, setPos] = useState<{ x: number; y: number; opacity: number }>({
    x: PATH_POINTS[0][0],
    y: PATH_POINTS[0][1],
    opacity: 1,
  });

  const startRef = useRef<number | null>(null);
  const rafRef   = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    function tick(ts: number) {
      if (cancelled) return;
      if (startRef.current === null) startRef.current = ts;

      const elapsed = ts - startRef.current;
      const frac = Math.min(elapsed / TRAVEL_MS, 1);

      const { x, y } = getPos(frac);
      const bounce   = Math.sin(elapsed * 0.001 * Math.PI * 2 * BOUNCE_HZ) * BOUNCE_AMP;
      // Fade out in the last 10% of the journey
      const opacity  = frac > 0.90 ? Math.max(0, 1 - (frac - 0.90) / 0.10) : 1;

      setPos({ x, y: y + bounce, opacity });

      if (frac < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // 1 s pause, then restart
        setTimeout(() => {
          if (!cancelled) {
            startRef.current = null;
            rafRef.current = requestAnimationFrame(tick);
          }
        }, 1000);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <foreignObject
      x={pos.x - SUN_S / 2}
      y={pos.y - SUN_S / 2}
      width={SUN_S}
      height={SUN_S}
      style={{ opacity: pos.opacity, pointerEvents: "none", overflow: "visible" }}
    >
      <DotLottieReact
        src="/sunny-sun.lottie"
        loop
        autoplay
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </foreignObject>
  );
}

/* ─────────────────────────────────────────────────────────────
   JOURNEY CARD
───────────────────────────────────────────────────────────── */
function JourneyCard({ step }: { step: Step }) {
  const [hovered, setHovered] = useState(false);
  const visible    = hovered ? step.bullets : step.bullets.slice(0, 3);
  const extraCount = Math.max(0, step.bullets.length - 3) + (step.keyInitiatives?.length ?? 0);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered((v) => !v)}
      style={{
        borderRadius: 16,
        border: `1.5px solid ${hovered ? step.hex : "#e5e7eb"}`,
        background: "white",
        padding: "18px 16px",
        overflow: "hidden",
        maxHeight: hovered ? 620 : 224,
        transition: [
          "max-height 0.52s cubic-bezier(0.4,0,0.2,1)",
          "box-shadow 0.3s ease",
          "border-color 0.3s ease",
        ].join(", "),
        boxShadow: hovered
          ? `0 0 0 4px ${step.hex}22, 0 10px 40px ${step.glow}, 0 2px 8px rgba(0,0,0,0.06)`
          : "0 1px 4px rgba(0,0,0,0.07)",
        cursor: "default",
      }}
    >
      {/* Badge */}
      <span
        style={{
          display: "inline-block",
          fontSize: 10, fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.09em",
          padding: "3px 11px", borderRadius: 999,
          background: step.hex, color: "#fff", marginBottom: 9,
        }}
      >
        {step.yearLabel}
      </span>

      {/* FY heading */}
      <div
        style={{
          fontSize: 17, fontWeight: 800, color: "#111827",
          marginBottom: 13, lineHeight: 1.2, fontFamily: "'Sora', sans-serif",
        }}
      >
        {step.fy}
      </div>

      {/* Bullets */}
      <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
        {visible.map((b, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, lineHeight: 1.6, color: "#6b7280" }}>
            <span style={{ marginTop: 5, width: 6, height: 6, borderRadius: "50%", flexShrink: 0, background: step.hex }} />
            {b}
          </li>
        ))}
      </ul>

      {/* +N more */}
      {!hovered && extraCount > 0 && (
        <div style={{ marginTop: 11, fontSize: 10, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.07em" }}>
          +{extraCount} more
        </div>
      )}

      {/* Key Initiatives (expanded) */}
      {hovered && !!step.keyInitiatives?.length && (
        <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid #f3f4f6" }}>
          <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em", color: "#9ca3af", marginBottom: 8 }}>
            Key Strategic Initiatives
          </div>
          <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
            {step.keyInitiatives.map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, lineHeight: 1.6, color: "#9ca3af" }}>
                <span style={{ marginTop: 5, width: 4, height: 4, borderRadius: "50%", flexShrink: 0, background: "#d1d5db" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────── */
export default function TimelineJourney() {
  // Ascending staircase: Year 1 lowest (most margin), Year 5 highest (0)
  // With marginTop:-270px on grid and SVG height:420px:
  //   grid top = 420-270 = 150px from section top
  //   Year 1 card top = 150+220 = 370px  ← aligns with PATH start (y=432 → ~370px)
  //   Year 5 card top = 150+0   = 150px
  const cardOffsets = ["220px", "150px", "80px", "30px", "0px"];
  const panelPt     = PATH_POINTS[PATH_POINTS.length - 1];

  return (
    <div className="w-full overflow-x-auto select-none pb-10">
      <div className="relative min-w-[900px] max-w-6xl mx-auto px-4">

        {/* ── Arrow SVG ──
            height 420px + overflow:visible so the solar panel can peek above
        */}
        <div style={{ width: "100%", height: 420, overflow: "visible" }}>
          <svg
            viewBox="0 0 1000 490"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            <defs>
              {/* Gradient matching the 5-year color ramp */}
              <linearGradient id="tzGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#f97316" />
                <stop offset="25%"  stopColor="#eab308" />
                <stop offset="50%"  stopColor="#22c55e" />
                <stop offset="75%"  stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>

              {/* Arrowhead — doubled size to match doubled stroke */}
              <marker
                id="tzArrow"
                markerWidth="44"
                markerHeight="34"
                refX="42"
                refY="17"
                orient="auto"
                markerUnits="userSpaceOnUse"
              >
                <path d="M 0 0 L 44 17 L 0 34 Z" fill="#7c3aed" />
              </marker>

              {/* Solar panel sheen */}
              <linearGradient id="panelSheen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0"   />
              </linearGradient>
            </defs>

            {/* ── Gradient zigzag line (doubled strokeWidth) ── */}
            <path
              d={PATH}
              fill="none"
              stroke="url(#tzGrad)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              markerEnd="url(#tzArrow)"
            />

            {/* ── Solar panel at the arrowhead tip ── */}
            <SolarPanel x={panelPt[0]} y={panelPt[1]} />

            {/* ── Lottie Sun travelling the path ── */}
            <AnimatedSun />
          </svg>
        </div>

        {/* ── Ascending staircase cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 14,
            marginTop: "-270px",   // pulls cards up so Year 1 aligns with path start
            position: "relative",
            zIndex: 10,
          }}
        >
          {STEPS.map((step, idx) => (
            <div key={step.fy} style={{ marginTop: cardOffsets[idx] }}>
              <JourneyCard step={step} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}