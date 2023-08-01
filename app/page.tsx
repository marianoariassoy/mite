"use client";

import { useContext } from "react";
import { useEffect } from "react";
import { links, texts } from "@/data/data";
import { LanguageContext } from "@/context/language";

type lan = "es" | "en";
export default function Home() {
  const { lan } = useContext(LanguageContext) as { lan: lan };

  useEffect(() => {
    const horaActual = new Date().getHours();

    let bgColor;
    if (horaActual >= 6 && horaActual < 12) {
      bgColor = "gradient-1";
    } else if (horaActual >= 12 && horaActual < 18) {
      bgColor = "gradient-2";
    } else {
      bgColor = "gradient-3";
    }

    const bg = document.querySelector(".bg-home") as HTMLBodyElement;
    const nav = document.querySelector("nav") as HTMLBodyElement;
    bg.classList.add(bgColor);
    nav.classList.remove("bg-white/25");
  }, []);

  return (
    <>
      <section className="lg:grid lg:grid-cols-2 gap-4 max-w-7xl " id="home">
        <div>
          <section className="mb-16">
            <h1 className="text-3xl font-medium mb-4">
              <span className="block uppercase">{texts[lan].titleSection2}</span>
              <span className="block uppercase">{texts[lan].homeTitle1}</span>
            </h1>
            <a href="#">
              <h2 className="italic uppercase"> El Espejo</h2>
              Laura Códega
              <span className="block">Curador/x: Guadalupe Chirotarrab y Juan Laxagueborde</span>
              <span className="block">16 de mayo - 1 de julio 2023</span>
            </a>
          </section>
          <section className="mb-16">
            <h1 className="text-3xl font-medium mb-4 uppercase">{texts[lan].homeTitle2}</h1>
            <a href="#">
              <h2>ARTEBA, Buenos Aires</h2>1 - 3 de septiembre 2023
            </a>
          </section>
        </div>
        <div>
          <section className="flex flex-col items-start">
            {links.map((link, index) => (
              <a href={link.url} className="text-3xl font-medium hover-underline-animation uppercase" target="_blank" rel="noopener noreferrer" key={index}>
                {link.title}
              </a>
            ))}
          </section>
        </div>
      </section>

      <div className="fade-in-2 fixed w-screen h-screen top-0 left-0 -z-10 bg-home"></div>
    </>
  );
}
