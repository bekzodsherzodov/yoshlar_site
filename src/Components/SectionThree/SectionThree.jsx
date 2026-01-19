import React from 'react';
import { useLang } from '../../lang/LanguageContext';
import grap from "./../../assets/img/Graphics.png";

function SectionThree() {
  const { t } = useLang();

  return (
    <section className="max-w-[1344px] mx-auto flex flex-col md:flex-row justify-between gap-8 mt-12 items-center px-4 md:px-0">
      <img src={grap} alt="About" className="w-full md:w-1/2" />
      <div className="md:w-1/2">
        <h2 className="text-[32px] md:text-[40px] font-bold mb-4">
          <span className="text-[#F24B4B]">{t("site_name")}</span>
        </h2>
        <p className="text-gray-500 text-[18px] md:text-[20px]">{t("about_text")}</p>
      </div>
    </section>
  );
}

export default SectionThree;
