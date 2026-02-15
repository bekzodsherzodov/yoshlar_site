import React from 'react';
import { useLang } from '../../lang/LanguageContext';
import logoImage from '../../assets/img/_Ð¡Ð»Ð¾Ð¹_1.png'; 

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-white py-10 px-4 md:px-12">
      <style>{`
        .footer-container {
          height: 780px !important;
        }
        @media (min-width: 768px) {
          .footer-container {
            height: 300px !important;
          }
        }
      `}</style>
      
      <div 
        className="footer-container mx-auto bg-[#F1F4F9] p-8 md:p-12"
        style={{
          maxWidth: '1344px',
          borderRadius: '48px'
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 h-full">

          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-3 mb-6">
                {/* Logo rasm */}
                <div 
                  className="flex-shrink-0"
                  style={{
                    width: '56px',
                    height: '56px'
                  }}
                >
                  <img 
                    src={logoImage} 
                    alt="YSH Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Sarlavha */}
                <h3 
                  style={{
                    maxWidth: '302px',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#000000',
                    textTransform: 'uppercase'
                  }}
                >
                  {t("site_name")}
                </h3>
              </div>

              {/* Platform text */}
              <p 
                style={{
                  maxWidth: '445px',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#7F7F7F80',
                  marginTop: '8px'
                }}
              >
                {t("footer_platform_text")}
              </p>
            </div>

            {/* Copyright text */}
            <div className="hidden md:block">
              <p 
                style={{
                  maxWidth: '445px',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#7F7F7F80'
                }}
              >
                © O'zbekiston Yoshlar Tadbirkorligini Qo'llab Quvvatlash Markazi, 2020–2026
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                color: '#E6533C',
                textTransform: 'uppercase',
                marginBottom: '24px'
              }}
            >
              {t("navigation")}
            </h4>
            <ul className="space-y-4">
              <li 
                className="hover:text-[#E6533C] cursor-pointer" 
                onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  color: '#000000'
                }}
              >
                {t("about")}
              </li>
              <li 
                className="hover:text-[#E6533C] cursor-pointer" 
                onClick={() => document.getElementById('programs')?.scrollIntoView({behavior:'smooth'})}
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  color: '#000000'
                }}
              >
                {t("programs")}
              </li>
              <li 
                className="hover:text-[#E6533C] cursor-pointer" 
                onClick={() => document.getElementById('partners')?.scrollIntoView({behavior:'smooth'})}
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  color: '#000000'
                }}
              >
                {t("partners")}
              </li>
              <li 
                className="hover:text-[#E6533C] cursor-pointer" 
                onClick={() => document.getElementById('contacts')?.scrollIntoView({behavior:'smooth'})}
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  color: '#000000'
                }}
              >
                {t("contacts")}
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                color: '#E6533C',
                textTransform: 'uppercase',
                marginBottom: '24px'
              }}
            >
              {t("contacts_title")}
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+998500109242" 
                  className="hover:text-[#E6533C] transition"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 600,
                    fontSize: '20px',
                    color: '#000000'
                  }}
                >
                  +998 50 010 92 42
                </a>
              </li>
              <li>
                <a 
                  href="mailto:yoshtadbirkorgr@gmail.com" 
                  className="hover:text-[#E6533C] transition"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 600,
                    fontSize: '20px',
                    color: '#000000'
                  }}
                >
                  yoshtadbirkorgr@gmail.com
                </a>
              </li>
              <li 
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  color: '#000000'
                }}
              >
                {t("address")}
              </li>
            </ul>
          </div>

          {/* Mobile copyright */}
          <div className="md:hidden mt-6">
            <p 
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#7F7F7F80'
              }}
            >
              © O’zbekiston Yoshlar Tadbirkorligini Qo’llab Quvvatlash Markazi, 2020–2026
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;