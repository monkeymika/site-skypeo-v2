"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed canvas behind all content.
 * Dark mode  → particles clearly visible against #0b0117.
 * Light mode → very subtle (low opacity).
 */
export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let animId: number;
    let cleanup: (() => void) | null = null;

    const init = async () => {
      const THREE = await import("three");
      const mount = mountRef.current;
      if (!mount) return;

      const W = window.innerWidth;
      const H = window.innerHeight;

      /* ── Scene ──────────────────────────────── */
      const scene = new THREE.Scene();

      /* ── Camera ─────────────────────────────── */
      const camera = new THREE.PerspectiveCamera(70, W / H, 0.1, 1000);
      camera.position.z = 32;

      /* ── Renderer ────────────────────────────── */
      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      /* ── Particles ───────────────────────────── */
      const COUNT = 1800;
      const positions = new Float32Array(COUNT * 3);
      const colors = new Float32Array(COUNT * 3);
      const speeds = new Float32Array(COUNT);

      const green = new THREE.Color("#008f78");
      const blue = new THREE.Color("#2b3475");
      const violet = new THREE.Color("#4a1a6e");

      for (let i = 0; i < COUNT; i++) {
        /* Scatter in a sphere shell */
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 18 + Math.random() * 28;

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);

        /* Color mix */
        const t = Math.random();
        const c = t < 0.45 ? green : t < 0.72 ? blue : violet;
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;

        speeds[i] = 0.4 + Math.random() * 0.6;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3),
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.18,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      /* Subtle grid helper lines (optional decorative ring) */
      const ringGeo = new THREE.TorusGeometry(22, 0.05, 8, 80);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x008f78,
        transparent: true,
        opacity: 0.06,
      });
      const ring1 = new THREE.Mesh(ringGeo, ringMat);
      ring1.rotation.x = Math.PI / 4;
      scene.add(ring1);

      const ring2 = new THREE.Mesh(ringGeo.clone(), ringMat.clone());
      ring2.rotation.x = -Math.PI / 3;
      ring2.rotation.y = Math.PI / 6;
      scene.add(ring2);

      /* ── Mouse parallax ─────────────────────── */
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("mousemove", onMouseMove, { passive: true });

      /* ── Resize ──────────────────────────────── */
      const onResize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      /* ── Dark mode opacity ───────────────────── */
      const updateOpacity = () => {
        const dark = document.documentElement.classList.contains("dark");
        material.opacity = dark ? 0.6 : 0.28;
        ringMat.opacity = dark ? 0.1 : 0.04;
      };
      updateOpacity();

      const observer = new MutationObserver(updateOpacity);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      /* ── Animation loop ──────────────────────── */
      let t = 0;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.003;

        /* Smooth mouse follow */
        targetX += (mouseX - targetX) * 0.03;
        targetY += (mouseY - targetY) * 0.03;

        points.rotation.x = t * 0.04 + targetY * 0.08;
        points.rotation.y = t * 0.06 + targetX * 0.08;

        ring1.rotation.z = t * 0.12;
        ring2.rotation.z = -t * 0.08;

        renderer.render(scene, camera);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        observer.disconnect();
        renderer.dispose();
        geometry.dispose();
        material.dispose();
        ringGeo.dispose();
        ringMat.dispose();
        if (mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
      };
    };

    init();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
