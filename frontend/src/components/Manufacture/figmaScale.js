/** Figma canvas is 1920px. Manufacturing desktop target is 1280px (2/3). */
export const FIGMA_W = 1920;
export const VIEW_W = 1280;
export const SCALE = VIEW_W / FIGMA_W;

export const s = (px) => `${Math.round(px * SCALE * 100) / 100}px`;

export const fluid = (px, minPx) => {
  const max = Math.round(px * SCALE * 100) / 100;
  const min = minPx ?? Math.min(max, Math.max(12, Math.round(px * 0.5)));
  const vw = (px / FIGMA_W) * 100;
  return `clamp(${min}px, ${vw}vw, ${max}px)`;
};

export const pagePadX = fluid(170, 16);
export const contentMax = s(1580);
