"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function StatCounter({
  target,
  suffix = "",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    if (inView) {
      const controls = animate(count, target, { duration: 1.1, ease: "easeOut" });
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
    return unsubscribe;
  }, [inView, target, count, rounded]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <span className="h-2 w-2 rounded-full bg-green" />
      <motion.div className="font-display text-[2.75rem] font-extrabold text-green leading-none">
        {display}
        {suffix}
      </motion.div>
      <p className="max-w-[180px] text-sm text-text-secondary">{label}</p>
    </div>
  );
}
