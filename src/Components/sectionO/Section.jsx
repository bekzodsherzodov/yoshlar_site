import React from "react";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";
import bg from "./../../assets/img/people-taking-part-business-event 1.png";
import { motion } from "framer-motion";
import { useLang } from "../../lang/LanguageContext";

function Section({ id }) {
  const { t } = useLang();

  const socialIcons = [
    { icon: <FaYoutube />, link: "https://youtube.com" },
    { icon: <FaInstagram />, link: "https://bit.ly/2KzRsh0" },
    { icon: <FaFacebookF />, link: "https://bit.ly/2SsyIEL" },
    { icon: <SiTelegram />, link: "https://t.me/yoshtadbirkoruzb" },
  ];

  // ✅ Scroll to PartnerForm function
  const handleScrollToForm = () => {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-[1344px] mx-auto mt-6 px-4">

      <motion.section
        id={id}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-[32px] overflow-hidden min-h-[600px] md:min-h-[700px] bg-cover bg-center relative flex flex-col justify-end px-6 md:px-12 pb-10 md:pb-12"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        {/* H2 */}
        <div className="text-white z-10">
   <h2
  className="
    text-[28px] md:text-[48px]
    lg:text-[64px]
    font-bold
    leading-tight
    md:leading-[70px]
    lg:leading-[80px]
    lg:w-[998px]
    lg:h-[160px]
    break-words
    whitespace-normal
    w-full
  "
  style={{ fontFamily: "Manrope" }}
>
  {t("hero_title")}
</h2>
        </div>

        {/* BUTTON - ✅ onClick qo'shildi */}
        <div className="mt-8 z-10">
          <button 
            onClick={handleScrollToForm}
            className="flex items-center relative cursor-pointer hover:opacity-90 transition" 
            style={{ fontFamily: "Manrope" }}
          >
            
            {/* Qizil doira */}
            <span
              className="flex items-center justify-center relative z-10"
              style={{
                borderRadius: "100px",
                background: "#F24B4B",
                padding: "11px 24px",
                minWidth: "56px",
                height: "56px",
              }}
            >
              {/* MOBILE: text + arrow ichida */}
              <span className="flex items-center justify-center gap-2 text-white lg:hidden">
                <span
                  className="text-[20px] font-semibold"
                  style={{ lineHeight: "100%" }}
                >
                  {t("hero_btn")}
                </span>
                <FiArrowRight
                  className="text-white"
                  style={{
                    fontSize: "22px",
                    strokeWidth: 1.5,
                  }}
                />
              </span>
            </span>

            {/* DESKTOP: text + arrow alohida */}
            <span
              className="hidden lg:flex items-center text-white text-[20px] font-semibold relative z-20 -ml-8"
              style={{ lineHeight: "100%" }}
            >
              {t("hero_btn")}
              <FiArrowRight
                className="text-white"
                style={{
                  fontSize: "28px",
                  strokeWidth: 1.8,
                  marginLeft: "6px",
                }}
              />
            </span>
          </button>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:block absolute bottom-0  z-10 right-0">
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
          <div className="bg-white rounded-tl-[32px] px-6 py-6 flex gap-6">
            {socialIcons.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
                style={{
                  width: "53px",
                  height: "34px",
                  borderRadius: "28px",
                  background: "#FFFFFF",
                
                }}
              >
                <div
                  className="flex items-center justify-center relative left-6"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "#F1F2F4",
                    color: "#CCCCCC",
                    marginTop: "27px",
                    fontSize: "18px",
                  }}
                >
                  {item.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* MOBILE Social Icons */}
      <div className="flex justify-center mt-6 md:hidden">
        <div className="rounded-full px-5 py-3 flex gap-4">
          {socialIcons.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#F1F2F4] flex items-center justify-center text-gray-500 text-lg"
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