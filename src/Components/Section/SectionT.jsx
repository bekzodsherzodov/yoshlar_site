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
      className="
        w-full 
        max-w-[90%] sm:max-w-[89%] md:max-w-[1320px] 
        mx-auto mt-6 bg-[#252422] rounded-[40px] 
        relative overflow-hidden text-white
        py-10
      "
    >
      {/* Background */}
      <img
        src={bg}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none select-none"
      />

      {/* FLEX CONTAINER */}
      <div className="
        relative z-10 
        flex flex-col lg:flex-row
        items-center justify-center lg:justify-start
        px-6 md:px-12 py-10 gap-10
      ">

        {/* Stats */}
        <div className="
          grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 
          gap-x-6 sm:gap-x-8 lg:gap-x-10
          gap-y-6 sm:gap-y-8 lg:gap-y-8
          w-full lg:w-auto
          justify-items-center lg:justify-items-start
        ">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center lg:text-left mt-3 mb-3">
              {/* Number */}
              <h2
                className="font-bold w-full text-[32px] sm:text-[40px] md:text-[48px] leading-[100%]"
                style={{ fontFamily: "Manrope", fontWeight: 700 }}
              >
                {stat.value}
              </h2>
              {/* Label */}
              <p
                className="mt-2 sm:mt-3 text-gray-300 w-full text-[14px] sm:text-[16px] md:text-[20px] leading-[100%]"
                style={{ fontFamily: "Manrope", fontWeight: 400 }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 🔴 Qizil doira */}
        <div
          className="
            flex flex-col items-center justify-center text-center shadow-2xl
            relative
            w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[270px] md:h-[270px]
            rounded-[100px] sm:rounded-[110px] md:rounded-[131px]
            left-0 md:left-[150px]  // mobile = 0, desktop = chapga surish
          "
          style={{
            backgroundColor: "#F24B4B",
            paddingTop: "59px",
            paddingRight: "28px",
            paddingBottom: "59px",
            paddingLeft: "28px",
            gap: "10px",
          }}
        >
          <span
            className="text-[48px] sm:text-[56px] md:text-[64px] font-bold leading-[100%] text-center lg:w-[163px] lg:h-[87px]"
            style={{ fontFamily: "Manrope", fontWeight: 700 }}
          >
            {t("badge_years")}
          </span>
          <span
            className="text-[20px] font-regular leading-[100%] text-center lg:w-[206px] lg:h-[27px]"
            style={{ fontFamily: "Manrope", fontWeight: 400 }}
          >
            {t("badge_experience")}
          </span>
        </div>
      </div>
    </motion.section>
  );
}

export default SectionT;
