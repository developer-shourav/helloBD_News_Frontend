import DateDisplay from "../DisplayDate";
import WebMaxSize from "../WebMaxSize";
import NavLinks from "./NavLinks";


const NavItems = () => {
    return (
        <div className="hidden h-[58px] lg:flex  items-center border-y fontNirmala">
        <WebMaxSize>
          <div className="flex justify-between items-center">
            {/* --------All Navigation Items--------- */}
             <NavLinks/>
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