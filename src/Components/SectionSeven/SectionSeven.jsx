import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { useLang } from '../../lang/LanguageContext';

function PartnerForm({ id }) {
  const { t } = useLang();

  return (
    <section id={id} className="w-full flex justify-center my-24 px-4">
      <div className="flex flex-col lg:flex-row max-w-[1344px] w-full shadow-xl rounded-3xl overflow-hidden">
        
        {/* Form */}
        <div className="bg-white p-10 w-full lg:flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold">{t("partner_form_title")}</h2>
          <p className="text-gray-500">{t("partner_form_subtitle")}</p>

          <form className="flex flex-col gap-4">
            <input type="text" placeholder={t("organization")} className="rounded-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] transition" />
            <input type="text" placeholder={t("name")} className="rounded-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] transition" />
            <input type="email" placeholder={t("email")} className="rounded-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] transition" />
            <textarea placeholder={t("message")} className="rounded-2xl p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F24B4B] min-h-[150px] transition" />
            <button type="submit" className="mt-4 flex items-center justify-center gap-2 bg-[#F24B4B] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#d53a3a] hover:scale-105 transition-transform duration-300">
              {t("become_partner")} <FaArrowRightLong />
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="w-full lg:flex-1 h-[400px] lg:h-auto">
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
