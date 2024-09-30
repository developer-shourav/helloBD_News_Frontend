import WebMaxSize from "../WebMaxSize";
import Image from "next/image";
import siteLogo from "../../../assets/images/LogoHelloBd.webp";
import { IoSearch } from "react-icons/io5";
import NavLinks from "./NavLinks";

const NavbarLargeFixed = () => {
  return (
    <WebMaxSize>
      <div className="w-full mx-auto flex justify-between items-center h-[58px] bg-white">
        <div className="flex items-center gap-5">
          {/* ------ Website Logo --------- */}
          <div>
            <Image width={143} src={siteLogo} alt="hellobd.news logo" />
          </div>

          {/* --------All Navigation Items--------- */}
          <NavLinks />
        </div>

        {/* ---------Search option -------- */}
        <div className=" px-[8px] py-[4px] font-[300] text-gray-600 border border-black text-lg">
          <IoSearch />
        </div>
      </div>
    </WebMaxSize>
  );
};

export default NavbarLargeFixed;
