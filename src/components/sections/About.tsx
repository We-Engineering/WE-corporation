import { Award, ShieldCheck, Lightbulb, Users, Handshake, TrendingUp } from "lucide-react";
export function About() {
  return (
    <section id="about" className="relative border-t border-ivory/5 py-2 md:py-8">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              {/* ── Left column: narrative ── */}
        <div>
        {/* Eyebrow */}
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold/70 md:text-[11px]">
            Who We Are
        </span>

        {/* Headline */}
        <h2 className="mt-8 text-[1.35rem] font-extralight uppercase leading-[1.05] tracking-[-0.02em] text-ivory sm:text-[clamp(2rem,5.5vw,2.5rem)] sm:leading-[0.98] sm:tracking-[-0.04em]">
            <span className="block overflow-hidden">
            <span className="block">WE Corporation</span>
            </span>
            <span className="mt-1 block overflow-hidden">
            <span className="block">
                <span className="gold-text">One Shared Vision.</span>
            </span>
            </span>
        </h2>

        {/* Paragraphs */}
        <div className="mt-6 max-w-2xl space-y-5 text-sm leading-[1.75] text-ivory/60 sm:mt-10 md:text-[17px] md:leading-[1.85]">
            <p>
            WE Corporation is a multi-disciplinary organization bringing together
            engineering, quality, technology, digital innovation, marketing, and
            workforce solutions under one shared vision.
            </p>
            <p>
            Through our six specialized divisions, we connect complementary
            expertise to address diverse business and industrial needs, develop
            practical solutions, and create lasting value for our clients and
            partners.
            </p>
            <p>
            We believe that progress comes from combining technical knowledge,
            strategic thinking, and effective collaboration.
            </p>
        </div>
        </div>
        {/* ── Right column: 3-step strip ── */}
        <div className="flex flex-col gap-2 lg:pt-2">
          <div className="grid grid-cols-3 divide-x divide-gold/25 border-t border-gold/40">
            {/* Cell 1 — Purpose */}
            <div className="group flex flex-col items-center px-3 py-4 text-center sm:px-2 sm:py-2">
              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-gold-polished/40 bg-gradient-to-br from-gold via-gold-polished to-gold-deep shadow-[0_8px_24px_-8px_rgba(160,127,58,0.5)] transition-transform duration-500 ease-out group-hover:scale-110 sm:h-16 sm:w-16">
                <img
                  src="/icons/purpose.png"
                  alt=""
                  aria-hidden
                  draggable={false}
                  className="h-3/4 w-3/4 object-contain"
                />
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/15 via-transparent to-black/20 mix-blend-overlay" />
              </div>
              <h3 className="mt-2 text-[1rem] font-extralight uppercase leading-[1.05] tracking-[-0.02em] text-ivory sm:text-[clamp(0.8rem,3.5vw,1.25rem)] sm:leading-[1]">
                Our <span className="gold-text">purpose</span>
              </h3>
              <p className="mt-3 w-full text-left text-[11px] leading-relaxed text-ivory/55 sm:text-[12px]">
                Bringing together people, knowledge, and capabilities to transform challenges into opportunities.
              </p>
            </div>

            {/* Cell 2 — Vision */}
            <div className="group flex flex-col items-center px-3 py-4 text-center sm:px-2 sm:py-2">
              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-gold-polished/40 bg-gradient-to-br from-gold via-gold-polished to-gold-deep shadow-[0_8px_24px_-8px_rgba(160,127,58,0.5)] transition-transform duration-500 ease-out group-hover:scale-110 sm:h-16 sm:w-16">
                <img
                  src="/icons/vision.png"
                  alt=""
                  aria-hidden
                  draggable={false}
                  className="h-3/4 w-3/4 object-contain"
                />
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/15 via-transparent to-black/20 mix-blend-overlay" />
              </div>
              <h3 className="mt-2 text-[1rem] font-extralight uppercase leading-[1.05] tracking-[-0.02em] text-ivory sm:text-[clamp(0.8rem,3.5vw,1.25rem)] sm:leading-[1]">
                Our <span className="gold-text">vision</span>
              </h3>
              <p className="mt-3 w-full text-left text-[11px] leading-relaxed text-ivory/55 sm:text-[12px]">
                Growing through expertise, innovation, strong partnerships, and a shared commitment to excellence.
              </p>
            </div>

            {/* Cell 3 — Mission */}
            <div className="group flex flex-col items-center px-3 py-4 text-center sm:px-2 sm:py-2">
              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-gold-polished/40 bg-gradient-to-br from-gold via-gold-polished to-gold-deep shadow-[0_8px_24px_-8px_rgba(160,127,58,0.5)] transition-transform duration-500 ease-out group-hover:scale-110 sm:h-16 sm:w-16">
                <img
                  src="/icons/mission.png"
                  alt=""
                  aria-hidden
                  draggable={false}
                  className="h-3/4 w-3/4 object-contain"
                />
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/15 via-transparent to-black/20 mix-blend-overlay" />
              </div>
              <h3 className="mt-2 text-[1rem] font-extralight uppercase leading-[1.05] tracking-[-0.02em] text-ivory sm:text-[clamp(0.8rem,3.5vw,1.25rem)] sm:leading-[1]">
                Our <span className="gold-text">Mission</span>
              </h3>
              <p className="mt-2 w-full text-left text-[11px] leading-relaxed text-ivory/55 sm:text-[12px]">
                Delivering reliable, practical, and value-driven solutions through specialized knowledge and collaboration.
              </p>
            </div>
          </div>
          {/* ── Core Values ── */}
          <div className="mt-2 border-t border-gold/40 pt2 md:mt2 md:pt2">
            {/* Section heading */}
            <div className="mb-2">
              <h3 className="mt-2 text-[1.5rem] font-extralight uppercase leading-[1.05] tracking-[-0.02em] text-ivory sm:text-[clamp(1.rem,3.5vw,1.5rem)] sm:leading-[1]">
                Our <span className="gold-text">Core Values</span>
              </h3>
            </div>

            {/* 6 values — 3 columns × 2 rows */}
            <div className="grid grid-cols-1 gap-px bg-gold/15 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  Icon: Award,
                  title: "Excellence",
                  desc: "We pursue high standards in our work, our services, and the results we deliver.",
                },
                {
                  Icon: ShieldCheck,
                  title: "Integrity",
                  desc: "We build relationships through honesty, transparency, accountability, and trust.",
                },
                {
                  Icon: Lightbulb,
                  title: "Innovation",
                  desc: "We embrace new ideas, evolving technologies, and better  solving problems.",
                },
                {
                  Icon: Users,
                  title: "Collaboration",
                  desc: "We bring together diverse expertise and perspectives to achieve shared objectives.",
                },
                {
                  Icon: Handshake,
                  title: "Commitment",
                  desc: "We take responsibility for our work and remain focused on delivering meaningful value.",
                },
                {
                  Icon: TrendingUp,
                  title: "Progress",
                  desc: "We believe in continuous learning, and development to create better opportunities.",
                },
              ].map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="group relative bg-obsidian p-2 transition-colors duration-500 hover:bg-graphite/40 sm:p-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold-polished/40 bg-gradient-to-br from-gold via-gold-polished to-gold-deep shadow-[0_6px_18px_-6px_rgba(160,127,58,0.5)] transition-transform duration-500 ease-out group-hover:scale-110">
                      <Icon size={14} strokeWidth={1.6} className="text-obsidian" />
                    </div>
                    <h4 className="text-[13px] font-medium uppercase tracking-[0.12em] text-ivory sm:text-[14px]">
                      {title}
                    </h4>
                  </div>
                  <p className="mt-3 text-[12px] leading-relaxed text-ivory/55">
                    {desc}
                  </p>

                  {/* Hover accent line */}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold to-transparent transition-all duration-700 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}