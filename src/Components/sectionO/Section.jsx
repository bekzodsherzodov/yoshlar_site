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
    {
      icon: <FaYoutube />,
      link: "https://youtube.com",
    },
    {
      icon: <FaInstagram />,
      link: "https://bit.ly/2KzRsh0",
    },
    {
      icon: <FaFacebookF />,
      link: "https://bit.ly/2SsyIEL",
    },
    {
      icon: <SiTelegram />,
      link: "https://clck.ru/RXoK9",
    },
  ];

  return (
    <div className="max-w-[1344px] mx-auto relative mt-6">
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-[32px] min-h-[600px] md:min-h-[700px] bg-cover bg-center relative flex flex-col justify-end px-6 md:px-12 pb-10 md:pb-12 overflow-hidden"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Title */}
        <div className="max-w-3xl text-white z-10">
          <h2 className="text-[32px] md:text-[56px] lg:text-[64px] font-bold leading-tight">
            {t("hero_title")}
          </h2>
        </div>

        {/* CTA button */}
        <div className="mt-8 z-10">
          <button className="flex items-center text-white group relative">
            <span className="w-7 h-7 rounded-full bg-[#F24B4B] shrink-0" />
            <span className="-ml-4 text-sm font-medium">{t("hero_btn")}</span>
            <FaArrowRightLong className="text-white text-sm ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* White cutout in bottom-right */}
        <div className="absolute bottom-0 right-0 z-10">
          {/* Curved edge - horizontal */}
          <div
            className="absolute bottom-full right-0 w-8 h-8"
            style={{
              background: "radial-gradient(circle at top left, transparent 100%, white 0)",
              backgroundSize: "100% 100%",
            }}
          />
          <div
            className="absolute bottom-full right-0 w-8 h-8"
            style={{
              boxShadow: "8px 8px 0 8px white",
              borderRadius: "0 0 100% 0",
            }}
          />
          {/* Curved edge - vertical */}
          <div
            className="absolute bottom-0 right-full w-8 h-8"
            style={{
              boxShadow: "8px 8px 0 8px white",
              borderRadius: "0 0 100% 0",
            }}
          />
          {/* White background area */}
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
    </div>
  );
}

export default Section;
