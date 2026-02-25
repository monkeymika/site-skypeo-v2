import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Skypeo – N°1 sur les automatisations à Nancy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b0117",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,143,120,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,143,120,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -100,
            width: 800,
            height: 800,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,143,120,0.18) 0%, transparent 65%)",
          }}
        />
        {/* Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 24,
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#008f78",
          }}
        >
          Nancy · Grand Est
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            color: "#f0ede8",
            marginBottom: 32,
            maxWidth: 900,
          }}
        >
          Sites web &{" "}
          <span style={{ color: "#008f78" }}>automatisations</span>
          {" "}pour les pros.
        </div>
        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: "rgba(240,237,232,0.70)",
            marginBottom: 48,
            maxWidth: 700,
          }}
        >
          Gagnez du temps, soyez visible, développez votre activité.
        </div>
        {/* Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: "linear-gradient(135deg, #008f78, #2b3475)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 900,
              color: "white",
            }}
          >
            S
          </div>
          <span
            style={{
              fontSize: 28,
              fontWeight: 900,
              letterSpacing: "0.15em",
              color: "#f0ede8",
            }}
          >
            SKYPEO
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
