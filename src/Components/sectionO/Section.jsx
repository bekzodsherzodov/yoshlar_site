import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import bg from "./../../assets/img/people-taking-part-business-event 1.png";
import { motion } from "framer-motion";
import { useLang } from "../../lang/LanguageContext";

function Section() {
  const { t } = useLang();

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-[1344px] mx-auto rounded-[32px] mt-6 min-h-[600px] bg-cover bg-center flex items-end relative px-6 md:px-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mb-12 max-w-[700px]">
        <h2 className="text-[32px] md:text-[64px] text-white font-bold">
          {t("hero_title")}
        </h2>

        <div className="relative mt-6 w-fit cursor-pointer hover:scale-105 transition-all">
          <div className="absolute w-[230px] h-[66px]  bg-[#F24B4B] rounded-full lg:w-[50px] lg:h-[50px]  lg:mt-[10px]  lg:ml-[4px] xl:w-[50px] xl:h-[50px]  xl:mt-[10px] xl:ml-[4px]   md:w-[50px] md:h-[50px]  md:mt-[10px] md:ml-[4px]  sm:w-[50px] sm:h-[50px]  sm:mt-[10px] sm:ml-[4px]"></div>
          <p className="relative text-white flex items-center gap-2 pt-[17px]  text-[18px] md:text-[20px] ml-[24px]">
            {t("hero_btn")}  <FaArrowRightLong className="mt-[8px]" />
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Section;
