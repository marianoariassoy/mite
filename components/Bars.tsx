"use client";

const Bars = () => {
  const OpenMenu = () => {
    document.querySelector(".nav-menu")!.classList.toggle("active");
    document.querySelector("nav")!.classList.toggle("hidden");
  };

  return (
    <div className="nav-menu" onClick={OpenMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Bars;
