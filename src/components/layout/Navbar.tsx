import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Divisions", href: "#divisions" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 22 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const ids = ["top", "about", "divisions", "capabilities", "contact"];
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => e.isIntersecting && setActive(`#${id}`)),
        { rootMargin: "-45% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-gold/10 bg-obsidian/80 backdrop-blur-xl shadow-[0_1px_0_rgba(160,127,58,0.06),0_20px_40px_-20px_rgba(0,0,0,0.8)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2 md:px-10">
          {/* ── Brand mark ── */}
          <MagneticLink href="#top" className="group flex items-center gap-3">
            <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="WE Engineering logo"
            draggable={false}
            className="h-14 w-auto transition-transform duration-700 group-hover:scale-105"
            />
                <span className="font-display text-[20px] font-medium tracking-tight">
                    <span className="ml-1.5 text-ivory">We</span>
                    <span className="gold-text"> Engineering</span>
                </span>
          </MagneticLink>

          {/* ── Desktop links ── */}
          <nav className="relative hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`group relative px-4 py-2 text-sm transition-colors ${
                    isActive ? "text-gold-polished" : "text-ivory/70 hover:text-ivory"
                  }`}
                >
                  <span className="relative z-10">{l.label}</span>

                  {/* underline sweep on hover (inactive links) */}
                  {!isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-px origin-left scale-x-0 bg-gold/50 transition-transform duration-500 group-hover:scale-x-100" />
                  )}

                  {/* active indicator with glow */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-gold-polished to-transparent shadow-[0_0_12px_rgba(212,175,99,0.8)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ── Right side ── */}
          <div className="flex items-center gap-3">
            <MagneticLink href="#contact" className="hidden sm:inline-flex">
<button className="group relative overflow-hidden rounded-sm border border-gold/60 bg-transparent px-5 py-2.5 text-sm font-medium text-gold-polished transition-colors duration-500 hover:text-obsidian">
  <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-r from-gold to-gold-polished transition-transform duration-500 ease-out group-hover:translate-y-0" />
  <span className="relative z-10 flex items-center gap-2">
    Discuss a Project
    <ArrowUpRight
      size={14}
      className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
  </span>
</button>
            </MagneticLink>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="relative flex h-10 w-10 items-center justify-center text-ivory lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300"
                style={{ transform: open ? "translate(-50%, -50%) rotate(45deg)" : "translate(-50%, -50%) translateY(-3px)" }}
              />
              <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300"
                style={{ transform: open ? "translate(-50%, -50%) rotate(-45deg)" : "translate(-50%, -50%) translateY(3px)" }}
              />
            </button>
          </div>
        </div>

        {/* ── Scroll progress ── */}
        <motion.div
          className="h-px origin-left bg-gradient-to-r from-gold/0 via-gold-polished to-gold/0"
          style={{ scaleX: progress }}
        />
      </motion.header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-obsidian/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 md:px-10">
              <span className="text-[15px] font-medium text-ivory">WE Corp.</span>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`py-4 text-4xl font-light tracking-tight transition-colors ${
                    active === l.href ? "text-gold-polished" : "text-ivory/85 hover:text-ivory"
                  }`}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="px-6 pb-10"
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-6 py-4 text-sm font-medium text-obsidian"
              >
                Discuss a Project
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Magnetic hover wrapper ── */
function MagneticLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
  };
  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-500 ease-out ${className}`}
    >
      {children}
    </a>
  );
}