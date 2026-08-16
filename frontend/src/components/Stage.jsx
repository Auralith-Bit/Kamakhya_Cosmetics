/**
 * FILE : frontend/src/components/Stage.jsx
 * ROLE : one source of responsiveness for ALL design-locked sections
 *        ≥1024px → exact 1920×H Figma frame, scaled uniformly by vw/1920
 *        <1024px → children render as-is (stacked fluid tiers)
 */
import React, { useEffect, useState } from "react";

export const DESIGN_WIDTH = 1920;

const Stage = ({ height, id, className = "", style, breakpoint = 1024, children }) => {
  const [vw, setVw] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : DESIGN_WIDTH
  );

  useEffect(() => {
    let raf;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setVw(window.innerWidth));
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  const desktop = vw >= breakpoint;
  const scale = vw / DESIGN_WIDTH;

  return (
    <section
      id={id}
      className={className}
      style={desktop ? { ...style, height: Math.round(height * scale) } : style}
    >
      {desktop ? (
        /* pixel-proportional copy of the Figma frame at any width */
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            width: DESIGN_WIDTH,
            height,
            position: "relative",
          }}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default Stage;