import React, { useState } from 'react';
import logo from './../../assets/img/logo.png';
import { RU, GB, UZ } from 'country-flag-icons/react/3x2';
import { useLang } from '../../lang/LanguageContext';

function Nav() {
  const { lang, setLang, t } = useLang();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const languages = [
    { code: 'ru', label: 'RU', flag: <RU className="w-5 h-5" /> },
    { code: 'en', label: 'EN', flag: <GB className="w-5 h-5" /> },
    { code: 'uz', label: 'UZ', flag: <UZ className="w-5 h-5" /> },
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

  return (
    <div className="flex items-center justify-between w-full max-w-[1344px] mx-auto mt-4 px-4 xl:px-0">

      {/* Navbar */}
      <nav className="flex items-center gap-6  bg-[#F1F2F4] rounded-full px-6 md:px-10 h-[72px] shadow-sm flex-1">
        {/* Left: Logo + Site Name */}
        <div className="flex items-center gap-3">
          <img src={logo} className="w-9 h-9" />
          <span className="font-semibold text-[11px]  md:text-[14px] xl:text-[13px] leading-tight max-w-[240px]">
            {t("site_name")}
          </span>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden lg:flex gap-12 font-medium text-sm ml-auto">
          {navItems.map(item => (
            <button
              key={item.key}
              onClick={() => handleScroll(item.href)}
              className="hover:text-[#F24B4B] transition"
            >
              {t(item.key)}
            </button>
          ))}
        </div>

        {/* Mobile Burger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 ml-auto"
          onClick={() => setMenuOpen(true)}
        >
          <span className="h-[2px] w-5 bg-black" />
          <span className="h-[2px] w-5 bg-black" />
          <span className="h-[2px] w-5 bg-black" />
        </button>
      </nav>

      {/* Languages: Navbardan tashqarida, yonida, faqat md+ */}
      <div className="hidden md:flex relative ml-4">
        <button
          onClick={() => setLangOpen(!langOpen)}
          className="flex items-center gap-2 bg-[#F1F2F4] px-[25px] py-[20px] rounded-full shadow text-sm"
        >
          {languages.find(l => l.code === lang)?.flag}
          <span>{lang.toUpperCase()}</span>
        </button>

        {langOpen && (
          <div className="absolute right-0 mt-2 bg-white rounded-xl shadow w-32 overflow-hidden z-50">
            <p className="px-4 py-2 text-gray-500 font-semibold border-b">Languages</p>
            {languages.map(l => (
              <div
                key={l.code}
                onClick={() => { setLang(l.code); setLangOpen(false); }}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                {l.flag} {l.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= MOBILE FULLSCREEN MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 h-[60vh] bg-[#F3F3F3] z-[999] flex flex-col justify-between">

          {/* Top: Logo + Close */}
          <div className="flex items-center justify-between px-5 h-[70px]">
            <div className="flex items-center gap-3 ">
              <img src={logo} className="w-9 h-9 " />
              <span className="text-[12px] font-semibold max-w-[200px] leading-tight ">
                {t("site_name")}
              </span>
            </div>

            <button onClick={() => setMenuOpen(false)} className="relative  w-6 h-6">
              <span className="absolute top-1/2 left-0 w-full h-[2px] bg-black rotate-45" />
              <span className="absolute top-1/2 left-0 w-full h-[2px] bg-black -rotate-45" />
            </button>
          </div>

          {/* Navigation */}
          <div className="px-6 flex-1 flex  flex-col justify-center">
            <p className="text-red-500 font-semibold mb-4">Навигация</p>
            <div className="flex flex-col gap-4 text-[16px] font-medium">
              {navItems.map(item => (
                <button
                  key={item.key}
                  onClick={() => handleScroll(item.href)}
                  className="text-left"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom / Languages (mobile) */}
          <div className="px-6  pb-6">
            
            <p className="text-red-500 h-[10vh] font-semibold mb-4">Языки</p>
            <div className="flex gap-6 items-center">
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setMenuOpen(false); }}
                  className="flex items-center h-[10vh] gap-2 text-sm font-medium"
                >
                  {l.flag} {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* ========================================================= */}
    </div>
  );
}

export default Nav;
