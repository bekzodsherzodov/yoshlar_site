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
      className="max-w-[1344px] mx-auto mt-6 bg-[#252422] rounded-[48px] p-6 md:p-12 relative overflow-hidden text-white"
    >
      <div className="flex flex-col md:flex-row justify-between items-center relative">
        <div className="grid grid-cols-2 gap-6 md:gap-10 flex-1">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold">{stat.value}</h2>
              <p
                className="text-sm md:text-base mt-1 text-gray-300"
                style={{ backgroundImage: `url(${bg})` }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="w-36 h-36 bg-red-600 rounded-full flex flex-col items-center justify-center text-white font-semibold text-center p-4 mt-6 md:mt-0 shadow-lg">
          <span className="text-xl md:text-2xl">{t("badge_years")}</span>
          <span className="text-sm md:text-base mt-1">{t("badge_experience")}</span>
        </div>
      </div>
    </motion.section>
  );
}

export default SectionT;
