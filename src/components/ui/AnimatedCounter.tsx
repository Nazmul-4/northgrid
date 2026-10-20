"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  label,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500; // total animation time in milliseconds
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1); // caps at 1 (100%)
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-white md:text-5xl">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}