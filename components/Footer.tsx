"use client";
import { useContext } from "react";
import { texts } from "@/data/data";
import { LanguageContext } from "@/context/language";

type lan = "es" | "en";
const year = new Date().getFullYear();

const Footer = () => {
  const { lan } = useContext(LanguageContext) as { lan: lan };

  return (
    <footer className="text-center text-sm mt-24 mb-8 px-12">
      &copy; Mite galería {year} | Av. Córdoba 380, Buenos Aires | {texts[lan].footerTxt} | <a href="mailto:info@mitegaleria.com.ar">info@mitegaleria.com.ar</a>
    </footer>
  );
};

export default Footer;
