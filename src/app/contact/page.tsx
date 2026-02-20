"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { stagger, fadeUp } from "@/lib/animations";

const services = [
  { id: "auto",      label: "Automatisation",          emoji: "⚡" },
  { id: "site",      label: "Site web",                 emoji: "🌐" },
  { id: "interface", label: "Interface sur-mesure",     emoji: "🗂️" },
  { id: "formation", label: "Formation",                emoji: "🎓" },
  { id: "autre",     label: "Autre / Je ne sais pas",   emoji: "💬" },
];

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "timothee.skypeo@gmail.com",
    href: "mailto:timothee.skypeo@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Téléphone",
    value: "+33 6 60 53 43 89",
    href: "tel:+33660534389",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Zone d'intervention",
    value: "Nancy & Grand Est",
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Réponse garantie",
    value: "Sous 24h ouvrées",
    href: null,
  },
];

export default function ContactPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleService(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-16 px-5 sm:px-8 lg:px-10 overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-30 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 30% 0%, rgba(123,47,190,0.15) 0%, transparent 65%)" }} />
        <div className="relative max-w-7xl mx-auto">
          <p className="section-tag mb-6">Contact</p>
          <h1 className="font-bebas fg-1" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.95 }}>
            <TextReveal onMount delay={0.1}>PARLONS DE VOTRE</TextReveal>
            <TextReveal onMount delay={0.25}>
              <span className="gradient-text">PROJET.</span>
            </TextReveal>
          </h1>
          <motion.p initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.7, duration:0.5 }}
            className="fg-3 text-lg mt-6 max-w-md leading-relaxed">
            Premier échange gratuit de 30 minutes. On analyse votre situation et on vous dit exactement ce qu'on peut faire.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-5 sm:px-8 lg:px-10 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">

            {/* Left — contact info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }}
              variants={stagger} className="space-y-4">
              {contactInfo.map((item) => (
                <motion.div key={item.label} variants={fadeUp}
                  className="glass-card p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-violet-mid"
                    style={{ background: "rgba(123,47,190,0.12)", border: "1px solid rgba(123,47,190,0.2)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest fg-5 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href}
                        className="text-sm font-semibold fg-1 hover:text-violet-mid transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold fg-1">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Trust badge */}
              <motion.div variants={fadeUp}
                className="glass-card grad-border p-6 mt-6">
                <p className="font-bebas fg-1 mb-1" style={{ fontSize:"1.5rem" }}>
                  AUDIT GRATUIT
                </p>
                <p className="text-sm fg-3 leading-relaxed">
                  On identifie ce qui vous vole du temps et on vous dit exactement ce qu'on peut automatiser — sans engagement.
                </p>
              </motion.div>
            </motion.div>

            {/* Right — Form */}
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.6, delay:0.1 }}>
              <div className="glass-card grad-border p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-14">
                    <motion.div initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }}
                      transition={{ type:"spring", stiffness:200, damping:15 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white"
                      style={{ background: "linear-gradient(135deg, #7B2FBE, #E91E8C)" }}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="font-bebas fg-1 mb-2" style={{ fontSize:"2rem" }}>
                      MESSAGE ENVOYÉ !
                    </h3>
                    <p className="fg-4 text-sm">
                      On vous recontacte dans les 24h. À très vite !
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="mb-6">
                      <h2 className="font-bebas fg-1 mb-1" style={{ fontSize:"1.8rem" }}>
                        ENVOYEZ-NOUS UN MESSAGE
                      </h2>
                      <p className="text-xs fg-5">Gratuit · Sans engagement · Réponse sous 24h</p>
                    </div>

                    {/* Name + Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.2em] fg-4 mb-2">
                          Nom complet *
                        </label>
                        <input id="name" name="name" type="text" required
                          placeholder="Jean Dupont"
                          className="w-full px-4 py-3.5 rounded-xl text-sm fg-1 placeholder:fg-5 focus:outline-none focus:ring-2 focus:ring-violet-mid/30 transition-all duration-200"
                          style={{ background: "var(--subtle-bg)", border: "1px solid var(--card-border)" }} />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-[0.2em] fg-4 mb-2">
                          Téléphone
                        </label>
                        <input id="phone" name="phone" type="tel"
                          placeholder="06 12 34 56 78"
                          className="w-full px-4 py-3.5 rounded-xl text-sm fg-1 placeholder:fg-5 focus:outline-none focus:ring-2 focus:ring-violet-mid/30 transition-all duration-200"
                          style={{ background: "var(--subtle-bg)", border: "1px solid var(--card-border)" }} />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.2em] fg-4 mb-2">
                        Email *
                      </label>
                      <input id="email" name="email" type="email" required
                        placeholder="jean@monentreprise.fr"
                        className="w-full px-4 py-3.5 rounded-xl text-sm fg-1 placeholder:fg-5 focus:outline-none focus:ring-2 focus:ring-violet-mid/30 transition-all duration-200"
                        style={{ background: "var(--subtle-bg)", border: "1px solid var(--card-border)" }} />
                    </div>

                    {/* Métier */}
                    <div>
                      <label htmlFor="metier" className="block text-[10px] font-bold uppercase tracking-[0.2em] fg-4 mb-2">
                        Votre métier
                      </label>
                      <input id="metier" name="metier" type="text"
                        placeholder="Ex : Plombier, Électricien, Paysagiste..."
                        className="w-full px-4 py-3.5 rounded-xl text-sm fg-1 placeholder:fg-5 focus:outline-none focus:ring-2 focus:ring-violet-mid/30 transition-all duration-200"
                        style={{ background: "var(--subtle-bg)", border: "1px solid var(--card-border)" }} />
                    </div>

                    {/* Services */}
                    <div>
                      <p className="block text-[10px] font-bold uppercase tracking-[0.2em] fg-4 mb-2">
                        Je suis intéressé par
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {services.map((s) => (
                          <button key={s.id} type="button" onClick={() => toggleService(s.id)}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150"
                            style={selected.includes(s.id)
                              ? { background: "linear-gradient(135deg, rgba(123,47,190,0.3), rgba(233,30,140,0.15))", border: "1px solid rgba(123,47,190,0.4)", color: "#7B2FBE" }
                              : { background: "var(--subtle-bg)", border: "1px solid var(--card-border)", color: "var(--fg-3)" }}>
                            <span>{s.emoji}</span>
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.2em] fg-4 mb-2">
                        Décrivez votre projet
                      </label>
                      <textarea id="message" name="message" rows={4}
                        placeholder="Parlez-nous de votre activité, vos besoins, ce qui vous prend le plus de temps..."
                        className="w-full px-4 py-3.5 rounded-xl text-sm fg-1 placeholder:fg-5 focus:outline-none focus:ring-2 focus:ring-violet-mid/30 transition-all duration-200 resize-none"
                        style={{ background: "var(--subtle-bg)", border: "1px solid var(--card-border)" }} />
                    </div>

                    <button type="submit" className="btn-glow w-full py-4">
                      <span>Envoyer ma demande →</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
