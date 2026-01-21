import React from "react";
import { ArrowUpRight, FileText } from "lucide-react";
import { useLang } from "../../lang/LanguageContext";

export default function SectionEight({ id }) {
  const { t } = useLang();

  const projects = [
    {
      title: "Unicorns SCO",
      subtitle: t("project_unicorns_subtitle"),
      description: t("project_unicorns_desc"),
      catalogs: [
        { year: "2020", label: t("project_catalog") },
        { year: "2023", label: t("project_catalog") },
      ],
    },
    {
      title: "UNIVERSITY Y",
      subtitle: t("project_university_subtitle"),
      description: t("project_university_desc"),
      catalogs: [
        { year: "2021", label: t("project_catalog") },
        { year: "2024", label: t("project_catalog") },
      ],
    },
    {
      title: "USTOZ AI",
      subtitle: t("project_ustoz_subtitle"),
      description: t("project_ustoz_desc"),
      catalogs: [
        { year: "2022", label: t("project_catalog") },
        { year: "2025", label: t("project_catalog") },
      ],
    },
  ];

  return (
    <section id={id} className="py-16 px-4 bg-white font-sans max-w-[1344px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {t("projects_title_1")} <span className="text-[#E6533C]">{t("projects_title_2")}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
        {projects.map((project, idx) => (
          <div key={idx} className="relative flex flex-col">
          
            <div className="bg-[#F1F4F9] rounded-[40px] p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{project.subtitle}</h4>
              <p className="text-gray-500">{project.description}</p>

              <div className="absolute top-6 right-6 bg-[#E6533C] w-6 h-6 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 text-white rotate-45" />
              </div>
            </div>

            
            <div className="mt-6 space-y-3">
              {project.catalogs.map((cat, i) => (
                <div
                  key={i}
                  className="bg-[#F8F9FB] p-4 rounded-2xl flex justify-between items-center hover:bg-gray-200 cursor-pointer transition"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="text-gray-400 w-5 h-5" />
                    <span className="text-sm text-gray-600">{cat.label} · {cat.year}</span>
                  </div>
                  <ArrowUpRight className="text-[#E6533C] w-5 h-5 rotate-45" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
