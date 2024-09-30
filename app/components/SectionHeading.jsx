import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
const SectionHeading = ({ headingText, listCount, showArrow }) => {
  return (
    <div>
      <div className="flex justify-between">
        <div class="relative inline-block bg-[#2E3192] text-white fontSolaimanLipi px-3 py-[5px] section-title">
          <span class="font-bold text-[17px]">{headingText}</span>
        </div>

        <div className="flex items-center gap-4">
          {listCount && <span className="text-gray-400">All</span>}
          {showArrow && (
            <div className="flex text-gray-400">
              <MdArrowBackIos />
              <MdArrowForwardIos />
            </div>
          )}
        </div>
      </div>
      <div className="border border-gray-700 mb-5"></div>
    </div>
  );
};

export default SectionHeading;
