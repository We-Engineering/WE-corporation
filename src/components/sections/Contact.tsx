import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { divisions } from '@/data/divisions';

type FormState = {
  name: string;
  company: string;
  email: string;
  interest: string;
  message: string;
};

const initial: FormState = {
  name: '',
  company: '',
  email: '',
  interest: '',
  message: '',
};

export function Contact() {
  const [open, setOpen] = useState(false);

  /* ── Lock body scroll while the modal is open ── */
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* ── ESC to close ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          CTA SECTION (visible inline)
      ════════════════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-ivory/5 py-32 md:py-48"
      >
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 grid-engineering opacity-30" />

        {/* Ambient gold glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full bg-gold/[0.08] blur-[140px]" />
        </div>

        {/* Floating gold particles */}
        <Particles />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 font-mono text-[10px] uppercase tracking-[0.4em] text-gold/70 md:text-[11px]"
          >
            Have a Challenge in Mind?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-8 text-[clamp(2.5rem,8vw,6rem)] font-extralight uppercase leading-[0.95] tracking-[-0.03em] text-ivory"
          >
            Let's Build Something
            <br />
            <span className="gold-text">Exceptional.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mb-12 max-w-xl text-[15px] leading-relaxed text-ivory/60 md:text-[17px]"
          >
            Tell us what you're trying to achieve. We'll help you explore the
            requirements and identify the expertise needed to move your
            project forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <button
              onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-3 border border-gold/40 bg-gold px-8 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-obsidian transition-all duration-300 hover:bg-gold-polished hover:shadow-[0_0_40px_-8px_rgba(212,175,99,0.6)]"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <p className="font-mono text-[11px] tracking-widest text-ivory/40 uppercase">
              Typically responds within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CONTACT FORM MODAL
      ════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-obsidian/90 p-4 backdrop-blur-md md:items-center md:p-8"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative my-8 w-full max-w-3xl border border-gold/20 bg-[#0B0B0A] shadow-[0_0_60px_-20px_rgba(212,175,99,0.3)] md:my-0"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close form"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-ivory/10 text-ivory/60 transition-all duration-300 hover:border-gold/40 hover:text-gold-polished"
              >
                <X size={18} />
              </button>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

              <FormBody onClose={() => setOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ════════════════════════════════════════════════════════════
    FORM BODY (extracted so it can reset on modal open/close)
════════════════════════════════════════════════════════════ */
function FormBody({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const update =
    (k: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your business email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email address.';
    if (!form.interest) e.interest = 'Please select an area of interest.';
    if (!form.message.trim()) e.message = 'Please describe your inquiry.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // NOTE: Replace with real backend / form service
    setSubmitted(true);
  };

  return (
    <div className="p-8 md:p-12">
      <div className="mb-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold/70 md:text-[11px]">
          Contact
        </span>
        <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-extralight uppercase leading-[1.1] text-ivory">
          Let's Build
          <br />
          <span className="gold-text">What Comes Next.</span>
        </h2>
        <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-ivory/60">
          Have a project, a business challenge, or a potential partnership in
          mind? Let's explore how the right expertise can move it forward.
        </p>
      </div>

      {submitted ? (
        <div className="border border-gold/40 bg-graphite/40 p-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            Thank you
          </div>
          <h3 className="mt-3 text-xl font-light tracking-tight text-ivory">
            Your inquiry has been recorded.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ivory/60">
            This form is not yet connected to a submission service. To enable
            delivery, integrate a backend endpoint or form provider.
          </p>
          <button
            onClick={onClose}
            className="mt-6 border border-gold/40 px-6 py-3 text-[11px] font-mono uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-gold hover:text-obsidian"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field
              label="Name *"
              error={errors.name}
              value={form.name}
              onChange={update('name')}
              placeholder="Your name"
            />
            <Field
              label="Company"
              value={form.company}
              onChange={update('company')}
              placeholder="Company name"
            />
          </div>

          <Field
            label="Business Email *"
            type="email"
            error={errors.email}
            value={form.email}
            onChange={update('email')}
            placeholder="you@company.com"
          />

          <div>
            <label className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-ivory/50">
              Area of Interest *
            </label>
            <select
              value={form.interest}
              onChange={update('interest')}
              className={`w-full border-b bg-transparent px-0 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold ${
                errors.interest ? 'border-red-500/60' : 'border-ivory/20'
              }`}
            >
              <option value="" className="bg-obsidian">
                Select a division or inquiry
              </option>
              {divisions.map((d) => (
                <option key={d.id} value={d.title} className="bg-obsidian">
                  {d.title}
                </option>
              ))}
              <option value="General inquiry" className="bg-obsidian">
                General inquiry or partnership
              </option>
            </select>
            {errors.interest && (
              <p className="mt-2 text-xs text-red-400">{errors.interest}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-ivory/50">
              Project or Inquiry Details *
            </label>
            <textarea
              rows={5}
              value={form.message}
              onChange={update('message')}
              placeholder="Briefly describe your project or inquiry."
              className={`w-full resize-none border-b bg-transparent px-0 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold ${
                errors.message ? 'border-red-500/60' : 'border-ivory/20'
              }`}
            />
            {errors.message && (
              <p className="mt-2 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="group inline-flex items-center gap-3 border border-gold/40 bg-gold px-8 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-obsidian transition-all duration-300 hover:bg-gold-polished hover:shadow-[0_0_40px_-8px_rgba(212,175,99,0.6)]"
            >
              Send Inquiry
            </button>
          </div>

          <p className="text-xs text-ivory/40">
            This form is a frontend demonstration. Connect a form service or
            backend endpoint before relying on it in production.
          </p>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-ivory/50">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border-b bg-transparent px-0 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold ${
          error ? 'border-red-500/60' : 'border-ivory/20'
        }`}
      />
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}

/* ── Floating gold particles ── */
function Particles() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-gold/40"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}