import React from "react";
import { useLang } from "../../lang/LanguageContext";

import gss from "/src/assets/img/person.2.fill.svg";
import logichka from "/src/assets/img/lightbulb.fill.svg";
import dollar from "/src/assets/img/dollarsign.circle.fill.svg";
import building from "/src/assets/img/building.columns.fill.svg";
import link from "/src/assets/img/link.svg";
import globe from "/src/assets/img/globe.europe.africa.fill.svg";

import l from "/src/assets/img/Vector.svg";
import l1 from "/src/assets/img/Vector(1).svg";
import l2 from "/src/assets/img/Vector(2).svg";
import l3 from "/src/assets/img/Vector(3).svg";

const items = [
  { text: "Предприниматели", img: gss, y: 60 },
  { text: "Стартап-инициативы", img: logichka, y: 120 },
  { text: "Инвестиционные институты", img: dollar, y: 180 },
  { text: "Государственные органы", img: building, y: 240 },
  { text: "Партнёрские организации", img: link, y: 300 },
  { text: "Международная среда", img: globe, y: 360 },
];

function SectionThree() {
  const { t } = useLang();

  return (
    <section className="max-w-[1344px] mx-auto px-4 md:px-0 mt-16">
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* TEXT — mobile’da yuqorida */}
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#F24B4B]">{t("site_name")}</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            {t("about_text")}
          </p>
        </div>

        {/* IMG + MA’LUMOTLAR — mobile’da pastda */}
        <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col items-center gap-6">

          {/* SVG */}
          <svg
            viewBox="0 0 700 420"
            className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-4xl h-auto"
          >
            {/* Markaz */}
            <circle cx="200" cy="210" r="92" fill="none" stroke="#e5e7eb" strokeWidth="2" />
            <circle cx="200" cy="210" r="120" fill="#111"   />

            <image href={l} x="175" y="145" width="50" height="50" />
            <image href={l1} x="175" y="170" width="50" height="50" />
            <image href={l2} x="167" y="220" width="28" height="50" />
            <image href={l3} x="200" y="220" width="30" height="50" />

            {/* Desktop’da boxlar SVG ichida */}
            <g className="hidden  md:block" >
              {items.map((item, index) => (
                <g key={index}>
                  <circle   cx="292"  cy="210" r="10" fill="#d1d5db"  />
                  <line
                    x1="292"
                    y1="210"
                    x2="420"
                    y2={item.y}
                    stroke="#d1d5db"
                    strokeWidth="2"
                    strokeDasharray="4 6"
                  />
                  <g transform={`translate(432, ${item.y - 20})`}>
                    <rect width="230" height="40" rx="20" fill="#f3f4f6" />
                    <image href={item.img} x="12" y="8" width="24" height="24" />
                    <text x="44" y="26" className="fill-gray-800 text-sm font-medium">
                      {item.text}
                    </text>
                  </g>
                </g>
              ))}
            </g>
          </svg>

          {/* MOBILE’DA — MA’LUMOTLAR SVG PASTIDA */}
          <div className="w-full space-y-3 md:hidden">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gray-100 rounded-2xl px-4 py-3"
              >
                <img src={item.img} alt="" className="w-6 h-6" />
                <span className="text-gray-800 font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default SectionThree;
