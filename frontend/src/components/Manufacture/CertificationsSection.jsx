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
      className="bg-white px-4 py-12 sm:px-8 sm:py-16 lg:px-8 lg:py-20 xl:px-16"
      aria-labelledby="cert-heading"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 lg:gap-[50px]">
        {/* Heading */}
        <div className="flex max-w-[948px] flex-col items-center gap-3 px-2 text-center">
          <p className="font-['Poppins'] text-[14px] font-semibold uppercase tracking-[2px] text-[#e38f2e] lg:text-[18px]">
            Our Certifications
          </p>

          <h2
            id="cert-heading"
            className="font-['Playfair_Display'] text-[26px] font-bold capitalize text-[#2e3192] lg:text-[34px]"
            style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
          >
            Built on Trust. Verified by Global Standards.
          </h2>

          <img
            src={imgWaveDecor}
            alt=""
            className="h-[20px] w-[140px] lg:h-[24px] lg:w-[172px]"
          />

          <p className="font-['Poppins'] text-[15px] font-medium text-[#666] lg:text-[18px]">
            Quality is more than a promise—it's independently verified. Our
            internationally recognized certifications ensure the highest
            standards of safety, performance, and excellence.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-5">
          {CERTS.map((cert) => (
            <div
              key={cert.code}
              className="flex flex-col items-center rounded-[10px] border border-[#d7dae4] bg-[#fcf9f2] py-5 shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.05),0px_8px_24px_-6px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0px_20px_50px_-8px_rgba(46,49,146,0.12)]"
            >
              {/* Certificate Logo */}
              <div className="h-[110px] w-[110px] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] xl:h-[130px] xl:w-[130px]">
                <img
                  src={cert.img}
                  alt={cert.code}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Card Text */}
              <div className="flex w-full flex-col items-center gap-4 px-3 pb-4 pt-3">
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="whitespace-nowrap font-['Poppins'] text-[15px] font-bold leading-[28px] text-[#2e3192] md:text-[13px] lg:text-[14px] xl:text-[17px]">
                    {cert.code}
                  </p>

                  <p
                    className="font-['Playfair_Display'] text-[16px] font-bold text-[#e38f2e] md:text-[14px] lg:text-[15px] xl:text-[18px]"
                    style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
                  >
                    {cert.title}
                  </p>

                  <p className="font-['Poppins'] text-[13px] leading-snug text-[#333] md:text-[11px] lg:text-[12px] xl:text-[15px]">
                    {cert.desc}
                  </p>
                </div>

                {/* Badge */}
                <img
                  src={cert.badgeIcon}
                  alt=""
                  className="h-9 w-9 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-10 xl:w-10"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
