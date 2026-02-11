import React from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, FileText } from "lucide-react";
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

      <div className="relative">
        {/* Left arrow */}
        <button className="absolute -left-5 top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition hidden lg:flex">
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right arrow */}
        <button className="absolute -right-5 top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#E6533C] bg-white flex items-center justify-center text-[#E6533C] hover:bg-[#E6533C] hover:text-white transition hidden lg:flex">
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="relative flex flex-col">
              <div className="relative">
                <div className="bg-[#F1F4F9] rounded-[32px] p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-2 pr-10">{project.title}</h3>
                  <h4 className="text-base font-semibold text-gray-900 mb-3">{project.subtitle}</h4>
                  <p className="text-gray-500 text-sm">{project.description}</p>
                </div>

                {/* Arrow icon with inverse border radius */}
                <div className="absolute top-0 right-0 z-10">
                  <div
                    className="absolute top-full right-0 w-6 h-6 z-0"
                    style={{
                      boxShadow: "6px -6px 0 6px white",
                      borderRadius: "0 100% 0 0",
                    }}
                  />
                  <div
                    className="absolute top-0 right-full w-6 h-6 z-0"
                    style={{
                      boxShadow: "6px -6px 0 6px white",
                      borderRadius: "0 100% 0 0",
                    }}
                  />
                  <div className="bg-white rounded-bl-[20px] pl-2 pb-2 relative z-10">
                    <div className="w-9 h-9 bg-[#E6533C] rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {project.catalogs.map((cat, i) => (
                  <div
                    key={i}
                    className="bg-[#F8F9FB] p-4 rounded-2xl flex justify-between items-center hover:bg-gray-200 cursor-pointer transition"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="text-gray-400 w-5 h-5" />
                      <span className="text-sm text-gray-600">{cat.label} · {cat.year}</span>
                    </div>
                    <ArrowUpRight className="text-[#E6533C] w-5 h-5" />
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
