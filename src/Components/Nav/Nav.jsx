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
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-[#F1F2F4] shadow-md relative z-50 rounded-b-[50px]">
      <div className="max-w-[1344px] mx-auto px-4 md:px-8 flex justify-between items-center h-24 relative overflow-visible">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain"/>
          <span className="font-bold text-lg">{t("site_name")}</span>
        </div>

        {/* Desktop & Notebook Menu */}
        <div className="hidden md:flex lg:flex items-center gap-12 xl:gap-16 font-semibold text-base">
          {navItems.map(item => (
            <span
              key={item.key}
              onClick={() => handleScroll(item.href)}
              className="hover:text-[#F24B4B] cursor-pointer transition"
            >
              {t(item.key)}
            </span>
          ))}
        </div>

        {/* Right Section: Language & Hamburger */}
        <div className="flex items-center gap-8 relative z-50">
          {/* Language Selector */}
          <div className="relative z-50">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="bg-white px-4 py-2 flex items-center gap-2 cursor-pointer font-medium rounded-lg shadow-sm"
            >
              {languages.find(l => l.code === lang)?.flag} {lang.toUpperCase()}
            </button>

            {/* Language Dropdown */}
            {langOpen && (
              <div className="absolute right-0 mt-3 w-32 bg-white shadow-lg rounded-lg overflow-visible z-50">
                {languages.map(l => (
                  <div
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false); setMenuOpen(false); }}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer transition"
                  >
                    {l.flag} {l.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-between w-6 h-5 ml-2 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className="block w-full h-0.5 bg-black transition-transform"
              style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}
            ></span>
            <span
              className="block w-full h-0.5 bg-black transition-opacity"
              style={{ opacity: menuOpen ? 0 : 1 }}
            ></span>
            <span
              className="block w-full h-0.5 bg-black transition-transform"
              style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col z-50 rounded-b-lg">
            {navItems.map(item => (
              <span
                key={item.key}
                onClick={() => handleScroll(item.href)}
                className="px-6 py-4 hover:bg-gray-100 cursor-pointer font-semibold border-b border-gray-200"
              >
                {t(item.key)}
              </span>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
