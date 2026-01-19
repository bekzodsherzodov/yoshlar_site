import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';

const projects = [
  {
    title: "Unicorns SCO",
    subtitle: "Международный стартап-акселератор",
    description: "Ключевая акселерационная программа экосистемы, ориентированная на развитие стартапов и инвестиционную готовность",
    catalogs: [
      { year: "2020", label: "Каталог проектов" },
      { year: "2023", label: "Каталог проектов" },
    ],
  },
  {
    title: "UNIVERSITY Y",
    subtitle: "Образовательная платформа для предпринимателей",
    description: "Системная образовательная среда для подготовки предпринимателей и развития бизнес-компетенций",
    catalogs: [
      { year: "2021", label: "Каталог проектов" },
      { year: "2024", label: "Каталог проектов" },
    ],
  },
  {
    title: "USTOZ AI",
    subtitle: "AI-платформа для обучения и наставничества",
    description: "Цифровой инструмент экосистемы, использующий искусственный интеллект для персонализированного обучения",
    catalogs: [
      { year: "2022", label: "Каталог проектов" },
      { year: "2025", label: "Каталог проектов" },
    ],
  },
];

export default function SectionEight() {
  return (
    <section className="py-16 px-4 bg-white font-sans max-w-[1344px] mx-auto">
      {/* Section title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Основные <span className="text-[#E6533C]">проекты и программы</span>
      </h2>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-[#F1F4F9] rounded-[40px] p-8 flex flex-col justify-between h-full">
            {/* Top: Title, Subtitle, Description */}
            <div>
              <h3 className="text-2xl font-bold uppercase mb-2">{project.title}</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{project.subtitle}</h4>
              <p className="text-gray-500">{project.description}</p>
            </div>

            {/* Bottom: Catalog links */}
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
                  <ArrowUpRight className="text-[#E6533C] w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
