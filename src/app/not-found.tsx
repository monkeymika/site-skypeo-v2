import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-4">
          Erreur 404
        </p>
        <h1 className="text-6xl font-bold text-white mb-4">Page introuvable</h1>
        <p className="text-slate-400 text-lg mb-8 max-w-md">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl transition-all"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
