import WebMaxSize from "../WebMaxSize";
import Image from "next/image";
import siteLogo from "../../../assets/images/LogoHelloBd.webp";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const NavSm = () => {
  return (
    <WebMaxSize>
      <div className="w-full mx-auto flex justify-between items-center py-[10px] bg-white">
        {/* ---------Menu For Small Devices-------- */}
        <IoMenu className="text-black  p-[4px] text-4xl font-bold" />
        {/* --------Small Devices Site Logo-------- */}
        <Image width={169} src={siteLogo} alt="hellobd.news logo" />

        {/* ---------Search option For Small Devices-------- */}
        <div className="px-[8px] py-[4px] font-[300] text-gray-600 border border-black text-lg">
          <IoSearch />
        </div>
      </div>
    </WebMaxSize>
  );
};

export default NavSm;
