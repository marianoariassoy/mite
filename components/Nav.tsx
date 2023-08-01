"use client";

import { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menu } from "../data/data";
import { LanguageContext } from "@/context/language";

const Nav = () => {
  const pathname = usePathname();
  const { lan } = useContext(LanguageContext);

  const closeNav = () => {
    document.querySelector(".nav-menu")!.classList.toggle("active");
    document.querySelector("nav")!.classList.toggle("hidden");
    console.log("si");
  };

  return (
    <nav className="backdrop-blur-sm pb-3 pt-3 h-screen w-screen hidden lg:flex lg:h-auto" onClick={closeNav}>
      <div className="flex text-2xl uppercase flex-col gap-x-16 lg:flex-row">
        {menu.map((item) => {
          const isActive = pathname.startsWith(item.url);
          return (
            <Link href={item.url} className={` ${isActive ? "active" : "hover-underline-animation"} `} key={item.id}>
              {lan === "es" ? item.title : item.title_en}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
