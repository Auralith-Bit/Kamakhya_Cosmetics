/** Figma is 1920px. Desktop target is 1280px (1280/1920). Scales down on smaller viewports. */
export const mfg = (px) => `calc(${px}px * var(--mfg-s))`;

export const mfgMin = (px, minPx) =>
  `max(${minPx}px, calc(${px}px * var(--mfg-s)))`;
