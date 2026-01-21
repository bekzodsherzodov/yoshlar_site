import React from "react";
import { FaGraduationCap, FaHandshake } from "react-icons/fa";
import { PiChartLineUpBold } from "react-icons/pi";
import { useLang } from "../../lang/LanguageContext";

export default function SectionFive({ id }) {
  const { t } = useLang();

  const cards = [
    {
      icon: <FaGraduationCap className="text-[#F24B4B] w-6 h-6" />,
      title: t("direction_education_title"),
      text: t("direction_education_text"),
    },
    {
      icon: <PiChartLineUpBold className="text-[#F24B4B] w-6 h-6" />,
      title: t("direction_acceleration_title"),
      text: t("direction_acceleration_text"),
    },
    {
      icon: <FaGraduationCap className="text-[#F24B4B] w-6 h-6" />,
      title: t("direction_investments_title"),
      text: t("direction_investments_text"),
    },
    {
      icon: <FaHandshake className="text-[#F24B4B] w-6 h-6" />,
      title: t("direction_partnerships_title"),
      text: t("direction_partnerships_text"),
    },
    {
      icon: <FaGraduationCap className="text-[#F24B4B] w-6 h-6" />,
      title: t("direction_analytics_title"),
      text: t("direction_analytics_text"),
    },
  ];

  return (
    <div id={id} className="max-w-[1344px] bg-[#252422] mx-auto mt-[72px] rounded-[48px] p-8">
  
      <div className="text-center mb-16">
        <h2 className="text-[40px] font-bold">
          <span className="text-[#F24B4B] block">{t("directions_title_1")}</span>
          <span className="text-white block mt-2">{t("directions_title_2")}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative bg-[#333230] rounded-[32px] pt-16 pb-8 px-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
       
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center shadow-lg">
                {card.icon}
              </div>
            </div>

      
            <h3 className="text-[24px] text-white font-semibold">{card.title}</h3>
            <p className="text-[#8E8E93] text-[20px] mt-2">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
