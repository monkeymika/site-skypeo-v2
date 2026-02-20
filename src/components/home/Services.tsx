const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Site vitrine professionnel",
    description:
      "Un site web moderne, rapide et adapté mobile qui inspire confiance à vos prospects dès le premier coup d'œil. Design sur mesure pour votre corps de métier.",
    features: ["Design personnalisé", "100% responsive", "Chargement ultra-rapide", "Formulaire de contact"],
    badge: "Le plus populaire",
    color: "brand",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Automatisation des tâches",
    description:
      "Automatisez vos relances clients, confirmations de RDV et devis. Gagnez des heures chaque semaine en supprimant les tâches répétitives.",
    features: ["Relances automatiques", "Confirmations RDV", "Suivi de chantier", "Notifications SMS/email"],
    badge: null,
    color: "accent",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Devis & facturation en ligne",
    description:
      "Créez et envoyez des devis professionnels en quelques clics. Vos clients signent en ligne, vous êtes payé plus vite.",
    features: ["Devis électroniques", "Signature en ligne", "Suivi des paiements", "Relances automatiques"],
    badge: null,
    color: "brand",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Référencement local (SEO)",
    description:
      "Apparaissez en premier sur Google quand un client cherche votre métier près de chez vous. Optimisation Google My Business incluse.",
    features: ["SEO local optimisé", "Google My Business", "Avis clients", "Mots-clés métier"],
    badge: null,
    color: "accent",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const isFirst = index === 0;

  return (
    <div
      className={`relative rounded-2xl p-6 border transition-all duration-300 group hover:-translate-y-1 ${
        isFirst
          ? "bg-brand-600/10 border-brand-500/30 hover:border-brand-500/50"
          : "glass hover:border-white/20"
      }`}
    >
      {service.badge && (
        <div className="absolute -top-3 left-6">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-500 text-white">
            {service.badge}
          </span>
        </div>
      )}

      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
          service.color === "brand"
            ? "bg-brand-500/20 text-brand-400"
            : "bg-accent-500/20 text-accent-400"
        }`}
      >
        {service.icon}
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-4">
        {service.description}
      </p>

      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
            <svg className="w-4 h-4 text-brand-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Nos services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tout ce dont votre activité
            <br />
            <span className="gradient-text">a besoin pour grandir</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            Des solutions pensées pour les réalités du terrain — simples à utiliser,
            rapides à mettre en place, efficaces dès le premier jour.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
