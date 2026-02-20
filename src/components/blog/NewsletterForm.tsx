"use client";

export function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="votre@email.fr"
        className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:border-brand-500/50 text-sm"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl text-sm transition-colors"
      >
        S'inscrire
      </button>
    </form>
  );
}
