import React from "react";
import bg from "./../../assets/img/bgSc2.png";
import { motion } from "framer-motion";
import { useLang } from "../../lang/LanguageContext";

function SectionT({ id }) {
  const { t } = useLang();

  const stats = [
    { value: "50+", label: t("stats_projects") },
    { value: "500 000+", label: t("stats_entrepreneurs") },
    { value: "$8,5 млн", label: t("stats_investments") },
    { value: "20+", label: t("stats_partners") },
  ];

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-[1344px] mx-auto mt-6 bg-[#252422] rounded-[40px] relative overflow-hidden text-white"
    >
      {/* Background map */}
      <img
        src={bg}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none select-none"
      />

      <div className="relative z-10 flex items-center justify-between px-12 py-10">
        
        {/* Statlar */}
        <div className="grid grid-cols-2 gap-x-20 gap-y-10">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h2 className="text-4xl font-bold">{stat.value}</h2>
              <p className="text-sm text-gray-300 mt-1 max-w-[200px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 🔴 Qizil doira — centerga YAQIN */}
        <div className="w-[180px] h-[180px] -ml-20 bg-[#F24B4B] rounded-full flex flex-col items-center justify-center text-center shadow-2xl">
          <span className="text-6xl font-bold leading-none -ml-3">
            9
          </span>
          <span className="text-sm mt-1 leading-tight px-6">
            {t("badge_experience")}
          </span>
        </div>

      </div>
    </motion.section>
  );
}

export default SectionT;
