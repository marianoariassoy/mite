"use client";

import { useState, createContext } from "react";

export const LanguageContext = createContext({} as { lan: string; setLan: React.Dispatch<React.SetStateAction<string>> });

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lan, setLan] = useState("es");

  return <LanguageContext.Provider value={{ lan, setLan }}>{children}</LanguageContext.Provider>;
};
