import React, { useState } from 'react';
import logo from './../../assets/img/logo.png';
import { RU, GB, UZ, CN } from 'country-flag-icons/react/3x2';
import { useLang } from '../../lang/LanguageContext';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Nav() {
  const { lang, setLang, t } = useLang();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const languages = [
    { code: 'ru', label: 'RU', flag: <RU className="w-6 h-6 rounded-full border object-cover" /> },
    { code: 'en', label: 'EN', flag: <GB className="w-6 h-6 rounded-full border object-cover" /> },
    { code: 'uz', label: 'UZ', flag: <UZ className="w-6 h-6 rounded-full border object-cover" /> },
    { code: 'zh', label: 'ZH', flag: <CN className="w-6 h-6 rounded-full border object-cover" /> },
  ];

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'programs', href: '#programs' },
    { key: 'partners', href: '#partners' },
    { key: 'contacts', href: '#contacts' },
  ];

  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const selectedLang = languages.find(l => l.code === lang);

  return (
    <div className="flex items-center gap-4 w-full max-w-[1310px] mx-auto mt-4 px-4 xl:px-0">

      {/* Desktop nav */}
      <nav className="flex items-center gap-6 bg-[#F1F2F4] rounded-full px-6 md:px-10 h-[64px] shadow-sm flex-1">
        <div className="flex items-center gap-3">
          <img src={logo} className="w-10 h-10" alt="logo" />
          <span className="font-semibold text-[12px] leading-[100%] max-w-[190px] ">
            {t("site_name")}
          </span>
        </div>

        <div className="hidden lg:flex gap-15 pl-40">
  {navItems.map(item => (
    <button
      key={item.key}
      onClick={() => handleScroll(item.href)}
      className="hover:text-[#F24B4B] transition font-semibold text-[20px] leading-[100%] text-left"
      style={{ fontFamily: "Manrope" }}
    >
      {t(item.key)}
    </button>
  ))}
</div>

        {/* Hamburger mobile */}
        <button
          className="lg:hidden flex flex-col gap-1.5 ml-auto"
          onClick={() => setMenuOpen(true)}
        >
          <span className="h-[2px] w-5 bg-black" />
          <span className="h-[2px] w-5 bg-black" />
          <span className="h-[2px] w-5 bg-black" />
        </button>
      </nav>

      {/* Language dropdown - NAVBAR TASHQARIDA */}
      <div className="hidden md:flex relative">
        <button
          onClick={() => setLangOpen(!langOpen)}
          className="flex items-center gap-2 bg-[#F1F2F4] h-[63px] px-[35px] rounded-full shadow"
        >
          {selectedLang?.flag}
          <span className="font-semibold text-[20px] leading-[100%]">{selectedLang?.label}</span>
          {langOpen ? <FaChevronUp className="w-3 h-3" /> : <FaChevronDown className="w-3 h-3" />}
        </button>

        {langOpen && (
          <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow w-32 overflow-hidden z-50">
            <p className="px-4 py-2 text-gray-500 font-semibold border-b">
              {t("languages")}
            </p>
            {languages.map(l => (
              <div
                key={l.code}
                onClick={() => { setLang(l.code); setLangOpen(false); }}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                {l.flag} {l.label}
                {lang === l.code && <span className="ml-auto text-green-500">✔</span>}
              </div>
            ))}
          </div>
        )}
      </div>

 {/* Mobile menu */}
{menuOpen && (
  <div className="absolute top-[20px] left-4 right-4 h-[60vh] bg-[#F3F3F3] rounded-[40px] z-[999] flex flex-col justify-between px-4">
    
    <div className="flex items-center justify-between px-5 h-[70px]">
      <div className="flex items-center gap-3">
        <img src={logo} className="w-9 h-9" alt="logo" />
        <span className="text-[12px] font-semibold max-w-[200px] leading-tight">
          {t("site_name")}
        </span>
      </div>

      <button onClick={() => setMenuOpen(false)} className="relative w-6 h-6">
        <span className="absolute top-1/2 left-0 w-full h-[2px] bg-black rotate-45" />
        <span className="absolute top-1/2 left-0 w-full h-[2px] bg-black -rotate-45" />
      </button>
    </div>

    <div className="px-6 flex-1 flex flex-col justify-start pt-8">
      <p className="text-red-500 font-semibold mb-4">
        {t("navigation")}
      </p>
      <div className="flex flex-col gap-4 text-[16px] font-medium">
        {navItems.map((item) => (
          <React.Fragment key={item.key}>
            <button
              onClick={() => handleScroll(item.href)}
              className="text-left"
            >
              {t(item.key)}
            </button>

            {item.key === "contacts" && (
              <hr className="border-t-[2px] border-gray-400 my-2 w-full" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>

    <div className="px-6 pb-10 ">
  <p className="text-red-500 font-semibold mb-4">
    {t("languages")}
  </p>
  <div className="flex gap-6 items-center">
    {languages.map(l => (
      <button
        key={l.code}
        onClick={() => { setLang(l.code); setMenuOpen(false); }}
        className="flex items-center gap-2 text-sm font-medium"
      >
        {l.flag} {l.label}
      </button>
    ))}
  </div>
</div>

  </div>
)}

    </div>
  );
}

export default Nav;