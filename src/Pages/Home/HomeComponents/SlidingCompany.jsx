import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // search icon
import Company1 from "../../../assets/Company/pgs.png";
import Company2 from "../../../assets/Company/company2.png";
import Company3 from "../../../assets/Company/company3.png";
import Company4 from "../../../assets/Company/company4.png";
import Evolution_Electronic from "../../../assets/Company/Evolution_Electronic.png";
import evolution from "../../../assets/Company/evolution.png";
import ezugi from "../../../assets/Company/ezugi.png";
import GamingBet from "../../../assets/Company/GamingBet.png";
import InOut from "../../../assets/Company/InOut.png";
import jili from "../../../assets/Company/jili.png";
import Mac88 from "../../../assets/Company/Mac88.png";
import Mini from "../../../assets/Company/Mini.png";
import playtech from "../../../assets/Company/playtech.png";
import SABA_Sports from "../../../assets/Company/SABA_Sports.png";
import The_Btap from "../../../assets/Company/The_Btap.png";
import Turbo_Games from "../../../assets/Company/Turbo_Games.png";
import live88 from "../../../assets/Company/live88.png";
import Spribe from "../../../assets/Company/Spribe.png";
import smart_soft from "../../../assets/Company/smart_soft.png";
import { useScroll } from "../../../Context/ScrollContext";
import { useNavigate } from "react-router-dom";

// ✅ Categories
const categories = [
  { id: "casino", type: "custom", icon: Company1, name: "PG", brandId: "123" },
  { id: "slot", type: "custom", icon: Company2, name: "CQ9", brandId: "52" },
  { id: "aviator", type: "custom", icon: Company3, name: "JDB", brandId: "50" },
  {
    id: "aviator2",
    type: "custom",
    icon: jili,
    name: "Aviator",
    brandId: "49",
  },
  {
    id: "aviator2",
    type: "custom",
    icon: InOut,
    name: "Aviator",
    brandId: "112",
  },

  {
    id: "aviator2",
    type: "custom",
    icon: evolution,
    name: "Aviator",
    brandId: "58",
  },
  {
    id: "aviator2",
    type: "custom",
    icon: Spribe,
    name: "Aviator",
    brandId: "57",
  },
  {
    id: "aviator2",
    type: "custom",
    icon: smart_soft,
    name: "Aviator",
    brandId: "107",
  },
  {
    id: "aviator2",
    type: "custom",
    icon: Mini,
    name: "Aviator",
    brandId: "104",
  },
  {
    id: "aviator2",
    type: "custom",
    icon: GamingBet,
    name: "Aviator",
    brandId: "",
  },
  {
    id: "aviator2",
    type: "custom",
    icon: The_Btap,
    name: "Aviator",
    brandId: "",
  },
  {
    id: "aviator2",
    type: "custom",
    icon: playtech,
    name: "Aviator",
    brandId: "72",
  },

  {
    id: "aviator2",
    type: "custom",
    icon: SABA_Sports,
    name: "Aviator",
    brandId: "46",
  },

  {
    id: "aviator2",
    type: "custom",
    icon: live88,
    name: "Aviator",
    brandId: "",
  },

  {
    id: "aviator2",
    type: "custom",
    icon: Turbo_Games,
    name: "Aviator",
    brandId: "100",
  },
  {
    id: "aviator2",
    type: "custom",
    icon: ezugi,
    name: "Aviator",
    brandId: "78",
  },

  {
    id: "aviator2",
    type: "custom",
    icon: Mac88,
    name: "Aviator",
    brandId: "",
  },
  // {
  //   id: "aviator2",
  //   type: "custom",
  //   icon: Company4,
  //   name: "Aviator",
  //   brandId: "2",
  // },
  {
    id: "aviator2",
    type: "custom",
    icon: Evolution_Electronic,
    name: "Aviator",
    brandId: "",
  },
];

export default function SlidingCompany() {
  const [active, setActive] = useState("");
   const { scrollToSection } = useScroll();
   const navigate = useNavigate();

  return (
    <div className="relative w-full overflow-x-auto hide-scrollbar ">
      {/* ✅ Scrollable Categories */}
      <div className="w-full overflow-x-auto hide-scrollbar ">
        <div className="flex gap-2 min-w-max mr-[36px]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {setActive(cat.id);
                //  navigate("");scrollToSection(cat.brandId) 
  //                if (window.location.pathname === "/") {
  //   // Already on home page → just scroll
  //   scrollToSection(cat.brandId);
  // } else {
  //   // Navigate to home page first → then scroll
  //   navigate("/", { state: { scrollTo: cat.brandId } });
  // }
       if (window.location.pathname !== "/") {
         navigate("/"); // go to homepage first
         setTimeout(() => scrollToSection(cat.brandId), 800); // scroll after render
       } else {
         scrollToSection(cat.brandId);
       }
}}
              className={`flex items-center justify-center w-[80px] xsm4:w-[85px] xsm3:w-[90px] xxs:w-[105px] h-[40px] lg2:w-[255px] lg2:h-[50px] rounded-[8px] border transition-all duration-200 px-4 py-2 cursor-pointer
                ${
                  active === cat.id
                    ? "bg- border-maroon"
                    : "bg-white border-maroon"
                }`}
            >
              <img
                src={cat.icon}
                alt={cat.id}
                className="max-h-[24px] w-full object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Fixed Search Button */}
      {/* <button
        className="absolute right-0 top-0 bottom-0 my-auto flex items-center justify-center w-[40px] h-[40px] 
        bg-red text-white border border-red rounded-l-[25px] shrink-0 lg2:hidden"
      >
        <FaSearch className="text-lg" />
      </button> */}
    </div>
  );
}
