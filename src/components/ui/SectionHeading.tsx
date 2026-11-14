import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  subtitle?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  subtitle,
}: Props) {
  return (
    <div
      className={`mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      <Reveal>
        <span
          className={`luxury-eyebrow ${align === "center" ? "justify-center" : ""}`}
        >
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-3xl font-light text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight text-ivory">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p
            className={`mt-6 max-w-2xl text-base text-ivory/60 ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}