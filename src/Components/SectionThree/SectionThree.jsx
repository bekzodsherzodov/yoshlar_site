import React from "react";
import { useLang } from "../../lang/LanguageContext";

import imageRu from "/src/assets/img/image_ru.svg";
import imageEn from "/src/assets/img/image_en.svg";
import imageUz from "/src/assets/img/image_uz.svg";
import imageCh from "/src/assets/img/image_ch.svg";

import mobileRu from "/src/assets/img/mobile_ru.svg";
import mobileEn from "/src/assets/img/mobile_en.png";
import mobileUz from "/src/assets/img/mobile_uz.png";
import mobileZh from "/src/assets/img/mobile_zh.png";

const langImages = {
  ru: imageRu,
  en: imageEn,
  uz: imageUz,
  zh: imageCh,
};

const mobileLangImages = {
  ru: mobileRu,
  en: mobileEn,
  uz: mobileUz,
  zh: mobileZh,
};

function SectionThree({ id }) {
  const { t, lang } = useLang();

  return (
    <section id={id} className="max-w-[1344px] mx-auto px-4 md:px-0 mt-16">
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* Text Block */}
        <div className="w-full md:w-1/2 order-1 md:order-2 mx-auto md:mx-0 text-left pl-12">
          
<h2
  className="mb-4 text-left text-[28px] leading-[34px] md:text-[40px] md:leading-[48px]"
  style={{
    fontFamily: "Manrope",
    fontWeight: 700,
    maxWidth: "523px",
  }}
>
            <span className="block text-[#F24B4B]">{t("site_names_1")}</span>
            <span className="block text-[#000000]">{t("site_names_2")}</span>
            <span className="block text-[#000000]">{t("site_names_3")}</span>
          </h2>

        {/* Paragraph */}
<p
  className="text-gray-500 text-[14px] leading-[22px] md:text-base md:leading-relaxed text-left"
  style={{
    maxWidth: "400px",
    display: "-webkit-box",
    WebkitLineClamp: 8,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  }}
>

            {t("about_text")}
          </p>
        </div>

        {/* Image Block */}
        <div className="w-full md:w-1/2 order-2 md:order-1 flex justify-center">
          <img
            src={mobileLangImages[lang]}
            alt={t("site_name")}
            className="w-full h-auto md:hidden"
          />
          <img
            src={langImages[lang]}
            alt={t("site_name")}
            className="w-full h-auto hidden md:block"
          />
        </div>

      </div>
    </section>
  );
}

export default SectionThree;
