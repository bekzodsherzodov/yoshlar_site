import React from "react";
import { useLang } from "../../lang/LanguageContext";

import imageRu from "/src/assets/img/image_ru.svg";
import imageEn from "/src/assets/img/image_en.svg";
import imageUz from "/src/assets/img/image_uz.svg";
import imageCh from "/src/assets/img/image_ch.svg";

const langImages = {
  ru: imageRu,
  en: imageEn,
  uz: imageUz,
  zh: imageCh,
};

function SectionThree({ id }) {
  const { t, lang } = useLang();

  return (
    <section
      id={id}
      className="max-w-[1344px] mx-auto px-4 md:px-0 mt-16"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">

        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left max-w-[320px] md:max-w-none mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#F24B4B]">{t("site_name")}</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            {t("about_text")}
          </p>
        </div>

        <div className="w-full md:w-1/2 order-2 md:order-1 flex justify-center">
          <img
            src={langImages[lang]}
            alt={t("site_name")}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
