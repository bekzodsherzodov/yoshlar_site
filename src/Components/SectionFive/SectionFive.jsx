import React from 'react';
import { FaGraduationCap, FaHandshake } from "react-icons/fa";
import { PiChartLineUpBold } from "react-icons/pi";

export default function SectionFive() {
  const cards = [
    {
      icon: <FaGraduationCap className='text-[#F24B4B] w-6 h-6' />,
      title: "Образование и развитие компетенций",
      text: "Программы обучения, бизнес-образование и развитие предпринимательских навыков",
    },
    {
      icon: <PiChartLineUpBold className='text-[#F24B4B] w-6 h-6' />,
      title: "Акселерационные программы",
      text: "Поддержка стартапов на этапах запуска, роста и подготовки к инвестициям",
    },
    {
      icon: <FaGraduationCap className='text-[#F24B4B] w-6 h-6' />,
      title: "Инвестиции и финансирование",
      text: "Венчурные инвестиции, гранты, льготные кредиты и финансовые инструменты",
    },
    {
      icon: <FaHandshake className='text-[#F24B4B] w-6 h-6' />,
      title: "Партнёрства и взаимодействие",
      text: "Сотрудничество с банками, фондами, государственными и международными организациями",
    },
    {
      icon: <FaGraduationCap className='text-[#F24B4B] w-6 h-6' />,
      title: "Аналитика и развитие среды",
      text: "Исследования, аналитика и формирование устойчивой предпринимательской среды",
    },
  ];

  return (
    <div className="max-w-[1344px] bg-[#252422] mx-auto mt-[72px] rounded-[48px] p-8 flex flex-col items-center">
      
      {/* Section title 2-qator, o‘rtalashgan */}
      <div className='w-full mb-12 text-center'>
        <h2 className='text-[40px] font-bold leading-tight inline-block'>
          <span className='text-[#F24B4B] block'>Ключевые направления</span>
          <span className='text-white block mt-2'>деятельности</span>
        </h2>
      </div>

      {/* Cards grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
        {cards.map((card, idx) => (
          <div
            key={idx}
            className='bg-[#333230] rounded-[32px] p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl'
          >
            {/* Icon box */}
            <div className='w-[68px] h-[58px] bg-[#252422] flex justify-center items-center rounded-[10px] mb-4'>
              <div className='w-[48px] h-[48px] bg-[#333230] rounded-[24px] flex justify-center items-center text-[24px]'>
                {card.icon}
              </div>
            </div>

            {/* Text */}
            <h3 className='text-[24px] text-white font-semibold'>{card.title}</h3>
            <p className='text-[#8E8E93] text-[20px] mt-2'>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
