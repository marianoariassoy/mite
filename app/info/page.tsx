"use client";

import Image from "next/image";
import { useContext } from "react";
import { links, texts } from "@/data/data";
import { LanguageContext } from "@/context/language";

type lan = "es" | "en";

const Pages = () => {
  const { lan } = useContext(LanguageContext) as { lan: lan };

  return (
    <section className="grid lg:grid-cols-2 lg:gap-16 max-w-5xl" id="info">
      <div>
        <div className="mb-8 lg:mb-12 aspect-[4/5] object-cover overflow-hidden">
          <Image
            src="https://www.mitegaleria.com.ar/imgs/local.jpg"
            alt="Picture of mitegaleria.com.ar"
            width={500}
            height={500}
            blurDataURL="data:..."
            placeholder="blur"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        <div className="mb-8 lg:mb-12">
          <h2 className="mb-4">{texts[lan].contactTxt1}</h2>
          Avenida Córdoba 380 <br />
          C1054AAP, Buenos Aires, Argentina. <br />
          {texts[lan].contactTxt2} <br />
          <a href="https://calendly.com/mitegaleria" target="_blank" rel="noopener noreferrer">
            {texts[lan].contactTxt3}
          </a>
        </div>

        <div className="mb-12 lg:mb-0">
          <h2 className="mb-4">{texts[lan].contactTxt4}</h2>
          <a href="mailto:info@mitegaleria.com.ar" className="mb-4 block">
            info@mitegaleria.com.ar
          </a>
          {links.map((link, index) => (
            <a href={link.url} className="block" target="_blank" rel="noopener noreferrer" key={index}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-12 aspect-[4/5] object-cover overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6568.437549097792!2d-58.372424!3d-34.598629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb47e10f27%3A0x38553ab3f0c8a29c!2sAv.%20C%C3%B3rdoba%20380%2C%20C1054AAP%20CABA!5e0!3m2!1sen!2sar!4v1689708889691!5m2!1sen!2sar"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mb-12">
          <h2 className="mb-4">NEWSLETTER</h2>
          <form>
            <div className="mb-4">
              <input type="text" className="border border-black h-10 w-2/3 px-2" placeholder="e-mail" />
            </div>
            <button className="hover:bg-black hover:text-white">{texts[lan].contactTxt5}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Pages;
