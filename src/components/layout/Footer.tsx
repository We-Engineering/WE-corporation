import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Instagram,
  Facebook,
} from 'lucide-react';
import { scrollTo } from '@/hooks/useSmoothScroll';

/* ── WhatsApp brand icon ── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/* ── Column data ── */
const COMPANY_LINKS = [
  { label: 'About Us', target: '#about' },
  { label: 'Capabilities', target: '#capabilities' },
  { label: 'Divisions', target: '#divisions' },
  { label: 'Contact', target: '#contact' },
];

const DIVISION_LINKS = [
  { label: 'WE Infrastructure', target: '#divisions' },
  { label: 'WE Quality', target: '#divisions' },
  { label: 'WE Technologies', target: '#divisions' },
  { label: 'WE Marketing', target: '#divisions' },
];

/* ── Socials ── */
const SOCIALS = [
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/your-page' },
  { label: 'GitHub', icon: Github, href: 'https://github.com/your-org' },
  { label: 'WhatsApp', icon: WhatsAppIcon, href: 'https://wa.me/21600000000' },
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/your-page' },
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/your-page' },
];

export function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const onVisibility = () => {
      if (!ref.current) return;
      if (document.hidden) {
        ref.current.style.setProperty('--bg-paused', '1');
      } else {
        ref.current.style.setProperty('--bg-paused', '0');
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden border-t border-ivory/5 bg-obsidian"
    >
      {/* ═══ BACKGROUND LAYERS ═══ */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}footer-bg.jpg)`,
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/85 to-obsidian" />
      <div className="pointer-events-none absolute inset-0 grid-engineering opacity-20" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gold/5 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* ════════════════════════════════════════════════════════════
            NAVIGATION COLUMNS — 4 total (Brand + 3 nav columns)
        ════════════════════════════════════════════════════════════ */}
<div className="grid gap-10 py-14 md:grid-cols-2 md:gap-12 lg:grid-cols-[2fr_2fr_1fr_2fr_] lg:gap-x-6 lg:gap-y-12 lg:py-16">

{/* ── Column 1: Brand ── */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-80px' }}
  transition={{ duration: 0.8 }}
  className="flex flex-col items-center justify-start text-center"
>
  <button
    onClick={() => scrollTo('#home')}
    aria-label="WE Corp. — back to top"
    className="group block"
  >
    <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt="WE Corp. logo"
      className="h-42 w-50 object-contain transition-transform duration-500 group-hover:scale-120 md:h-25 md:w-50"
      width={200}
      height={200}
    />
  </button>

  <h2 className="mt-2 text-center text-[clamp(1.35rem,2.5vw,1.75rem)] font-medium leading-[1.15] tracking-[-0.02em]">
    <span className="text-white">We</span>{" "}
    <span className="gold-text">Engineering</span>
    <br />
    <span className="text-ivory/40">Connected solutions</span>
  </h2>
</motion.div>

  {/* ── Column 2: Brand Description ── */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay: 0.05 }}
    className="flex flex-col justify-start"
  >
    <h4 className="font-mono text-[18px] uppercase tracking-[0.1em] text-gold/70">
      Who We Are
    </h4>
    <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-ivory/55">
      WE Corp. is a multi-division engineering group delivering connected
      infrastructure, quality assurance, technology, and marketing solutions
      built on precision, integrity, and long-term partnership.
    </p>
    <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-ivory/40">
      One vision. Four divisions. Endless possibilities.
    </p>
  </motion.div>

  {/* ── Column 4: Our Divisions ── */}
  <FooterColumn title="Our Divisions" links={DIVISION_LINKS} delay={0.2} />

{/* ── Column 5: Get in Touch + Follow ── */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-80px' }}
  transition={{ duration: 0.7, delay: 0.3 }}
  className="lg:pl-10"
>
  <h4 className="font-mono text-[18px] uppercase tracking-[0.1em] text-gold/70">
    Get in Touch
  </h4>

  <div className="mt-4 flex flex-col gap-4">
    <a
      href="mailto:contact@wecorp.example"
      className="group flex items-start gap-3 text-[13px] text-ivory/60 transition-colors duration-300 hover:text-gold-polished"
    >
      <Mail size={14} className="mt-0.5 shrink-0 text-gold/50 transition-colors duration-300 group-hover:text-gold-polished" />
      <span className="leading-relaxed">contact.weengineering@gmail.com</span>
    </a>
    <a
      href="tel:+21627893834"
      className="group flex items-start gap-3 text-[13px] text-ivory/60 transition-colors duration-300 hover:text-gold-polished"
    >
      <Phone size={14} className="mt-0.5 shrink-0 text-gold/50 transition-colors duration-300 group-hover:text-gold-polished" />
      <span className="leading-relaxed">+216 27893834</span>
    </a>
    <div className="flex items-start gap-3 text-[13px] text-ivory/60">
      <MapPin size={14} className="mt-0.5 shrink-0 text-gold/50" />
      <span className="leading-relaxed">Tunis · Tunisia</span>
    </div>
  </div>

  <div className="mt-4 flex flex-wrap gap-2">
    {SOCIALS.map((s) => {
      const Icon = s.icon;
      return (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center border border-ivory/10 text-ivory/50 transition-all duration-300 hover:border-gold/50 hover:bg-gold/5 hover:text-gold-polished"
        >
          <Icon className="h-3.5 w-3.5" />
        </a>
      );
    })}
  </div>
</motion.div>
</div>

        {/* ════════════════════════════════════════════════════════════
            LEGAL + COPYRIGHT BAR
        ════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-ivory/5 py-8 text-center md:flex-row md:text-center">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-ivory/40-center">
            <span className="text-gold">©</span> {new Date().getFullYear()}{' '}
            <span>We</span>
            <span className="mx-2 text-gold/70">Engineering</span>
            <span className="mx-2 text-gold/40">·</span>
            <span>All rights reserved</span>
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-ivory/40 transition-colors duration-300 hover:text-gold-polished"
            >
              Privacy
            </a>
            <span className="h-3 w-px bg-ivory/20" />
            <a
              href="#terms"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-ivory/40 transition-colors duration-300 hover:text-gold-polished"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════════════════════
    Reusable column
════════════════════════════════════════════════════════════ */
function FooterColumn({
  title,
  links,
  delay = 0,
}: {
  title: string;
  links: { label: string; target: string }[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay }}
      className="flex flex-col items-start text-left md:items-center md:text-center"
    >
      <h4 className="font-mono text-[18px] uppercase tracking-[0.05em] text-gold/70">
        {title}
      </h4>

      <ul className="mt-4 flex flex-col items-start gap-4 md:items-center">
        {links.map((link) => (
          <li key={link.label}>
            <button
              onClick={() => scrollTo(link.target)}
              className="group inline-flex items-center gap-0 text-left text-[13px] text-ivory/55 transition-colors duration-300 hover:text-gold-polished"
            >
              <span className="relative">
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-polished transition-all duration-500 group-hover:w-full" />
              </span>
              <ArrowUpRight
                size={11}
                className="shrink-0 translate-y-0.5 text-gold/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0 group-hover:text-gold-polished"
              />
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}