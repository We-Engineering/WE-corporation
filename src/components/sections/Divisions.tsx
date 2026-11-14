import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { divisions } from '@/data/divisions';
import { registerGsap, prefersReducedMotion } from '@/lib/animations';

export function Divisions() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);
  const spineRef = useRef<HTMLDivElement>(null);

  /* ── Header intro scroll hooks (matches Capabilities) ── */
  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ['start start', 'end start'],
  });
  const introOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    registerGsap();
    if (!sectionRef.current || !spineRef.current || !rowsRef.current) return;

    if (prefersReducedMotion()) {
      gsap.set(spineRef.current, { scaleY: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: rowsRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>('.timeline-node').forEach((node) => {
        gsap.fromTo(
          node,
          { scale: 0.4, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: { trigger: node, start: 'top 92%', once: true },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="divisions"
      className="relative overflow-hidden border-t border-ivory/5 py-2 md:py-8"
    >
      {/* ── Background image layer ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}divisions-bg.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/0 to-obsidian" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(11,11,10,0.85)_100%)]" />
      </div>

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* ═══ INTRODUCTION-STYLE HEADER ═══ */}
        <div
          ref={introRef}
          className="relative flex min-h-[60vh] items-center justify-center overflow-hidden border-t border-ivory/5 py-12 md:py-20"
        >
          {/* Background visual (Abstract connected pathways) */}
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-40">
            <div className="absolute h-[600px] w-[600px] rounded-full border border-gold/10 blur-[80px]" />
            <svg
              className="absolute h-full w-full max-w-[1200px] opacity-20"
              viewBox="0 0 1000 600"
              fill="none"
            >
              <path
                d="M200,100 Q400,300 500,500 T800,200"
                stroke="url(#gold-grad-div)"
                strokeWidth="1.5"
              />
              <path
                d="M100,400 Q300,500 500,500 T900,100"
                stroke="url(#gold-grad-div)"
                strokeWidth="0.5"
              />
              <path
                d="M500,0 Q500,300 500,600"
                stroke="url(#gold-grad-div)"
                strokeWidth="1"
              />
              <defs>
                <linearGradient
                  id="gold-grad-div"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#A07F3A" stopOpacity="0" />
                  <stop offset="50%" stopColor="#D4AF63" stopOpacity="1" />
                  <stop offset="100%" stopColor="#A07F3A" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <motion.div
            style={{ opacity: introOpacity, y: introY }}
            className="relative z-10 mx-auto max-w-[1400px] px-6 text-center md:px-10"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold/70 md:text-[11px]"
            >
              Our Divisions
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-extralight uppercase leading-[1.05] tracking-[-0.03em] text-ivory"
            >
              {divisions.length} Divisions.<br />
              <span className="gold-text">One Shared Vision.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mx-auto mt-6 max-w-2xl text-[14px] leading-relaxed text-ivory/60 md:text-[16px]"
            >
              Each division brings specialized expertise to a distinct field,
              united by a common commitment to quality, innovation, and
              meaningful results.
            </motion.p>
          </motion.div>
        </div>

        {/* Timeline rows */}
        <div ref={rowsRef} className="relative">
          {/* Spine */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 md:block">
            <div
              ref={spineRef}
              className="h-full w-[1.5px] origin-top bg-[linear-gradient(to_bottom,#E8CB83_0%,#D4AF63_30%,#A07F3A_60%,#8A682B_85%,transparent_100%)] shadow-[0_0_12px_0_rgba(212,175,99,0.45)]"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          <div className="flex flex-col gap-5 md:gap-6">
            {divisions.map((division, index) => {
              const isEven = index % 2 === 0;
              const Icon = division.Icon;

              return (
                <div
                  key={division.id}
                  className="group relative grid grid-cols-1 items-stretch gap-2 md:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] md:gap-0"
                >
                  {/* ─── Content card ─── */}
                  <div
                    className={`
                      relative flex h-full flex-col overflow-hidden
                      border border-ivory/10 bg-obsidian/40
                      p-7 md:p-4 backdrop-blur-sm
                      transition-all duration-500
                      group-hover:border-gold/40 group-hover:bg-obsidian/60
                      group-hover:shadow-[0_8px_40px_-12px_rgba(212,175,99,0.15)]
                      ${isEven ? 'md:order-1 md:mr-6' : 'md:order-3 md:ml-6'}
                      order-1
                    `}
                  >
                    {/* Header row: index + arrow */}
                    <div className="flex items-center justify-between">
                      {/* Title block */}
                      <div className="mt-2">
                        <h3 className="text-[18px] font-light leading-tight tracking-tight text-ivory md:text-[22px]">
                          {division.title}
                        </h3>
                        <p className="mt-2 text-[12px] font-light leading-snug text-gold-polished/90 md:text-[21px]">
                          {division.tagline}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={25}
                        className="text-gold-polished/70 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-polished"
                      />
                    </div>

                    {/* Divider */}
                    <div className="my-2 h-px w-full bg-gradient-to-r from-gold/25 via-gold/10 to-transparent" />

                    {/* Category label */}
                    <p className="font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.18em] text-gold/80 md:text-[13px]">
                      {division.category}
                    </p>

                    {/* Description */}
                    <p className="mt-2 text-[12.5px] leading-[2] text-ivory/60 md:text-[16px]">
                      {division.description}
                    </p>

                    {/* Tags — pushed to bottom */}
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {division.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            border border-ivory/10 px-2 py-1
                            text-[11px] uppercase tracking-[0.1em] text-ivory/45
                            transition-colors duration-500
                            group-hover:border-gold/25 group-hover:text-ivory/70
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Animated bottom underline */}
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold to-transparent transition-all duration-700 group-hover:w-full" />
                  </div>

                  {/* ─── Center timeline node ─── */}
                  <div className="relative hidden items-center justify-center md:flex md:order-2">
                    <div
                      className="
                        timeline-node relative flex h-14 w-14 items-center justify-center rounded-full
                        border border-gold-polished/60
                        bg-[linear-gradient(135deg,#6F5220_0%,#A07F3A_24%,#E8CB83_43%,#D4AF63_56%,#8A682B_78%,#A07F3A_100%)]
                        shadow-[0_0_18px_-2px_rgba(212,175,99,0.6),inset_0_1px_0_rgba(255,255,255,0.15)]
                        transition-all duration-800
                        group-hover:scale-80
                        group-hover:shadow-[0_0_26px_0_rgba(212,175,99,0.9),inset_0_1px_0_rgba(255,255,255,0.25)]
                      "
                    >
                      <Icon
                        size={25}
                        strokeWidth={2}
                        className="text-obsidian"
                      />
                    </div>
                  </div>

                  {/* ─── Image card ─── */}
                  <div
                    className={`
                      relative overflow-hidden
                      transition-all duration-500
                      ${isEven ? 'md:order-3 md:ml-6' : 'md:order-1 md:mr-6'}
                      order-2
                    `}
                  >
                    <div className="relative aspect-[16/9] h-full w-full overflow-hidden">
                      <img
                        src={`${import.meta.env.BASE_URL}${division.image}`}
                        alt={division.title}
                        loading="lazy"
                        className="h-full w-full object-cover grayscale-[40%] contrast-[1.05] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      />
                      {/* Dark scrim for consistency */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-obsidian/50 via-transparent to-obsidian/70" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}