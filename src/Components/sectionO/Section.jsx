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
    { icon: <FaYoutube />, link: "https://youtube.com" },
    { icon: <FaInstagram />, link: "https://bit.ly/2KzRsh0" },
    { icon: <FaFacebookF />, link: "https://bit.ly/2SsyIEL" },
    { icon: <SiTelegram />, link: "https://clck.ru/RXoK9" },
  ];

  return (
    <div className="max-w-[1344px] mx-auto mt-6 px-4">

      {/* HERO SECTION */}
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-[32px] min-h-[600px] md:min-h-[700px] bg-cover bg-center relative flex flex-col justify-end px-6 md:px-12 pb-10 md:pb-12 overflow-hidden"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/30" />

        <div className="max-w-3xl text-white z-10">
          <h2 className="text-[28px] md:text-[56px] lg:text-[64px] font-bold leading-tight">
            {t("hero_title")}
          </h2>
        </div>

        <div className="mt-8 z-10">
          <button className="flex items-center text-white group relative">
            <span className="w-7 h-7 rounded-full bg-[#F24B4B] shrink-0" />
            <span className="-ml-4 text-sm font-medium">
              {t("hero_btn")}
            </span>
            <FaArrowRightLong className="text-white text-sm ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Desktop version (inside, bottom right) */}
        <div className="hidden md:block absolute bottom-0 right-0 z-10">
          <div
            className="absolute bottom-full right-0 w-8 h-8"
            style={{
              boxShadow: "8px 8px 0 8px white",
              borderRadius: "0 0 100% 0",
            }}
          />
          <div
            className="absolute bottom-0 right-full w-8 h-8"
            style={{
              boxShadow: "8px 8px 0 8px white",
              borderRadius: "0 0 100% 0",
            }}
          />
          <div className="bg-white rounded-tl-[32px] px-6 py-4 flex gap-3">
            {socialIcons.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-lg hover:scale-110 hover:bg-gray-200 transition-all"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ✅ MOBILE VERSION — SECTION TASHQARISIDA */}
      <div className="flex justify-center mt-6 md:hidden">
        <div className=" rounded-full px-5 py-3 flex gap-4 ">
          {socialIcons.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-lg hover:scale-110 hover:bg-gray-200 transition-all"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Section;
