"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/language";
import { languages } from "@/data/data";

const Lan = () => {
  const { lan, setLan } = useContext(LanguageContext);

  return (
    <div className="fixed z-50 top-0 left-0 h-screen flex gap-4 lan pl-4 -ml-1 justify-center">
      {languages.map((item, index) => (
        <button className={`${lan === item.code && "underline"} underline-offset-4 hover:underline`} onClick={() => setLan(item.code)} key={index}>
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default Lan;
