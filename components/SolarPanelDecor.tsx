"use client";

export function SolarPanelDecor() {
  return (
    <>
      {/* ── TOP-LEFT solar panel decoration 
          (z-30 puts it behind the z-40 navbar; top-20 / top-24 pushes it below the logo) ── */}
      <div
        className="pointer-events-none fixed top-20 sm:top-24 left-0 z-30 transition-opacity duration-700"
        style={{ width: 380, height: 350 }}
      >
        <svg
          viewBox="0 0 380 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xl"
          style={{ opacity: 0.85 }}
        >
          <defs>
            {/* Drop shadows */}
            <filter id="panel-shadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.3" />
            </filter>
            <filter id="leaf-shadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#0a1f14" floodOpacity="0.35" />
            </filter>

            {/* Botanical Leaf Gradients */}
            <linearGradient id="leafDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#133321" />
              <stop offset="100%" stopColor="#0b1f13" />
            </linearGradient>
            <linearGradient id="leafMid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2d6a4f" />
              <stop offset="100%" stopColor="#1b4332" />
            </linearGradient>
            <linearGradient id="leafBright" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#52b788" />
              <stop offset="100%" stopColor="#2d6a4f" />
            </linearGradient>
            <linearGradient id="leafGoldGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#74c69d" />
              <stop offset="100%" stopColor="#40916c" />
            </linearGradient>

            {/* Photovoltaic Monocrystalline Silicon Surface */}
            <linearGradient id="pvSilicon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0a192f" />
              <stop offset="50%" stopColor="#0f2140" />
              <stop offset="100%" stopColor="#0a192f" />
            </linearGradient>

            {/* Silver Anodized Aluminum Frame Gradient */}
            <linearGradient id="anodizedSilver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="30%" stopColor="#cbd5e1" />
              <stop offset="70%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>

            {/* Glass Sunlight Glare */}
            <linearGradient id="pvGlare" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="25%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="25.1%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* ── BACKGROUND FOLIAGE (Shadow Layer) ── */}
          <g filter="url(#leaf-shadow)" opacity="0.9">
            <path d="M -10 130 C 20 120, 60 140, 90 180 C 70 200, 30 210, -20 190 Z" fill="url(#leafDark)" />
            <path d="M 30 -20 C 50 20, 80 50, 130 60 C 110 80, 60 80, 20 40 Z" fill="url(#leafDark)" />
            <path d="M 60 60 C 100 50, 140 80, 160 130 C 130 150, 90 140, 60 100 Z" fill="url(#leafMid)" />
          </g>

          {/* ── INDUSTRIAL SOLAR PV MODULE (Isometric Tilt, Sharp Industrial Frame) ── */}
          <g transform="translate(85, 20) rotate(-14) skewX(-12)" filter="url(#panel-shadow)">
            {/* Aluminum Mounting Rails underneath */}
            <rect x="-10" y="35" width="240" height="8" rx="1" fill="#475569" />
            <rect x="-10" y="115" width="240" height="8" rx="1" fill="#475569" />

            {/* Outer Anodized Aluminum Frame (Sharp corners rx="1" — NO rounded TV bezels!) */}
            <rect x="0" y="0" width="220" height="155" rx="1.5" fill="url(#anodizedSilver)" stroke="#475569" strokeWidth="1" />

            {/* Inner Silicon Wafer Bed */}
            <rect x="4" y="4" width="212" height="147" rx="0.5" fill="url(#pvSilicon)" />

            {/* PV Silicon Wafer Grid (6 columns x 8 rows of solar cells) */}
            <g className="pv-grid">
              {/* Horizontal wafer grid separator lines */}
              {[18.3, 36.6, 55, 73.3, 91.6, 110, 128.3].map((hy, idx) => (
                <line key={idx} x1="4" y1={4 + hy} x2="216" y2={4 + hy} stroke="#1e293b" strokeWidth="1.2" />
              ))}
              
              {/* Vertical wafer column separators */}
              {[35.3, 70.6, 106, 141.3, 176.6].map((vx, idx) => (
                <line key={idx} x1={4 + vx} y1="4" x2={4 + vx} y2="151" stroke="#1e293b" strokeWidth="1.2" />
              ))}

              {/* ── PROMINENT SILVER BUSBARS & FINGERS (The unmistakable solar panel signature) ── */}
              {[0, 1, 2, 3, 4, 5].map((col) => {
                const colX = 4 + col * 35.3;
                return (
                  <g key={col}>
                    {/* 3 Bright Silver Busbars per column */}
                    <line x1={colX + 8.8} y1="4" x2={colX + 8.8} y2="151" stroke="#cbd5e1" strokeWidth="1.2" opacity="0.85" />
                    <line x1={colX + 17.6} y1="4" x2={colX + 17.6} y2="151" stroke="#cbd5e1" strokeWidth="1.2" opacity="0.85" />
                    <line x1={colX + 26.4} y1="4" x2={colX + 26.4} y2="151" stroke="#cbd5e1" strokeWidth="1.2" opacity="0.85" />

                    {/* Fine horizontal conductive fingers */}
                    {[6, 12, 24, 30, 42, 48, 60, 66, 78, 84, 96, 102, 114, 120, 132, 138].map((fy, fIdx) => (
                      <line
                        key={fIdx}
                        x1={colX + 1}
                        y1={4 + fy}
                        x2={colX + 34.3}
                        y2={4 + fy}
                        stroke="#94a3b8"
                        strokeWidth="0.4"
                        opacity="0.45"
                      />
                    ))}
                  </g>
                );
              })}
            </g>

            {/* Glass Glare Reflection Overlay */}
            <rect x="4" y="4" width="212" height="147" fill="url(#pvGlare)" pointerEvents="none" />

            {/* Subtle animated light pulse along busbars */}
            <rect x="4" y="4" width="212" height="147" fill="#38bdf8" opacity="0.04">
              <animate attributeName="opacity" values="0.02;0.08;0.02" dur="3.5s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* ── FOREGROUND BOTANICAL FOLIAGE (Overlapping Panel Corner) ── */}
          <g filter="url(#leaf-shadow)">
            <path d="M 35 10 C 75 15, 115 40, 130 85 C 110 95, 80 85, 55 60 C 45 70, 30 65, 25 50 Z" fill="url(#leafBright)" />
            <path d="M 40 18 Q 80 45 120 80" stroke="#1b4332" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            
            <path d="M -5 85 C 35 90, 80 125, 95 175 C 70 190, 30 175, 5 135 Z" fill="url(#leafGoldGreen)" />
            <path d="M 5 95 Q 50 130 88 170" stroke="#1b4332" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

            <path d="M 115 150 C 145 160, 175 190, 185 230 C 165 240, 135 220, 115 180 Z" fill="url(#leafMid)" />
            <path d="M 120 158 Q 150 185 177 225" stroke="#0b1f13" strokeWidth="1.2" opacity="0.5" />
          </g>
        </svg>
      </div>

      {/* ── BOTTOM-RIGHT solar panel decoration 
          (z-30 ensures it sits cleanly behind modals and sticky headers) ── */}
      <div
        className="pointer-events-none fixed bottom-0 right-0 z-30 transition-opacity duration-700"
        style={{ width: 380, height: 350 }}
      >
        <svg
          viewBox="0 0 380 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xl"
          style={{ opacity: 0.85, transform: "scaleX(-1) scaleY(-1)" }}
        >
          {/* Background shadow foliage */}
          <g filter="url(#leaf-shadow)" opacity="0.9">
            <path d="M -10 130 C 20 120, 60 140, 90 180 C 70 200, 30 210, -20 190 Z" fill="url(#leafDark)" />
            <path d="M 30 -20 C 50 20, 80 50, 130 60 C 110 80, 60 80, 20 40 Z" fill="url(#leafDark)" />
            <path d="M 60 60 C 100 50, 140 80, 160 130 C 130 150, 90 140, 60 100 Z" fill="url(#leafMid)" />
          </g>

          {/* Industrial Solar PV Module */}
          <g transform="translate(85, 20) rotate(-14) skewX(-12)" filter="url(#panel-shadow)">
            <rect x="-10" y="35" width="240" height="8" rx="1" fill="#475569" />
            <rect x="-10" y="115" width="240" height="8" rx="1" fill="#475569" />
            <rect x="0" y="0" width="220" height="155" rx="1.5" fill="url(#anodizedSilver)" stroke="#475569" strokeWidth="1" />
            <rect x="4" y="4" width="212" height="147" rx="0.5" fill="url(#pvSilicon)" />

            <g className="pv-grid">
              {[18.3, 36.6, 55, 73.3, 91.6, 110, 128.3].map((hy, idx) => (
                <line key={idx} x1="4" y1={4 + hy} x2="216" y2={4 + hy} stroke="#1e293b" strokeWidth="1.2" />
              ))}
              {[35.3, 70.6, 106, 141.3, 176.6].map((vx, idx) => (
                <line key={idx} x1={4 + vx} y1="4" x2={4 + vx} y2="151" stroke="#1e293b" strokeWidth="1.2" />
              ))}
              {[0, 1, 2, 3, 4, 5].map((col) => {
                const colX = 4 + col * 35.3;
                return (
                  <g key={col}>
                    <line x1={colX + 8.8} y1="4" x2={colX + 8.8} y2="151" stroke="#cbd5e1" strokeWidth="1.2" opacity="0.85" />
                    <line x1={colX + 17.6} y1="4" x2={colX + 17.6} y2="151" stroke="#cbd5e1" strokeWidth="1.2" opacity="0.85" />
                    <line x1={colX + 26.4} y1="4" x2={colX + 26.4} y2="151" stroke="#cbd5e1" strokeWidth="1.2" opacity="0.85" />
                    {[6, 12, 24, 30, 42, 48, 60, 66, 78, 84, 96, 102, 114, 120, 132, 138].map((fy, fIdx) => (
                      <line
                        key={fIdx}
                        x1={colX + 1}
                        y1={4 + fy}
                        x2={colX + 34.3}
                        y2={4 + fy}
                        stroke="#94a3b8"
                        strokeWidth="0.4"
                        opacity="0.45"
                      />
                    ))}
                  </g>
                );
              })}
            </g>

            <rect x="4" y="4" width="212" height="147" fill="url(#pvGlare)" pointerEvents="none" />
            <rect x="4" y="4" width="212" height="147" fill="#34d399" opacity="0.04">
              <animate attributeName="opacity" values="0.02;0.08;0.02" dur="3.5s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* Foreground botanical foliage */}
          <g filter="url(#leaf-shadow)">
            <path d="M 35 10 C 75 15, 115 40, 130 85 C 110 95, 80 85, 55 60 C 45 70, 30 65, 25 50 Z" fill="url(#leafBright)" />
            <path d="M 40 18 Q 80 45 120 80" stroke="#1b4332" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <path d="M -5 85 C 35 90, 80 125, 95 175 C 70 190, 30 175, 5 135 Z" fill="url(#leafGoldGreen)" />
            <path d="M 5 95 Q 50 130 88 170" stroke="#1b4332" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <path d="M 115 150 C 145 160, 175 190, 185 230 C 165 240, 135 220, 115 180 Z" fill="url(#leafMid)" />
            <path d="M 120 158 Q 150 185 177 225" stroke="#0b1f13" strokeWidth="1.2" opacity="0.5" />
          </g>
        </svg>
      </div>
    </>
  );
}
