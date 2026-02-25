import type { Metadata } from "next";

/* ── Types ───────────────────────────────────────────────── */
interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

interface PlaceResult {
  rating?: number;
  user_ratings_total?: number;
  reviews?: GoogleReview[];
}

/* ── Fetch depuis Google Places API (ISR 24h) ─────────────── */
async function fetchGoogleReviews(): Promise<PlaceResult | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=fr&reviews_sort=newest`,
      { next: { revalidate: 86400 } }, // cache 24h
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.result ?? null;
  } catch {
    return null;
  }
}

/* ── Avis réels ───────────────────────────────────────────── */
const fallbackReviews: GoogleReview[] = [
  {
    author_name: "Jérôme ADAM",
    rating: 5,
    text: "Création de mon site internet professionnel en février 2024, je vous conseil fortement de choisir la société SKYPEO pour la création de votre site vous ne le regretterai pas !!! Tout est sur mesure à votre identité professionnelle. Vous pouvez travailler avec cette société en toute confiance.",
    relative_time_description: "il y a 11 mois",
  },
  {
    author_name: "sarl.scaf M Mathey",
    rating: 5,
    text: "Nous sommes très satisfaits des services de Skypeo pour la création de notre site internet. Timothée et Mikael sont toujours présents pour répondre à nos questions. Ils nous répondent au téléphone ou nous rappellent rapidement lorsqu'ils sont occupés. Société à recommander sans retenue.",
    relative_time_description: "il y a 5 mois",
  },
  {
    author_name: "Sebastien Grandjean",
    rating: 5,
    text: "Très satisfait ! Timothee m'a contacté pour faire le point sur l'image de mon entreprise sur internet (chauffagiste). Il a su m'expliquer tout clairement… Nous avons fait table rase : un site internet plus beau, selon mes goûts, mieux visible et des économies !! Que demander de plus, merci encore.",
    relative_time_description: "il y a 6 mois",
  },
  {
    author_name: "Claire STIRNEMANN",
    rating: 5,
    text: "J'ai été très satisfaite des services de Skypeo pour la création de mon site internet. Timothée a su répondre parfaitement à mes attentes, en étant à l'écoute de mes besoins tout au long du projet. Le site est moderne, esthétique et très fonctionnel. Le temps de réponse a toujours été rapide. Je recommande !",
    relative_time_description: "il y a 11 mois",
  },
  {
    author_name: "Florian",
    rating: 5,
    text: "Un grand bravo à l'équipe de Skypeo pour leur professionnalisme et leur créativité ! Leur expertise en conception de sites internet est remarquable : des designs modernes, une navigation intuitive et des solutions parfaitement adaptées aux besoins des clients. Une société de confiance pour donner vie à vos projets digitaux !",
    relative_time_description: "il y a 11 mois",
  },
  {
    author_name: "Luc Calligaro",
    rating: 5,
    text: "J'ai eu le plaisir de travailler avec Skypeo pour la création de mon site web, et je ne pourrais être plus satisfait du résultat ! Meilleur (à mon sens) et moins cher que ses homologues qui m'avaient démarchés.",
    relative_time_description: "il y a 10 mois",
  },
];

/* ── Étoiles ──────────────────────────────────────────────── */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-zinc-700"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Initiales depuis un nom ──────────────────────────────── */
function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

/* ════════════════════════════════════════════════════════════
   SERVER COMPONENT
════════════════════════════════════════════════════════════ */
export async function Testimonials() {
  const place = await fetchGoogleReviews();
  const reviews = place?.reviews?.length ? place.reviews : fallbackReviews;
  const globalRating = place?.rating ?? 5.0;
  const totalRatings = place?.user_ratings_total ?? 6;
  const isLive = !!place?.reviews?.length;

  return (
    <section className="py-24 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="section-tag mb-3">Témoignages</p>
            <h2 className="font-bebas fg-1" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              ILS NOUS FONT{" "}
              <span className="gradient-text">CONFIANCE.</span>
            </h2>
          </div>

          {/* Score global */}
          <div className="glass-card grad-border px-6 py-4 flex items-center gap-4 shrink-0">
            {/* Logo Google simplifié */}
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bebas text-2xl fg-1">{globalRating.toFixed(1)}</span>
                <Stars rating={Math.round(globalRating)} />
              </div>
              <p className="text-[10px] fg-4 mt-0.5">
                {totalRatings ? `${totalRatings} avis Google` : "Avis Google"}
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.slice(0, 6).map((r, i) => (
            <div key={i} className="glass-card p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <Stars rating={r.rating} />
                <span className="text-[10px] fg-5">{r.relative_time_description}</span>
              </div>

              <p className="text-sm fg-3 leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid var(--divider)" }}>
                {r.profile_photo_url ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={r.profile_photo_url}
                    alt={r.author_name}
                    className="w-8 h-8 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white text-[10px] font-bold"
                    style={{ background: "linear-gradient(135deg, #008f78, #2b3475)" }}>
                    {initials(r.author_name)}
                  </div>
                )}
                <span className="text-sm fg-2 font-medium">{r.author_name}</span>
                {isLive && (
                  <svg className="w-4 h-4 ml-auto shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
