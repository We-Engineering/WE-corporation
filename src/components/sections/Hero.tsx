import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { prefersReducedMotion } from "@/lib/animations";
import { motion } from "framer-motion";
export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    if (prefersReducedMotion()) {
      root.current
        .querySelectorAll(
          ".hero-line, .hero-item, .hero-eyebrow, .hero-sub, .hero-ctas, .hero-label"
        )
        .forEach((el) => {
          const h = el as HTMLElement;
          h.style.opacity = "1";
          h.style.transform = "none";
        });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        delay: 0.2,
      });

      tl.fromTo(
        ".hero-bg-image",
        { opacity: 0 },
        { opacity: 1, duration: 1.4 },
        0
      )
        .fromTo(
          ".hero-eyebrow",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.9 },
          0.3
        )
        .fromTo(
          ".hero-line span",
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.08 },
          "-=0.5"
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.7"
        )
        .fromTo(
          ".hero-ctas",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.6"
        )
        .fromTo(
          ".hero-label",
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          "-=0.5"
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20 md:pt-20 md:pb-2"
    >
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  <div
    className="hero-bg-image absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.jpg)` }}
  />

  {/* Gold ambient glow — keeps brand warmth without touching image clarity */}
  <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(160,127,58,0.10),transparent_65%)] blur-2xl mix-blend-screen" />

  {/* Engineering grid overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(160,127,58,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(160,127,58,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_78%)]" />

  {/* Bottom fade into next section */}
  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-obsidian to-transparent" />
</div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="hero-eyebrow luxury-eyebrow">
            · Technology · Engineering · Workforce
          </p>

          <h1 className="mt-8 font-light leading-[0.98] tracking-tight text-ivory">
            <span className="hero-line block overflow-hidden pb-2 text-[clamp(2.75rem,7.5vw,6.5rem)]">
              <span className="block">One Vision.</span>
            </span>
            <span className="hero-line block overflow-hidden pb-2 text-[clamp(2.75rem,7.5vw,4.5rem)]">
              <span className="block">
                <span className="gold-text">Unified Expertise.</span>
              </span>
            </span>
          </h1>

          <p
            className="hero-sub mt-8 max-w-lg text-base leading-relaxed text-ivory/70 md:text-lg"
            style={{ opacity: 0 }}
          >
            Connecting engineering, technology, quality, and people to deliver
            practical solutions for business.
          </p>

          <div
            className="hero-ctas mt-10 flex flex-wrap items-center gap-4"
            style={{ opacity: 0 }}
          >
            <Button href="#divisions">Explore Our Divisions</Button>
            <Button href="#contact" variant="secondary">
              Discuss a Project
            </Button>
          </div>
        </div>
      </div>
        {/* Scroll indicator */}
        <motion.a
        href="#about"
        aria-label="Scroll to next section"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 group"
        >
        <span className="relative flex h-10 w-6 items-start justify-center rounded-full border border-ivory/25 transition-colors duration-500 group-hover:border-gold/60">
            <motion.span
            className="mt-2 h-1.5 w-1 rounded-full bg-gold-polished"
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
        </span>
        </motion.a>
    </section>
  );
}