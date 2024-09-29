import Link from "next/link";
import DateDisplay from "../DisplayDate";
import WebMaxSize from "../WebMaxSize";
import { FaChevronDown } from "react-icons/fa";

const NavItems = () => {
    return (
        <div className="hidden h-[58px] lg:flex items-center border-y fontNirmala">
        <WebMaxSize>
          <div className="flex justify-between items-center">
            {/* --------All Navigation Items--------- */}
            <nav className="flex gap-[30px] text-[13px] font-bold text-[#313131] ">
              <Link href="#" className="hover:text-blue-800 ">সর্বশেষ</Link>
              <Link href="#" className="hover:text-blue-800 ">বাংলাদেশ</Link>
              <Link href="#" className="hover:text-blue-800 ">বিশ্ব</Link>
              <Link href="#" className="hover:text-blue-800 ">বাণিজ্য</Link>
              <Link href="#" className="hover:text-blue-800 ">খেলা</Link>
              <Link href="#" className="hover:text-blue-800 ">বিনোদন</Link>
              <Link href="#" className="hover:text-blue-800 ">লাইফস্টাইল</Link>
              <Link href="#" className="hover:text-blue-800 ">বিজ্ঞান ও প্রযুক্তি</Link>
              <Link href="#" className="hover:text-blue-800 ">স্থাপত্য ও প্রকৌশল</Link>
              <Link href="#" className="hover:text-blue-800 ">সফল মুখ</Link>
              <Link href="#" className="hover:text-blue-800 ">অন্যান্য <FaChevronDown className="font-[400] text-[10px] inline ms-[2px] text-gray-500"/>  </Link>
            </nav>
            {/* ------------Dynamic Date Showing----------- */}
            <div>
              <DateDisplay />
            </div>
          </div>
        </WebMaxSize>
      </div>
    );
};

export default NavItems;