import { useContext } from "react";
import { LanguageContext } from "./language";

export const useDataContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useDataContext must be used within a Provider");
  }
  return context;
};
