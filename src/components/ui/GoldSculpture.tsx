import { motion } from "framer-motion";

export function GoldSculpture() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      className="relative aspect-square w-full max-w-[560px]"
    >
      {/* Studio backdrop */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,99,0.18),transparent_60%)] blur-2xl" />

      <svg
        viewBox="0 0 500 500"
        className="relative h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gold-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6F5220" />
            <stop offset="24%" stopColor="#A07F3A" />
            <stop offset="43%" stopColor="#E8CB83" />
            <stop offset="56%" stopColor="#D4AF63" />
            <stop offset="78%" stopColor="#8A682B" />
            <stop offset="100%" stopColor="#A07F3A" />
          </linearGradient>
          <linearGradient id="gold-grad-2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8A682B" />
            <stop offset="50%" stopColor="#D4AF63" />
            <stop offset="100%" stopColor="#6F5220" />
          </linearGradient>
          <radialGradient id="gold-hl" cx="0.3" cy="0.3" r="0.6">
            <stop offset="0%" stopColor="#E8CB83" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#A07F3A" stopOpacity="0" />
          </radialGradient>
          <filter id="gold-shadow">
            <feDropShadow dx="0" dy="20" stdDeviation="20" floodOpacity="0.5" floodColor="#000" />
          </filter>
        </defs>

        {/* Outer hexagon frame */}
        <g filter="url(#gold-shadow)">
          <polygon
            points="250,40 430,145 430,355 250,460 70,355 70,145"
            fill="none"
            stroke="url(#gold-grad)"
            strokeWidth="2"
            opacity="0.55"
          />
        </g>

        {/* Six rays from center */}
        <g opacity="0.85">
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const x = 250 + Math.cos(angle) * 200;
            const y = 250 + Math.sin(angle) * 200;
            return (
              <line
                key={i}
                x1="250"
                y1="250"
                x2={x}
                y2={y}
                stroke="url(#gold-grad-2)"
                strokeWidth="1.5"
                opacity="0.5"
              />
            );
          })}
        </g>

        {/* Central emblem — interlocking geometric form */}
        <g filter="url(#gold-shadow)">
          <polygon
            points="250,140 340,200 340,300 250,360 160,300 160,200"
            fill="url(#gold-grad)"
            opacity="0.95"
          />
          <polygon
            points="250,180 305,215 305,285 250,320 195,285 195,215"
            fill="#0B0B0A"
          />
          <polygon
            points="250,205 285,225 285,275 250,295 215,275 215,225"
            fill="url(#gold-grad-2)"
            opacity="0.9"
          />
        </g>

        {/* Six satellite nodes */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 60 - 90) * (Math.PI / 180);
          const x = 250 + Math.cos(angle) * 200;
          const y = 250 + Math.sin(angle) * 200;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="14" fill="url(#gold-grad)" opacity="0.9" />
              <circle cx={x} cy={y} r="5" fill="#0B0B0A" />
            </g>
          );
        })}

        {/* Highlight */}
        <circle cx="180" cy="170" r="80" fill="url(#gold-hl)" opacity="0.4" />
      </svg>
    </motion.div>
  );
}