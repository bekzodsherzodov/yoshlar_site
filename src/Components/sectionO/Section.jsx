import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import bg from "./../../assets/img/people-taking-part-business-event 1.png";
import { motion } from "framer-motion";
import { useLang } from "../../lang/LanguageContext";

function Section({ id }) {
  const { t } = useLang();

  const socialIcons = [
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaFacebookF />, link: "#" },
    { icon: <SiTelegram />, link: "#" },
  ];

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-[1344px] mx-auto rounded-[32px] mt-6 min-h-[600px] bg-cover bg-center relative flex items-center px-6 md:px-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
   
      <div className="flex-1 max-w-lg text-white z-10">
        <h2 className="text-[32px] md:text-[64px] font-bold leading-snug">
          {t("hero_title")}
        </h2>

        <button className="mt-8 flex items-center gap-2 bg-[#F24B4B] px-6 py-4 rounded-full hover:bg-[#d53a3a] transition-transform duration-300">
          {t("hero_btn")} <FaArrowRightLong />
        </button>
      </div>

      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
        {socialIcons.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#F24B4B] hover:scale-110 transition-transform"
          >
            {item.icon}
          </a>
        ))}
      </div>

  
      <div className="absolute inset-0 bg-black/30 rounded-[32px]" />
    </motion.section>
  );
}

export default Section;
