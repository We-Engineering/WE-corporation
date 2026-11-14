import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  capabilityAreas,
  integrationPairs,
  processSteps,
  expertiseThemes,
} from '@/data/capabilities';
import { scrollTo } from '@/hooks/useSmoothScroll';

const PROJECTS = [
  {
    id: '01',
    title: 'Industrial Substation Upgrade',
    client: 'Tianma Microelectronics',
    category: 'Engineering & Infrastructure',
    summary:
      'Electrical engineering study, network redesign, and field coordination for a live industrial environment.',
    tags: ['Electrical Design', 'Networks', 'Commissioning'],
    image: 'projects/substation.jpg',
  },
  {
    id: '02',
    title: 'Automotive Display Quality Program',
    client: 'Tier-1 Supplier',
    category: 'Quality & Operations',
    summary:
      'On-site inspection, sorting, containment, and process follow-up across an active production line.',
    tags: ['Inspection', 'Containment', 'Field Engineering'],
    image: 'projects/quality.jpg',
  },
  {
    id: '03',
    title: 'Automation & Reporting Platform',
    client: 'Industrial Group',
    category: 'Digital & Technology',
    summary:
      'Custom software and workflow automation connecting operational data across multiple production sites.',
    tags: ['Software', 'Automation', 'Data'],
    image: 'projects/automation.jpg',
  },
  {
    id: '04',
    title: 'Brand Repositioning Campaign',
    client: 'Regional Manufacturer',
    category: 'Marketing & Creative',
    summary:
      'Identity refresh, digital campaign, and content system to reposition the brand for new markets.',
    tags: ['Branding', 'Campaign', 'Social Media'],
    image: 'projects/branding.jpg',
  },
];

