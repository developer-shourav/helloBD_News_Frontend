import WebMaxSize from "../WebMaxSize";
import Image from "next/image";
import siteLogo from "../../../assets/images/LogoHelloBd.webp";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const NavCTA = () => {
  return (
    <WebMaxSize>
      <div className="w-full mx-auto flex justify-between items-center py-[10px] lg:py-[30px]">
        
        <div>
          <Image width={169} src={siteLogo} alt="hellobd.news logo" />
        </div>

        {/* ------Social Icon For Large Devices--------- */}
        <div className="hidden lg:flex items-center gap-[10px] text-white">
          <a
            href="#"
            className=" bg-[#0d47a1] hover:bg-[#0d48a1de] p-[7px] text-sm font-bold"
          >
            <FaFacebookF />
          </a>
          <a href="#" className="bg-[#ff0000]  p-[6px] ">
            <FaYoutube />
          </a>
          <a
            href="#"
            className="bg-[#0077b5] hover:bg-[#0076b5e1] p-[7px] text-sm font-bold"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="bg-[#0084ff] hover:bg-[#0084ffe8] p-[7px] text-sm"
          >
            <FaEnvelope />
          </a>
          <a href="#" className="bg-[#303f9f]  p-[4px] text-xl font-bold">
            <IoMenu />
          </a>
          <a
            href="#"
            className="px-[8px] py-[4px] font-[300] text-gray-600 border border-black text-lg"
          >
            <IoSearch />
          </a>
        </div>
      </div>
    </WebMaxSize>
  );
};

export default NavCTA;
