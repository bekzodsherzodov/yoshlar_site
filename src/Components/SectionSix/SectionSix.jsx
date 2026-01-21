import React from 'react';
import bg from './../../assets/img/Logos.png';
import { useLang } from '../../lang/LanguageContext';

function SectionSix({ id }) {
  const { t } = useLang();

  return (
    <section
      id={id}
      className="max-w-[1344px] h-[558px] mx-auto mt-12 bg-[#252422] rounded-[48px] flex items-start px-12 pt-12 bg-no-repeat bg-right bg-contain
                 xs:bg-right xs:bg-contain xs:h-auto"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-md">
        <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-snug">
          <span className="text-[#F24B4B] block">{t("partnership_title")}</span>
          <span className="block mt-2">{t("partnership_subtitle")}</span>
        </h2>
      </div>
    </section>
  );
}

export default SectionSix;
