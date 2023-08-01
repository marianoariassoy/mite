import Link from "next/link";
import Nav from "./Nav";
import Bars from "./Bars";
import { Logo } from "@/icons/MyIcons";

const Header = () => {
  return (
    <header className="fixed z-50 h-36 grid grid-cols-[4rem_1fr] lg:grid-cols-[11rem_1fr]">
      <div className="flex p-4 lg:justify-end lg:pr-16">
        <Link href="/" className="relative inline-block">
          <div className="absolute w-[150%] h-[120%] top-0 backdrop-blur-sm -ml-2 -mt-2 opacity-0 hover:opacity-100 z-10 transition"></div>
          <Logo />
        </Link>
      </div>
      <div>
        <Nav />
      </div>
      <div className="fixed right-4 top-4">
        <Bars />
      </div>
    </header>
  );
};

export default Header;
