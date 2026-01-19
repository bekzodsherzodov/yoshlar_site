// src/App.jsx
import React from 'react';
import Header from './Components/Header/Header.jsx';
import Section from './Components/sectionO/Section.jsx';
import SectionT from './Components/Section/SectionT.jsx';
import SectionThree from './Components/SectionThree/SectionThree.jsx'
import SectionF from './Components/SectionF/Section.jsx';
import SectionFive from './Components/SectionFive/SectionFive.jsx';
import SectionSix from './Components/SectionSix/SectionSix.jsx';
import PartnerForm from './Components/SectionSeven/SectionSeven.jsx';
import SectionEight from './Components/Sectioneight/Sectioneight.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="w-full">
        <Section />
        <SectionT />
        <SectionThree />
        <SectionF />
        <SectionFive />
        <SectionEight />
        <SectionSix />
        <PartnerForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;