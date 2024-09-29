"use client";
import { useEffect, useState } from "react";
import NavCTA from "./NavCTA";
import NavItems from "./NavItems";
import NavbarLargeFixed from "./NavbarLargeFixed";
import NavSm from "./NavSm";

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
      {/* ---------------Conditional Navbar For Large Devices------------- */}

      <div className="hidden lg:block">
        {!isScrolled && (
          <div>
            {/* ----Nav Contact Section----- */}
            <NavCTA />
            {/* ------Nav Items-------- */}
            <NavItems />
          </div>
        )}

        {isScrolled && (
          <div className="hidden lg:block z-50 w-full mx-auto fixed top-0 shadow">
            <NavbarLargeFixed />
          </div>
        )}
      </div>

      {/* -----------Navbar For Small Devices---------- */}
      <div className="z-50 lg:hidden w-full fixed top-0 shadow">
        <NavSm />
      </div>
    </header>
  );
}
