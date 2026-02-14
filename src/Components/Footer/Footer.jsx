import React from 'react';
import { useLang } from '../../lang/LanguageContext';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto bg-[#F1F4F9] rounded-[40px] p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[10px] font-bold text-center leading-none">
                    Y<br />SH
                  </span>
                </div>
                <h3 className="text-sm font-bold leading-tight text-gray-900 uppercase">
                  {t("site_name")}
                </h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                {t("footer_platform_text")}
              </p>

              {/* <p className="text-gray-500 text-xs mt-3 max-w-md">
                {t("footer_platform_text")}
              </p> */}
            </div>

            <div className="hidden md:block mt-12">
              <p className="text-gray-400 text-[11px] leading-tight">
                © {t("site_name")}, 2020–2026
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[#E6533C] font-medium text-sm mb-6 uppercase tracking-wider">
              {t("navigation")}
            </h4>
           <ul className="space-y-4">
  <li className="hover:text-[#E6533C] cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}>{t("about")}</li>
  <li className="hover:text-[#E6533C] cursor-pointer" onClick={() => document.getElementById('programs')?.scrollIntoView({behavior:'smooth'})}>{t("programs")}</li>
  <li className="hover:text-[#E6533C] cursor-pointer" onClick={() => document.getElementById('partners')?.scrollIntoView({behavior:'smooth'})}>{t("partners")}</li>
  <li className="hover:text-[#E6533C] cursor-pointer" onClick={() => document.getElementById('contacts')?.scrollIntoView({behavior:'smooth'})}>{t("contacts")}</li>
</ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[#E6533C] font-medium text-sm mb-6 uppercase tracking-wider">
              {t("contacts_title")}
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+998500109242" className="hover:text-[#E6533C] transition">
                  +998 50 010 92 42
                </a>
              </li>
              <li>
                <a href="mailto:yoshtadbirkorgr@gmail.com" className="hover:text-[#E6533C] transition">
                  yoshtadbirkorgr@gmail.com
                </a>
              </li>
              <li className="text-gray-900">
                {t("address")}
              </li>
            </ul>
          </div>

          <div className="md:hidden mt-4">
            <p className="text-gray-400 text-[11px] leading-tight">
              © {t("site_name")}, 2020–2026
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
