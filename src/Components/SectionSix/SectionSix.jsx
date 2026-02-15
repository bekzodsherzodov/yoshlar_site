import React from "react";
import { useLang } from "../../lang/LanguageContext";

import logo1 from "../../assets/img/Logo(1).png";
import logo2 from "../../assets/img/Logo(2).png";
import logo3 from "../../assets/img/Logo(3).png";
import logo4 from "../../assets/img/Logo(4).png";
import logo5 from "../../assets/img/Logo(5).png";
import logo6 from "../../assets/img/Logo(6).png";
import logo7 from "../../assets/img/Logo(7).png";
import logo8 from "../../assets/img/Logo(8).png";
import logo9 from "../../assets/img/Logo(9).png";
import logo10 from "../../assets/img/Logo(10).png";
import logo11 from "../../assets/img/Logo(11).png";
import logo12 from "../../assets/img/Logo(12).png";
import logo13 from "../../assets/img/Logo(13).png";
import logo14 from "../../assets/img/Logo(14).png";
import logo15 from "../../assets/img/Logo(15).png";
import logo16 from "../../assets/img/Logo(16).png";
import logo17 from "../../assets/img/Logo(17).png";
import logo18 from "../../assets/img/Logo(18).png";
import logo19 from "../../assets/img/Logo100.png";

function SectionSix({ id }) {
  const { t } = useLang();

  const allLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo13, logo14, logo15, logo16, logo17, logo18
  ];

  const firstLogosDesktop = allLogos.slice(0, 3); // desktop: 3 logo
  const firstLogosMobile = allLogos.slice(0, 2);  // mobile: 2 logo
  const restLogosDesktop = allLogos.slice(3);     // desktop: grid logolar (3–18)
  const mobileLogos = [...firstLogosMobile, ...restLogosDesktop, logo19]; // mobile: barcha logolar, logo19 qo'shiladi

  return (
    <section
      id={id}
      className="
        w-full
        min-h-[800px] md:min-h-0
        max-w-[90%] sm:max-w-[90%] md:max-w-[1344px]
        mx-auto mt-12 bg-[#252422] rounded-[20px] md:rounded-[48px]
        px-8 md:px-12 py-8 md:py-12"
    >
      {/* Desktop: Text + 3 logo */}
      <div className="hidden md:flex items-start justify-between gap-6 mb-12">
        <div className="max-w-md text-left flex-shrink-0 mt-10 ">
          <h2 className="text-[40px] font-bold text-white leading-snug">
            <span className="text-[#F24B4B]">{t("partnership_title")}</span>
            <br />
            {t("partnership_subtitle")}
          </h2>
        </div>

        <div className="flex gap-8 mt-15">
          {firstLogosDesktop.map((logo, index) => (
            <div
              key={index}
              className="w-[220px] h-[120px] flex items-center justify-center"
            >
              <img
                src={logo}
                alt="logo"
                className="max-h-[100px] max-w-full object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Text alohida */}
      <div className="md:hidden mb-6">
        <h2 className="text-[18px] font-bold text-white text-left leading-snug">
          <span className="text-[#F24B4B]">{t("partnership_title")}</span>
          <br />
          {t("partnership_subtitle")}
        </h2>
      </div>

      {/* Mobile: Barcha logolar gridda tekis joylashgan */}
      <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
        {mobileLogos.map((logo, index) => (
          <div
            key={index}
            className="w-[120px] h-[60px] flex items-center justify-center"
          >
            <img
              src={logo}
              alt="logo"
              className="max-h-[50px] max-w-full object-contain opacity-80 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Desktop: Qolgan logolar grid */}
      <div className="hidden md:grid grid-cols-5 gap-6 justify-items-center my-[-40px]">
        {restLogosDesktop.map((logo, index) => (
          <div
            key={index}
            className="w-[140px] h-[70px] flex items-center justify-center"
          >
            <img
              src={logo}
              alt="logo"
              className="max-h-[50px] max-w-full object-contain opacity-80 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionSix;