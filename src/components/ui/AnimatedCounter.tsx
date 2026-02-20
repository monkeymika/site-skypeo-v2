"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  to,
  from     = 0,
  duration = 1.8,
  prefix   = "",
  suffix   = "",
  className = "",
}: Props) {
  const ref     = useRef<HTMLSpanElement>(null);
  const inView  = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(from);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    let startTs: number;
    const ms = duration * 1000;

    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const elapsed  = ts - startTs;
      const progress = Math.min(elapsed / ms, 1);
      // Ease out quart
      const eased    = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
