import React from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { useLang } from "../../lang/LanguageContext";

import Group28 from "../../assets/img/Group_28.png";
import UniversityLogo from "../../assets/img/Yoshtadbirkor_University_Logo.png";
import UstozLogo from "../../assets/img/Ustoz_AI_Logo.png";

export default function SectionEight({ id }) {
  const { t } = useLang();

  const projects = [
    {
      logo: Group28,
      logoWidth: 270,
      logoHeight: 64,
      subtitle: t("project_unicorns_subtitle"),
      subtitleHeight: 60,
      description: t("project_unicorns_desc"),
      descriptionHeight: 135,
      descriptionColor: "#7F7F7F80",
      catalogs: [
        { year: "2020", label: t("project_catalog") },
        { year: "2023", label: t("project_catalog") },
      ],
    },
    {
      logo: UniversityLogo,
      logoWidth: 200,
      logoHeight: 64,
      subtitle: t("project_university_subtitle"),
      subtitleHeight: 90,
      description: t("project_university_desc"),
      descriptionHeight: 81,
      descriptionColor: "#7F7F7F80",
      catalogs: [
        { year: "2021", label: t("project_catalog") },
        { year: "2024", label: t("project_catalog") },
      ],
    },
    {
      logo: UstozLogo,
      logoWidth: 156,
      logoHeight: 64,
      subtitle: t("project_ustoz_subtitle"),
      subtitleHeight: 60,
      description: t("project_ustoz_desc"),
      descriptionHeight: 108,
      descriptionColor: "#7F7F7F80",
      catalogs: [
        { year: "2022", label: t("project_catalog") },
        { year: "2025", label: t("project_catalog") },
      ],
    },
  ];

  return (
    <section id={id} className="py-16 px-4 bg-white font-sans max-w-[1344px] mx-auto ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {t("projects_title_1")}{" "}
        <span className="text-[#E6533C]">{t("projects_title_2")}</span>
      </h2>

      <div className="relative ">
        {/* Slider Buttons */}
       {/* Slider Buttons */}
<button className="absolute -left-5 top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-200 bg-[#F1F2F4] flex items-center justify-center transition hidden lg:flex">
  <ChevronLeft className="w-5 h-5 text-white" />
</button>
<button className="absolute -right-5 top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#E6533C] bg-[#E6533C] flex items-center justify-center transition hidden lg:flex">
  <ChevronRight className="w-5 h-5 text-white" />
</button>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="relative flex flex-col h-full">
             <div
  className="bg-[#F1F4F9] rounded-[32px] p-8 flex flex-col justify-between h-full"
>
  {/* LOGO */}
  <img
    src={project.logo}
    alt="Project Logo"
    className="object-contain mb-6"
    style={{
      width: project.logoWidth,
      height: project.logoHeight,
    }}
  />

  {/* SUBTITLE */}
  <h4
    style={{
      fontFamily: "Manrope",
      fontWeight: 600,
      fontStyle: "SemiBold",
      fontSize: "24px",
      lineHeight: "30px",
      marginBottom: "12px",
    }}
  >
    {project.subtitle}
  </h4>

 {/* DESCRIPTION */}
<p
  style={{
    fontFamily: "Manrope",
    fontWeight: 400,
    fontStyle: "Regular",
    fontSize: "20px",
    lineHeight: "140%", // qatorlar orasida biroz bo'shliq
    color: project.descriptionColor,
    display: "-webkit-box",
    WebkitLineClamp: 3, // 3 qator
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  }}
>
  {project.description}
</p>




                {/* Arrow Button */}
                <div className="absolute top-0 right-0 z-10">
                  <div
                    className="absolute top-full right-0 w-6 h-6 z-0"
                    style={{ boxShadow: "6px -6px 0 6px white", borderRadius: "0 100% 0 0" }}
                  />
                  <div
                    className="absolute top-0 right-full w-6 h-6 z-0"
                    style={{ boxShadow: "6px -6px 0 6px white", borderRadius: "0 100% 0 0" }}
                  />
                  <div className="bg-white rounded-bl-[20px] pl-2 pb-2 relative z-10">
                    <div className="w-9 h-9 bg-[#E6533C] flex items-center justify-center rounded-full">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Catalogs */}
              <div className="mt-4 space-y-3">
                {project.catalogs.map((cat, i) => (
                  <div
                    key={i}
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
                      <FileText className="text-gray-400 w-5 h-5" /> {/* document.fill icon tiklandi */}
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
          ))}
        </div>
      </div>
    </section>
  );
}
