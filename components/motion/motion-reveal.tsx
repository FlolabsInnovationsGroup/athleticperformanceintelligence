"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, reducedFade } from "@/lib/motion";
import { cn } from "@/lib/utils";

type MotionRevealProps = HTMLMotionProps<"div"> & {
  className?: string;
  /** Stagger index for scroll-reveal sequencing (multiplied internally). */
  staggerIndex?: number;
  children: React.ReactNode;
};

export function MotionReveal({
  className,
  staggerIndex = 0,
  children,
  ...props
}: MotionRevealProps) {
  const reduce = useReducedMotion();
  const variants = reduce ? reducedFade : fadeUp;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      custom={staggerIndex}
      {...props}
    >
      {children}
    </motion.div>
  );
}
