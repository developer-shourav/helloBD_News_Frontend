"use client";
import { useEffect, useState } from "react";
import NavCTA from "./NavCTA";
import NavItems from "./NavItems";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  /* -----------Track Page Scrolling or Not----------- */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // if the page scroll more than 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full mx-auto ">
      {/* ----Nav Contact Section----- */}
      <div className="w-full fixed top-0 lg:static border-b lg:border-none ">
        <NavCTA />
      </div>
      {/* ------Nav Items-------- */}
      <NavItems />
    </header>
  );
}
