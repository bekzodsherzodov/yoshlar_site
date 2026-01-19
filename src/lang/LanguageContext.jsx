import { createContext, useContext, useState } from "react";
import { translations } from "./translations";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("ru");

  const t = (key) => translations[lang][key] || key;

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
