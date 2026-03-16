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

  const socials = [
    { label: 'GitHub', href: 'https://github.com/aarifmansoori' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/aarifmansoori' },
    { label: 'Email', href: 'mailto:aarif@example.com' },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">// CONTACT</p>
          <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-tighter mb-16">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {(['name', 'email'] as const).map((field) => (
              <div key={field}>
                <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {field}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  required
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder={`Your ${field}`}
                />
              </div>
            ))}
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest hover:opacity-90 transition-opacity glow-border"
            >
              {sent ? '✓ Message Sent' : 'Send Message'}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              Interested in working together or have a project in mind? 
              Feel free to reach out — I'm always open to discussing new opportunities.
            </p>
            <div className="space-y-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg glass-surface flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <span className="font-mono text-xs text-primary">{s.label[0]}</span>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-32 pt-8 border-t border-border/50">
        <p className="text-center font-mono text-xs text-muted-foreground/50 tracking-widest">
          © 2026 AARIF MANSOORI // CRAFTED WITH PRECISION
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
