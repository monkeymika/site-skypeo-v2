"use client";

import { useState } from "react";

const services = [
  "Site vitrine professionnel",
  "Automatisation des tâches",
  "Devis & facturation en ligne",
  "Référencement local (SEO)",
  "Autre / Je ne sais pas encore",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connecter à un service d'envoi (Resend, SendGrid, etc.)
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Parlons de votre
              <br />
              <span className="gradient-text">projet ensemble</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Remplissez le formulaire et nous vous recontactons sous 24h pour un
              premier échange gratuit et sans engagement.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "contact@skypeo.fr",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Téléphone",
                  value: "+33 1 23 45 67 89",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Réponse sous",
                  value: "24h ouvrées",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/15 text-brand-400 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="text-sm text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="glass rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-brand-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Message envoyé !</h3>
                <p className="text-slate-400 text-sm">
                  Nous vous recontactons dans les 24h. À très vite !
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500/50 focus:bg-white/8 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jean@monentreprise.fr"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500/50 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="metier" className="block text-sm font-medium text-slate-300 mb-1.5">
                    Votre métier
                  </label>
                  <input
                    id="metier"
                    name="metier"
                    type="text"
                    placeholder="Ex: Plombier, Électricien, Rénovation..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500/50 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Service souhaité
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          className="sr-only peer"
                        />
                        <span className="px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10 bg-white/5 text-slate-400 peer-checked:bg-brand-500/20 peer-checked:border-brand-500/40 peer-checked:text-brand-300 transition-all cursor-pointer hover:border-white/20">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                    Votre projet en quelques mots
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Décrivez votre activité, vos besoins, vos objectifs..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500/50 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5"
                >
                  Envoyer ma demande gratuitement
                </button>

                <p className="text-xs text-slate-600 text-center">
                  Sans engagement · Réponse sous 24h · Données protégées
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
