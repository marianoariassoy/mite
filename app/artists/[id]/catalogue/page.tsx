"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/language";

type lan = "es" | "en";

const Page = () => {
  const { lan } = useContext(LanguageContext) as { lan: lan };

  return (
    <section>
      <a href="#" target="_blank" rel="noopener noreferrer">
        {lan === "es" ? "Descargar Catalogo" : "Download Catalogue"}
      </a>
    </section>
  );
};

export default Page;
