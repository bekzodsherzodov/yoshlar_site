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
    <div
  id={id}
  className="
    w-full
    max-w-[90%] sm:max-w-[90%] md:max-w-[1344px]
    mx-auto mt-[72px] 
    bg-[#252422] rounded-[48px] 
    p-6 md:p-10
  "
>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
    {/* Title cell */}
    <div className="flex items-center p-6">
      <h2 className="text-[32px] md:text-[40px] font-bold leading-tight">
        <span className="text-[#F24B4B]">{t("directions_title_1")}</span>
        <br />
        <span className="text-white">{t("directions_title_2")}</span>
      </h2>
    </div>

    {cards.map((card, idx) => (
      <div
        key={idx}
        className="relative transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {/* Card body */}
        <div className="bg-[#333230] rounded-[24px] p-6 h-full">
       <h3
  className="text-white pr-12"
  style={{
    fontFamily: "Manrope",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "30px",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  }}
>
  {card.title}
</h3>
         <p
  className="text-[#8E8E93] mt-4"
  style={{
    fontFamily: "Manrope",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "150%",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  }}
>
  {card.text}
</p>


        </div>

        {/* Icon in top-right corner with inverse radius */}
        <div className="absolute top-0 right-0 z-10">
          {/* Curved edge - bottom */}
          <div
            className="absolute top-full right-0 w-8 h-8 z-0"
            style={{
              boxShadow: "8px -8px 0 8px #252422",
              borderRadius: "0 100% 0 0",
            }}
          />
          {/* Curved edge - left */}
          <div
            className="absolute top-0 right-full w-8 h-8 z-0"
            style={{
              boxShadow: "8px -8px 0 8px #252422",
              borderRadius: "0 100% 0 0",
            }}
          />
          {/* Icon circle */}
          <div className="bg-[#252422] rounded-bl-[38px] pl-3 pb-3 relative z-10">
            <div className="w-12 h-12 bg-[#3e3e3b] rounded-full flex items-center justify-center">
              {card.icon}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