export function Capabilities() {
  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ['start start', 'end start'],
  });

  const introOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  /* ── Carousel state + refs ── */
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  const scrollCarousel = (direction: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    const gap = 24;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    });
  };

  return (
    <section id="capabilities" className="relative bg-obsidian overflow-hidden">
      {/* ════════════════════════════════════════════════════════════
          SUBSECTION 01 — INTRODUCTION
      ════════════════════════════════════════════════════════════ */}
      <div
        ref={introRef}
        className="relative flex min-h-[60vh] items-center justify-center overflow-hidden border-t border-ivory/5 py-2 md:py-6"
      >
        {/* Background visual (Abstract connected pathways) */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-40">
          <div className="absolute h-[600px] w-[600px] rounded-full border border-gold/10 blur-[80px]" />
          <svg className="absolute h-full w-full max-w-[1200px] opacity-20" viewBox="0 0 1000 600" fill="none">
            <path d="M200,100 Q400,300 500,500 T800,200" stroke="url(#gold-grad)" strokeWidth="1.5" />
            <path d="M100,400 Q300,500 500,500 T900,100" stroke="url(#gold-grad)" strokeWidth="0.5" />
            <path d="M500,0 Q500,300 500,600" stroke="url(#gold-grad)" strokeWidth="1" />
            <defs>
              <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A07F3A" stopOpacity="0" />
                <stop offset="50%" stopColor="#D4AF63" stopOpacity="1" />
                <stop offset="100%" stopColor="#A07F3A" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold/70 md:text-[11px]"
          >
            Our Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-extralight uppercase leading-[1.05] tracking-[-0.03em] text-ivory"
          >
            Different Expertise.<br />
            <span className="gold-text">Connected Solutions.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-[14px] leading-relaxed text-ivory/60 md:text-[16px]"
          >
            Complex challenges rarely fit within a single discipline. We bring together engineering, industrial operations, technology, and creative expertise to develop practical solutions around real business needs.
          </motion.p>
        </motion.div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          SUBSECTION 02 — INTEGRATED CAPABILITIES
      ════════════════════════════════════════════════════════════ */}
      <div className="relative mx-auto max-w-[1400px] px-6 py-2 md:px-10 md:py-6">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <h2 className="mt-2 text-[clamp(2rem,4vw,3rem)] font-extralight uppercase leading-[1.1] text-ivory">
              One Vision.<br />
              <span className="gold-text">Multiple Disciplines.</span>
            </h2>
            <p className="mt-6 text-[17px] leading-[1.7] text-ivory/60 max-w-md">
              Some challenges require specialized expertise. Others benefit from bringing several disciplines together. Our multidisciplinary structure allows us to explore the right combination of capabilities around each project's requirements.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            {integrationPairs.map((pair, i) => {
              const Icon = pair.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative flex overflow-hidden border border-ivory/10 bg-obsidian transition-all duration-500 hover:border-gold/30"
                >
                  <div className="relative w-[3px] shrink-0 bg-gradient-to-b from-gold/40 via-gold to-gold/40">
                    <div className="absolute inset-0 bg-gold/0 transition-all duration-500 group-hover:bg-gold/30 group-hover:shadow-[0_0_20px_2px_rgba(212,175,99,0.4)]" />
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/20 text-gold transition-all duration-500 group-hover:border-gold/60 group-hover:bg-gold/5">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-[17px] font-medium tracking-wide text-ivory transition-colors duration-500 group-hover:text-gold-polished">
                        {pair.title}
                      </h3>
                    </div>
                    <p className="text-[14px] leading-[1.7] text-ivory/55">
                      {pair.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          SUBSECTION 03 — HOW WE WORK
      ════════════════════════════════════════════════════════════ */}
      <div className="relative mx-auto max-w-[1400px] px-6 py-2 md:px-10 md:py-4">
        <div className="mb-8 max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold/70 md:text-[11px]">
            Our Approach
          </span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-extralight uppercase leading-[1.1] text-ivory">
            From Challenge<br />
            <span className="gold-text">to Solution.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ivory/60">
            We begin by understanding the challenge, define a practical approach,
            coordinate the required work, and review the outcome against agreed
            requirements.
          </p>
        </div>

        <div className="grid gap-px bg-gold/15 md:grid-cols-4">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative flex flex-col overflow-hidden bg-obsidian p-6 transition-colors duration-500 hover:bg-graphite/20 md:p-8"
              >
                <div className="relative mb-4 flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E8CB83] via-[#D4AF63] to-[#A07F3A] shadow-[0_0_20px_rgba(212,175,99,0.3)] transition-transform duration-500 group-hover:scale-110">
                    <Icon size={20} strokeWidth={2} className="text-obsidian" />
                  </div>
                  <h3 className="text-[17px] font-light tracking-wide text-ivory transition-colors duration-500 group-hover:text-gold-polished">
                    {step.title}
                  </h3>
                </div>

                <p className="relative text-[14px] leading-[1.5] text-ivory/55 transition-colors duration-500 group-hover:text-ivory/75">
                  {step.desc}
                </p>

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold via-gold-polished to-transparent transition-all duration-700 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          SUBSECTION 04 — EXPERIENCE & EXPERTISE
      ════════════════════════════════════════════════════════════ */}
      <div className="relative mx-auto max-w-[1400px] px-6 py-2 md:px-10 md:py-2">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <h2 className="mt-2 text-[clamp(2rem,4vw,3rem)] font-extralight uppercase leading-[1.1] text-ivory">
              Built on<br />
              <span className="gold-text">Practical Expertise.</span>
            </h2>
            <p className="mt-2 max-w-md text-[18px] leading-relaxed text-ivory/60">
              Our approach combines technical understanding, practical execution,
              coordinated problem-solving, and a commitment to delivering work
              against clearly defined requirements.
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {expertiseThemes.map((theme, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden bg-gradient-to-br from-[#1A1712] via-[#12100D] to-[#0B0B0A] p-6 transition-all duration-500 hover:from-[#221D15] md:p-7"
              >
                <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-gold/40 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-gold-polished" />
                <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-gold/40 transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-gold-polished" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/[0.04] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="mb-4 flex items-center gap-2">
                  <span className="relative mb-2 h-3 w-3 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,99,0.6)]" />
                  <h3 className="relative mb-2 text-[15px] font-medium tracking-wide text-ivory transition-colors duration-500 group-hover:text-gold-polished">
                    {theme.title}
                  </h3>
                </div>
                <p className="relative text-[14px] leading-[1.7] text-ivory/55 transition-colors duration-500 group-hover:text-ivory/75">
                  {theme.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

{/*
      ════════════════════════════════════════════════════════════
          SUBSECTION 05 — SELECTED PROJECTS (Carousel)
      ════════════════════════════════════════════════════════════
      <div className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold/70 md:text-[11px]">
                Selected Work
              </span>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-extralight uppercase leading-[1.1] text-ivory">
                Projects That<br />
                <span className="gold-text">Translate Into Impact.</span>
              </h2>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-end">
              <button
                onClick={() => scrollCarousel('left')}
                disabled={!canScrollLeft}
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center border border-ivory/15 text-ivory/60 transition-all duration-300 hover:border-gold/50 hover:text-gold-polished disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ivory/15 disabled:hover:text-ivory/60"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                disabled={!canScrollRight}
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center border border-ivory/15 text-ivory/60 transition-all duration-300 hover:border-gold/50 hover:text-gold-polished disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ivory/15 disabled:hover:text-ivory/60"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="
            relative mx-auto flex max-w-[1400px] gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory
            px-6 md:px-10 pb-4
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
          "
        >
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              data-card
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="
                group relative flex shrink-0 flex-col overflow-hidden border border-ivory/10 bg-obsidian
                transition-all duration-500 hover:border-gold/30
                snap-start
                w-[85vw] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]
              "
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}${project.image}`}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[40%] contrast-[1.05] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
                <span className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.25em] text-gold/80">
                  {project.id} / {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/40">
                  {project.client}
                </p>
                <h3 className="mt-2 text-[17px] font-light leading-tight tracking-tight text-ivory transition-colors duration-500 group-hover:text-gold-polished md:text-[18px]">
                  {project.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-ivory/55">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-ivory/5 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-ivory/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.1em] text-ivory/45 transition-colors duration-500 group-hover:border-gold/25 group-hover:text-ivory/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="mt-5 inline-flex items-center gap-2 self-start border-b border-gold/40 pb-1 text-[11px] font-mono uppercase tracking-[0.25em] text-ivory/70 transition-all duration-500 hover:border-gold hover:text-gold-polished group-hover:border-gold"
                  onClick={() => scrollTo('#capabilities')}
                >
                  Explore Project
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>

              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold via-gold-polished to-transparent transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-[1400px] justify-center px-6 md:px-10">
          <button
            onClick={() => scrollTo('#divisions')}
            className="group inline-flex items-center gap-3 border border-gold/30 px-6 py-3 text-[11px] font-mono uppercase tracking-[0.3em] text-ivory/80 transition-all duration-500 hover:border-gold hover:bg-gold hover:text-obsidian"
          >
            View All Projects
            <ArrowRight
              size={14}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
*/}
    </section>
  );
}