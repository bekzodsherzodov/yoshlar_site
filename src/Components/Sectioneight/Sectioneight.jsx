import React, { useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react";
import { useLang } from "../../lang/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Group28 from "../../assets/img/Group_28.png";
import UniversityLogo from "../../assets/img/Yoshtadbirkor_University_Logo.png";
import UstozLogo from "../../assets/img/Ustoz_AI_Logo.png";
import ImkoniyatLogo from "../../assets/img/Imkoniyat _ Logo (1).png";
import AICALogo from "../../assets/img/AICA _ Logo.png";
import UnicornsLogo from "../../assets/img/Unicorns _ Logo.png";

export default function SectionEight({ id }) {
  const { t } = useLang();
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const projects = [
    {
      logo: Group28,
      logoWidth: 270,
      logoHeight: 64,
      subtitle: t("project_unicorns_subtitle"),
      description: t("project_unicorns_desc"),
      descriptionColor: "#7F7F7F80",
      websiteUrl: "https://unicorns.uz/ru",
      catalogs: [
        { year: "2020", label: t("project_catalog"), pdf: "/pdfs/2020-katalog_compressed.pdf" },
        { year: "2023", label: t("project_catalog"), pdf: "/public/pdfs/2023-katalog (1).pdf" },
      ],
    },
    {
      logo: UniversityLogo,
      logoWidth: 200,
      logoHeight: 64,
      subtitle: t("project_university_subtitle"),
      description: t("project_university_desc"),
      descriptionColor: "#7F7F7F80",
      websiteUrl: "https://yoshtadbirkor.uz/university",
      catalogs: [
        { year: "2021", label: t("project_catalog"), pdf: "/pdfs/2021-katalog_compressed.pdf" },
        { year: "2024", label: t("project_catalog"), pdf: null },
      ],
    },
    {
      logo: UstozLogo,
      logoWidth: 156,
      logoHeight: 64,
      subtitle: t("project_ustoz_subtitle"),
      description: t("project_ustoz_desc"),
      descriptionColor: "#7F7F7F80",
      websiteUrl: "https://www.ustoz.ai/",
      catalogs: [
        { year: "2022", label: t("project_catalog"), pdf: "/pdfs/2022-katalog_compressed.pdf" },
        { year: "2025", label: t("project_catalog"), pdf: null },
      ],
    },
    {
      logo: ImkoniyatLogo,
      logoWidth: 200,
      logoHeight: 64,
      subtitle: t("project_imkoniyat_subtitle"),
      description: t("project_imkoniyat_desc"),
      descriptionColor: "#7F7F7F80",
      websiteUrl: "https://yoshtadbirkor.uz/imkoniyat",
      catalogs: [
        { year: "2021", label: t("project_catalog"), pdf: "/public/pdfs/2021-katalog_compressed.pdf" },
        { year: "2024", label: t("project_catalog"), pdf: null },
      ],
    },
    {
      logo: AICALogo,
      logoWidth: 140,
      logoHeight: 64,
      subtitle: t("project_aica_subtitle"),
      description: t("project_aica_desc"),
      descriptionColor: "#7F7F7F80",
      websiteUrl: "https://aica.uz/",
      catalogs: [
        { year: "2022", label: t("project_catalog"), pdf: "/public/pdfs/2022-katalog_compressed.pdf" },
        { year: "2025", label: t("project_catalog"), pdf: null },
      ],
    },
    {
      logo: UnicornsLogo,
      logoWidth: 150,
      logoHeight: 64,
      subtitle: t("project_unicorns_new_subtitle"),
      description: t("project_unicorns_new_desc"),
      descriptionColor: "#7F7F7F80",
      websiteUrl: "https://unicorns.uz/",
      catalogs: [
        { year: "2020", label: t("project_catalog"), pdf: "/pdfs/2020-katalog_compressed.pdf" },
        { year: "2023", label: t("project_catalog"), pdf: "/public/pdfs/2023-katalog (1).pdf" },
      ],
    },
  ];

  const handleCatalogClick = (pdf, year) => {
    if (pdf) {
      window.open(pdf, "_blank");
    } else {
      alert(`${year} yil uchun katalog hozircha mavjud emas`);
    }
  };

  const handleLogoClick = (url) => {
    window.open(url, "_blank");
  };

  const handlePrev = () => { if (swiper) swiper.slidePrev(); };
  const handleNext = () => { if (swiper) swiper.slideNext(); };

  return (
    <section
      id={id}
      className="py-16 px-4 bg-white font-sans max-w-[1344px] mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {t("projects_title_1")}{" "}
        <span className="text-[#E6533C]">{t("projects_title_2")}</span>
      </h2>

      <div className="relative px-6 md:px-8">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          disabled={isBeginning}
          className={`absolute left-0 top-[40%] -translate-y-1/2 z-10 w-10 h-10 rounded-full border flex items-center justify-center transition
            ${isBeginning
              ? "border-gray-200 bg-[#F1F2F4] cursor-not-allowed opacity-50"
              : "border-[#E6533C] bg-[#E6533C] hover:bg-[#d43f3f] cursor-pointer"
            }`}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={isEnd}
          className={`absolute right-0 top-[40%] -translate-y-1/2 z-10 w-10 h-10 rounded-full border flex items-center justify-center transition
            ${isEnd
              ? "border-gray-200 bg-[#F1F2F4] cursor-not-allowed opacity-50"
              : "border-[#E6533C] bg-[#E6533C] hover:bg-[#d43f3f] cursor-pointer"
            }`}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          onSwiper={(s) => {
            setSwiper(s);
            setIsBeginning(s.isBeginning);
            setIsEnd(s.isEnd);
          }}
          onSlideChange={(s) => {
            setIsBeginning(s.isBeginning);
            setIsEnd(s.isEnd);
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx} style={{ display: "flex", height: "auto" }}>
              <div className="flex flex-col w-full">
                {/* Main Card */}
                <div
                  className="bg-[#F1F4F9] rounded-[32px] p-8 relative flex-1"
                  style={{ minHeight: "400px" }}
                >
                  {/* Logo */}
                  <div className="mb-6 flex items-center" style={{ height: "64px" }}>
                    <img
                      src={project.logo}
                      alt="Project Logo"
                      onClick={() => handleLogoClick(project.websiteUrl)}
                      className="object-contain transition cursor-pointer hover:opacity-80"
                      style={{ width: project.logoWidth, height: project.logoHeight, maxHeight: "64px" }}
                    />
                  </div>

                  {/* Subtitle */}
                  <h4
                    className="line-clamp-2"
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: 600,
                      fontSize: "24px",
                      lineHeight: "30px",
                      marginBottom: "12px",
                      minHeight: "60px",
                    }}
                  >
                    {project.subtitle}
                  </h4>

                  {/* Description */}
                  <p
                    className="line-clamp-3"
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "140%",
                      color: project.descriptionColor,
                      minHeight: "84px",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Arrow Button */}
                  <div
                    className="absolute top-0 right-0 z-10 cursor-pointer"
                    onClick={() => handleLogoClick(project.websiteUrl)}
                  >
                    <div
                      className="absolute top-full right-0 w-6 h-6 z-0"
                      style={{ boxShadow: "6px -6px 0 6px white", borderRadius: "0 100% 0 0" }}
                    />
                    <div
                      className="absolute top-0 right-full w-6 h-6 z-0"
                      style={{ boxShadow: "6px -6px 0 6px white", borderRadius: "0 100% 0 0" }}
                    />
                    <div className="bg-white rounded-bl-[20px] pl-2 pb-2 relative z-10">
                      <div className="w-9 h-9 bg-[#E6533C] flex items-center justify-center rounded-full hover:bg-[#d43f3f] transition">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Catalogs */}
                <div className="mt-4 space-y-3" style={{ minHeight: "136px" }}>
                  {project.catalogs.map((cat, i) => (
                    <div
                      key={i}
                      onClick={() => handleCatalogClick(cat.pdf, cat.year)}
                      className="flex justify-between items-center bg-[#F8F9FB] p-4 rounded-2xl cursor-pointer hover:bg-gray-200 transition"
                      style={{
                        width: "100%",
                        fontFamily: "Manrope",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "100%",
                        color: "#000000",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="text-gray-400 w-5 h-5" />
                        <span>{cat.label} · {cat.year}</span>
                      </div>
                      <span
                        style={{
                          width: 28,
                          height: 29,
                          fontFamily: "SF Pro",
                          fontWeight: 400,
                          fontSize: "24px",
                          color: "#F24B4B",
                          display: "inline-block",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        →
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination - swiper tashqarisida, alohida */}
        <div className="custom-pagination flex justify-center mt-6" />
      </div>

      <style jsx>{`
        .custom-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          margin-top: 24px;
        }
        :global(.custom-pagination .swiper-pagination-bullet) {
          background: #e6533c;
          opacity: 0.4;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
        }
        :global(.custom-pagination .swiper-pagination-bullet-active) {
          opacity: 1;
          background: #e6533c;
          width: 24px;
          border-radius: 4px;
        }
        :global(.swiper-slide) {
          height: auto !important;
        }
      `}</style>
    </section>
  );
}