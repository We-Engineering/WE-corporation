import { useEffect, useRef } from "react";
import { useGlobalCursor } from "@/lib/cursor";

export function Cursor() {
  const { x, y, hovering } = useGlobalCursor();
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let raf = 0;
    const tick = () => {
      pos.current.x += (x - pos.current.x) * 0.18;
      pos.current.y += (y - pos.current.y) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (dot.current) {
        dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [x, y]);

  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  const size =
    hovering === "link" ? 40 : hovering === "button" ? 56 : hovering === "image" ? 72 : 24;

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-gold-polished mix-blend-difference"
      />
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-gold/60 transition-[width,height,background] duration-300"
        style={{
          width: size,
          height: size,
          background:
            hovering === "image" ? "rgba(160,127,58,0.12)" : "transparent",
        }}
      />
    </>
  );
}