import {
  imgWaveDecor,
  imgCertISO,
  imgCertGMP,
  imgCertQA,
  imgCertHACCP,
  imgCertSustain,
  imgCertBadge,
  imgCertBadge2,
  imgCertBadge3,
  imgCertBadge4,
} from "../../assets/figmaAssets";
import { contentMax, fluid, pagePadX, s } from "./figmaScale";

const CERTS = [
  {
    img: imgCertISO,
    code: "ISO 9001:2015",
    title: "Quality Management",
    desc: "International standards ensuring consistent product quality.",
    badgeIcon: imgCertBadge,
  },
  {
    img: imgCertGMP,
    code: "GMP Certified",
    title: "Manufacturing Excellence",
    desc: "Produced under strict hygiene and manufacturing practices.",
    badgeIcon: imgCertBadge2,
  },
  {
    img: imgCertQA,
    code: "Quality Assurance",
    title: "100% Batch Tested",
    desc: "Inspected through rigorous quality assurance before final packaging.",
    badgeIcon: imgCertBadge3,
  },
  {
    img: imgCertHACCP,
    code: "HACCP Certified",
    title: "Safety Standards",
    desc: "Maintained through strict preventive quality control practices.",
    badgeIcon: imgCertBadge,
  },
  {
    img: imgCertSustain,
    code: "Sustainable Practices",
    title: "Eco-Friendly Production",
    desc: "Responsible manufacturing with strong environmental commitment.",
    badgeIcon: imgCertBadge4,
  },
];

const CertificationsSection = () => {
  return (
    <section
      className="bg-white"
      style={{
        paddingLeft: pagePadX,
        paddingRight: pagePadX,
        paddingTop: fluid(100, 40),
        paddingBottom: fluid(70, 32),
      }}
      aria-labelledby="cert-heading"
    >
      <div
        className="mx-auto flex w-full flex-col items-center"
        style={{ maxWidth: contentMax, gap: fluid(50, 24) }}
      >
        <div
          className="flex w-full flex-col items-center text-center"
          style={{ maxWidth: s(948) }}
        >
          <p
            className="font-['Poppins'] font-semibold uppercase text-[#e38f2e]"
            style={{ fontSize: fluid(18, 13), letterSpacing: "0.12em" }}
          >
            Our Certifications
          </p>

          <h2
            id="cert-heading"
            className="font-['Playfair_Display'] font-bold capitalize text-[#2e3192]"
            style={{
              fontSize: fluid(36, 22),
              fontVariationSettings: '"opsz" 12, "wdth" 100',
            }}
          >
            Built on Trust. Verified by Global Standards.
          </h2>

          <img
            src={imgWaveDecor}
            alt=""
            style={{ height: s(24), width: s(172) }}
          />

          <p
            className="font-['Poppins'] font-medium text-[#666]"
            style={{ fontSize: fluid(20, 14) }}
          >
            Quality is more than a promise—it's independently verified. Our
            internationally recognized certifications ensure the highest
            standards of safety, performance, and excellence.
          </p>
        </div>

        <div
          className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
          style={{ gap: fluid(40, 16) }}
        >
          {CERTS.map((cert) => (
            <div
              key={cert.code}
              className="flex w-full flex-col items-center border border-[#d7dae4] bg-[#fcf9f2] shadow-[0px_8px_24px_-6px_rgba(0,0,0,0.08),0px_20px_50px_-12px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0px_20px_50px_-8px_rgba(46,49,146,0.12)]"
              style={{
                borderRadius: s(10),
                paddingTop: s(20),
                paddingBottom: s(20),
                maxWidth: "100%",
              }}
            >
              <div style={{ height: s(150), width: s(150) }}>
                <img
                  src={cert.img}
                  alt={cert.code}
                  className="h-full w-full object-contain"
                />
              </div>

              <div
                className="flex w-full flex-col items-stretch"
                style={{ gap: s(10), padding: s(10) }}
              >
                <div className="flex flex-col items-center" style={{ gap: s(20) }}>
                  <div
                    className="flex flex-col items-center text-center"
                    style={{ gap: s(10) }}
                  >
                    <p
                      className="font-['Poppins'] font-bold text-[#2e3192]"
                      style={{ fontSize: fluid(18, 14), lineHeight: s(32) }}
                    >
                      {cert.code}
                    </p>

                    <p
                      className="font-['Playfair_Display'] font-bold text-[#e38f2e]"
                      style={{
                        fontSize: fluid(22, 15),
                        fontVariationSettings: '"opsz" 12, "wdth" 100',
                      }}
                    >
                      {cert.title}
                    </p>

                    <p
                      className="font-['Poppins'] font-normal text-[#333]"
                      style={{ fontSize: fluid(18, 13) }}
                    >
                      {cert.desc}
                    </p>
                  </div>

                  <img
                    src={cert.badgeIcon}
                    alt=""
                    style={{ height: s(40), width: s(40) }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
