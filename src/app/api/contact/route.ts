import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Rate limiting simple (in-memory, par IP) ──────────────────────────────
const rateLimit = new Map<string, { count: number; firstAt: number }>();
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_MAX = 3; // 3 soumissions max par fenêtre

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.firstAt > RATE_WINDOW_MS) {
    rateLimit.set(ip, { count: 1, firstAt: now });
    return true;
  }
  if (entry.count >= RATE_MAX) return false;
  entry.count++;
  return true;
}

// ── Validation basique ────────────────────────────────────────────────────
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.trim().slice(0, 1000);
}

export async function POST(req: NextRequest) {
  // ── Récupérer l'IP ──────────────────────────────────────────────────────
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Trop de tentatives. Réessayez dans 10 minutes." },
      { status: 429 },
    );
  }

  // ── Lire le body ────────────────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { name, email, phone, metier, services, message, _honeypot } = body as Record<string, string>;

  // ── Honeypot : si rempli, c'est un bot ─────────────────────────────────
  if (_honeypot && String(_honeypot).length > 0) {
    // Répondre OK pour ne pas alerter le bot
    return NextResponse.json({ success: true });
  }

  // ── Validation ─────────────────────────────────────────────────────────
  if (!name || sanitize(name).length < 2) {
    return NextResponse.json({ error: "Nom invalide." }, { status: 400 });
  }
  if (!email || !isValidEmail(sanitize(email))) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }
  if (!message || sanitize(message).length < 10) {
    return NextResponse.json(
      { error: "Le message doit faire au moins 10 caractères." },
      { status: 400 },
    );
  }

  const cleanName    = sanitize(name);
  const cleanEmail   = sanitize(email);
  const cleanPhone   = phone   ? sanitize(phone)   : "Non renseigné";
  const cleanMetier  = metier  ? sanitize(metier)  : "Non renseigné";
  const cleanMessage = sanitize(message);
  const cleanServices =
    Array.isArray(services) && services.length > 0
      ? (services as string[]).join(", ")
      : "Non précisé";

  // ── Envoi email via Resend ──────────────────────────────────────────────
  try {
    await resend.emails.send({
      from:    "Formulaire Skypeo <onboarding@resend.dev>",
      to:      ["michael.skypeo@gmail.com"],
      replyTo: cleanEmail,
      subject: `Nouveau message de ${cleanName} – Skypeo`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;background:#0b0117;color:#f0ede8;border-radius:16px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#008f78,#2b3475);padding:32px 40px;">
            <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.7);">Nouveau message via skypeo.fr</p>
            <h1 style="margin:8px 0 0;font-size:28px;font-weight:900;color:#fff;">${cleanName}</h1>
          </div>
          <div style="padding:40px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:rgba(240,237,232,0.55);font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;width:130px;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:14px;"><a href="mailto:${cleanEmail}" style="color:#00b898;">${cleanEmail}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:rgba(240,237,232,0.55);font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">Téléphone</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:14px;">${cleanPhone}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:rgba(240,237,232,0.55);font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">Métier</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:14px;">${cleanMetier}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:rgba(240,237,232,0.55);font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">Services</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:14px;">${cleanServices}</td>
              </tr>
            </table>
            <div style="margin-top:28px;">
              <p style="margin:0 0 10px;color:rgba(240,237,232,0.55);font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">Message</p>
              <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(0,143,120,0.2);border-radius:12px;padding:20px;font-size:14px;line-height:1.7;white-space:pre-wrap;">${cleanMessage}</div>
            </div>
            <div style="margin-top:32px;text-align:center;">
              <a href="mailto:${cleanEmail}" style="display:inline-block;background:linear-gradient(135deg,#008f78,#2b3475);color:#fff;text-decoration:none;padding:14px 32px;border-radius:12px;font-weight:700;font-size:14px;">Répondre à ${cleanName} →</a>
            </div>
          </div>
          <div style="padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
            <p style="margin:0;font-size:11px;color:rgba(240,237,232,0.3);">skypeo.fr · Nancy, France</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Réessayez ou contactez-nous directement." },
      { status: 500 },
    );
  }
}
