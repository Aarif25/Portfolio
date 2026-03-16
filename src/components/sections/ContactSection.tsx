import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — Big CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-8">Contact</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
              Got an idea?<br />
              <span className="font-serif-italic text-primary">Let's talk.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-sm">
              I'm always open to interesting projects, collaborations, or just a good conversation about tech.
            </p>
            <div className="space-y-3">
              {[
                { label: 'GitHub', href: 'https://github.com/aarifmansoori', handle: '@aarifmansoori' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/aarifmansoori', handle: '/in/aarifmansoori' },
                { label: 'Email', href: 'mailto:aarif@example.com', handle: 'aarif@example.com' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 py-3 border-b border-border/30 group hover:border-primary/30 transition-colors"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground w-16">{s.label}</span>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">{s.handle}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:pt-16"
          >
            {(['name', 'email'] as const).map((field) => (
              <div key={field}>
                <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {field}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder={`Your ${field}`}
                />
              </div>
            ))}
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:brightness-110 transition-all mt-4"
            >
              {sent ? '✓ Sent!' : 'Send message'}
            </button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-32">
        <div className="divider-line mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
          <p className="text-xs text-muted-foreground">
            © 2026 Aarif Mansoori
          </p>
          <p className="text-xs text-muted-foreground">
            Designed & built by hand
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
