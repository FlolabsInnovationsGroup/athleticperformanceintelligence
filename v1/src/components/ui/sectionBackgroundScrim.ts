/** Gradient overlay for full-bleed section backgrounds (content starts at top). */
export const sectionBackgroundScrimClass =
  "bg-gradient-to-b from-background/40 via-background/48 to-background/68 dark:from-background/55 dark:via-background/72 dark:to-background/88";

/** Stronger light-mode wash for very dark background images. */
export const heavySectionBackgroundScrimClass =
  "bg-gradient-to-b from-background/85 via-background/90 to-background/94 dark:from-background/55 dark:via-background/72 dark:to-background/88";

/** Lighter wash so faint diagram backgrounds remain visible. */
export const subtleSectionBackgroundScrimClass =
  "bg-gradient-to-b from-background/55 via-background/68 to-background/78 dark:from-background/62 dark:via-background/74 dark:to-background/86";

export type SectionBackgroundScrim = "default" | "heavy" | "subtle";

export function getSectionBackgroundScrimClass(
  scrim: SectionBackgroundScrim = "default",
): string {
  if (scrim === "heavy") return heavySectionBackgroundScrimClass;
  if (scrim === "subtle") return subtleSectionBackgroundScrimClass;
  return sectionBackgroundScrimClass;
}

/** Center-weighted scrim for hero sections with vertically centered copy. */
export const heroBackgroundScrimClass =
  "bg-gradient-to-b from-background/20 via-background/58 to-background/20 dark:from-background/45 dark:via-background/78 dark:to-background/45";

/** Eyebrow label on image-backed sections (darker brand in light mode). */
export const sectionEyebrowOnSurfaceClass =
  "text-xs font-semibold uppercase tracking-[0.2em] text-brand-on-surface";
