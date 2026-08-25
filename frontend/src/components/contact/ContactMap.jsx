import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import rect78 from "../../assets/Rectangle 78.png";

const sans = "'Poppins', 'Segoe UI', sans-serif";

/* shop coordinates — Tilottama-06, Manigram */
const CENTER = [27.6469, 83.5147];

/* the full design stack: image card → green panel → arrow → blue pin */
const markerHtml = `
<div class="mp-marker">
  <div class="mp-card">
    <img src="${rect78}" alt="Kamakhya Cosmetics storefront" />
    <div class="mp-green">
      <div class="mp-name"><span class="b">Kamakhya</span> <span class="o">Cosmetics</span></div>
      <div class="mp-addr">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"/></svg>
        Tilottama–06,Manigram,Nepal
      </div>
      <div class="mp-dist">1.3 km away from here</div>
    </div>
  </div>
  <div class="mp-arrow"></div>
  <div class="mp-pin">
    <svg viewBox="0 0 24 24" fill="#2196F3"><path d="M12 1.5a7.5 7.5 0 0 0-7.5 7.5c0 5.6 7.5 13.5 7.5 13.5S19.5 14.6 19.5 9A7.5 7.5 0 0 0 12 1.5Z"/><circle cx="12" cy="9" r="3" fill="#BBDEFB"/></svg>
  </div>
</div>`;

const ContactMap = () => {
  const boxRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!boxRef.current || mapRef.current) return;

    /* interactive map with the SAME tiles as the design */
    const map = L.map(boxRef.current, { scrollWheelZoom: true }).setView(CENTER, 14);
    L.tileLayer("https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      subdomains: ["0", "1", "2", "3"],
      maxZoom: 20,
      attribution: "© Google",
    }).addTo(map);

    /* custom design marker — anchored at the blue pin tip, moves with the map */
    const makeIcon = (size, anchor) =>
      L.divIcon({ className: "mp-divicon", html: markerHtml, iconSize: size, iconAnchor: anchor });

    const marker = L.marker(CENTER, { icon: makeIcon(null, null), interactive: false, keyboard: false }).addTo(map);

    /* measure once rendered, then pin the tip exactly on the coordinate */
    requestAnimationFrame(() => {
      const el = marker.getElement()?.firstElementChild;
      if (el) marker.setIcon(makeIcon([el.offsetWidth, el.offsetHeight], [el.offsetWidth / 2, el.offsetHeight]));
    });

    mapRef.current = map;
    return () => { map.remove(); mapRef.current = null; };
  }, []);

  return (
    <section id="contact-map" className="mp-sec">
      <style>{`
        /* ============ frame (same as before) ============ */
        .mp-sec{width:100%;position:relative;background:#F5F6F8;}
        .mp-frame{position:relative;width:100%;height:23.8vw;min-height:320px;
          border-top:0.0521vw solid #CCA466;border-bottom:0.0521vw solid #CCA466;
          overflow:hidden;box-shadow:0 0.8vw 1.6vw rgba(0,0,0,0.12);}
        .mp-map{position:absolute;inset:0;z-index:1;}

        /* ============ custom marker (design stack, px-stable) ============ */
        .mp-divicon{background:transparent;border:none;}
        .mp-marker{width:230px;display:flex;flex-direction:column;align-items:center;
          filter:drop-shadow(0 6px 14px rgba(0,0,0,0.35));font-family:${sans};}
        .mp-marker .mp-card{width:230px;border-radius:10px;overflow:hidden;}
        .mp-marker .mp-card img{width:100%;height:110px;object-fit:cover;display:block;}
        .mp-marker .mp-green{background:#4CAF50;padding:12px 14px;color:#fff;}
        .mp-marker .mp-name{font-size:14px;font-weight:600;letter-spacing:0.01em;white-space:nowrap;}
        .mp-marker .mp-name .b{color:#2E3192;}
        .mp-marker .mp-name .o{color:#FF9800;}
        .mp-marker .mp-addr{display:flex;align-items:center;gap:5px;margin-top:6px;
          font-size:12px;color:#fff;white-space:nowrap;}
        .mp-marker .mp-addr svg{width:13px;height:13px;color:#E8F5E9;flex-shrink:0;}
        .mp-marker .mp-dist{margin-top:5px;font-size:11px;color:#E8F5E9;}
        .mp-marker .mp-arrow{width:0;height:0;border-left:12px solid transparent;
          border-right:12px solid transparent;border-top:14px solid #4CAF50;}
        .mp-marker .mp-pin{width:42px;height:42px;margin-top:6px;}
        .mp-marker .mp-pin svg{width:100%;height:100%;}

        /* ============ MOBILE+TABLET ≤1023 ============ */
        @media (max-width:1023px){
          .mp-frame{height:64vw;min-height:280px;}
        }
      `}</style>

      <div className="mp-frame">
        <div ref={boxRef} className="mp-map" />
      </div>
    </section>
  );
};

export default ContactMap;