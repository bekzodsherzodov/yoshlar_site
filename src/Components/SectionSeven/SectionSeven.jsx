import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { useLang } from '../../lang/LanguageContext';

function PartnerForm() {
  const { t } = useLang();

  return (
    <section className="w-full flex justify-center my-24 px-4">
      <div className="flex flex-col lg:flex-row max-w-[1344px] w-full shadow-xl rounded-3xl overflow-hidden">
        {/* Form */}
        <div className="bg-white p-8 sm:p-10 w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl font-bold">{t("partner_form_title")}</h2>
          <p className="text-gray-500">{t("partner_form_subtitle")}</p>

          <form className="flex flex-col gap-4">
            <input 
              type="text"
              className="rounded-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] transition"
              placeholder={t("organization")}
            />
            <input 
              type="text"
              className="rounded-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] transition"
              placeholder={t("name")}
            />
            <input 
              type="email"
              className="rounded-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] transition"
              placeholder={t("email")}
            />
            <textarea 
              className="rounded-2xl p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] min-h-[150px] transition resize-none"
              placeholder={t("message")}
            />
          <div className="mb-12 max-w-[700px]">
  <h2 className="text-[32px] md:text-[64px] text-white font-bold">
    {t("hero_title")}
  </h2>

  <div className="relative mt-6 w-fit cursor-pointer hover:scale-105 transition-all duration-300">
    {/* Background */}
    <div
      className="
        absolute
        inset-0
        w-[230px] h-[66px]
        bg-[#F24B4B]
        rounded-full
      "
    ></div>

    {/* Text */}
    <p
      className="
        relative
        flex items-center gap-2
        h-[66px]
        px-6
        text-white
        text-[18px] md:text-[20px]
      "
    >
      {t("hero_btn")}
      <FaArrowRightLong />
    </p>
  </div>
</div>

          </form>
        </div>

        {/* Google Maps */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 h-[300px] sm:h-[400px] lg:h-auto">
          <iframe
            className="w-full h-full rounded-3xl"
            src="https://www.google.com/maps?q=41.285680,69.203464&z=15&output=embed"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default PartnerForm;
