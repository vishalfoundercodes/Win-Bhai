import { useParams } from "react-router-dom";
import SlidingTabs from "../Home/HomeComponents/SlidingTabs";
import sponser from "../../assets/Company/sponser.jpg";
import SlidingCompany from "../Home/HomeComponents/SlidingCompany";
import GamesOptions from "./GamesOptions";
import aviator1 from "../../assets/GameIcons/aviator1.jpg";
import aviaFly from "../../assets/GameIcons/aviaFly.png";

export default function Game() {
  const { tabName } = useParams();

  const Cassino = ({ active }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="-pb-2"
    >
      <g clipPath="url(#clip0_367_521)">
        <path
          d="M16.3333 0H8C7.08333 0 6.33333 0.75 6.33333 1.66667V15C6.33333 15.9167 7.08333 16.6667 8 16.6667H16.3333C17.25 16.6667 18 15.9167 18 15V1.66667C18 0.75 17.25 0 16.3333 0ZM16.3333 15H8V1.66667H16.3333V15ZM3 3.33333V18.3333C3 19.25 3.75 20 4.66667 20H14.6667V18.3333H4.66667V3.33333H3ZM12.1667 5C11.25 5 10.5 5.75 10.5 6.66667C10.5 7 10.5833 7.25 10.75 7.5H10.5C9.58333 7.5 8.83333 8.25 8.83333 9.16667C8.83333 10.0833 9.58333 10.8333 10.5 10.8333C11 10.8333 11.4167 10.5833 11.75 10.25L10.9167 12.5H13.4167L12.5833 10.25C12.9167 10.5833 13.3333 10.8333 13.8333 10.8333C14.75 10.8333 15.5 10.0833 15.5 9.16667C15.5 8.25 14.75 7.5 13.8333 7.5H13.5833C13.75 7.25 13.8333 7 13.8333 6.66667C13.8333 5.75 13.0833 5 12.1667 5Z"
          fill={active ? "#C10932" : "#C10932"}
        />
      </g>
      <defs>
        <clipPath id="clip0_367_521">
          <rect
            width="23"
            height="23"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  // ✅ Slot SVG
  const SlotIcon = ({ active }) => (
    <svg width="20" height="20" viewBox="0 0 20 20">
      <path
        d="M2 6.443V14.25C2 14.523 2.148 14.774 2.387 14.906L9.25 18.693V10.443L2 6.443ZM3.799 8.9C4.177 8.885 4.613 9.164 4.883 9.63C5.228 10.229 5.169 10.909 4.75 11.15C4.331 11.391 3.712 11.104 3.367 10.506C3.022 9.908 3.081 9.226 3.5 8.984C3.59141 8.93225 3.69401 8.90343 3.799 8.9ZM6.799 10.65C7.177 10.635 7.613 10.914 7.883 11.38C8.228 11.979 8.169 12.659 7.75 12.9C7.331 13.141 6.712 12.854 6.367 12.256C6.022 11.658 6.081 10.976 6.5 10.734C6.59141 10.6823 6.69401 10.6534 6.799 10.65ZM3.799 12.15C4.177 12.135 4.613 12.414 4.883 12.88C5.228 13.479 5.169 14.159 4.75 14.4C4.331 14.641 3.712 14.354 3.367 13.756C3.022 13.158 3.081 12.476 3.5 12.234C3.59141 12.1823 3.69401 12.1534 3.799 12.15ZM6.799 13.9C7.177 13.885 7.613 14.164 7.883 14.63C8.228 15.229 8.169 15.909 7.75 16.15C7.331 16.391 6.712 16.104 6.367 15.506C6.022 14.908 6.081 14.226 6.5 13.984C6.59141 13.9323 6.69401 13.9034 6.799 13.9ZM18 6.443L10.75 10.443V18.693L17.611 14.906C17.7286 14.8414 17.8267 14.7465 17.8951 14.6311C17.9635 14.5158 17.9997 14.3841 18 14.25V6.443ZM13.156 10.65C13.2762 10.6456 13.3953 10.6747 13.5 10.734C13.919 10.976 13.978 11.658 13.633 12.256C13.288 12.854 12.669 13.142 12.25 12.9C11.831 12.659 11.772 11.979 12.117 11.38C12.377 10.932 12.788 10.658 13.156 10.65ZM16.157 12.15C16.2772 12.1456 16.3963 12.1747 16.501 12.234C16.92 12.476 16.979 13.158 16.634 13.756C16.289 14.354 15.67 14.642 15.251 14.4C14.832 14.159 14.773 13.479 15.118 12.88C15.378 12.432 15.79 12.158 16.158 12.15M10 1C9.87299 1.00009 9.74809 1.03244 9.637 1.094L2.523 5.018L10 9.143L17.477 5.018L10.361 1.094C10.2505 1.03276 10.1263 1.00043 10 1ZM10 4.197C10.3315 4.197 10.6495 4.28919 10.8839 4.45328C11.1183 4.61738 11.25 4.83994 11.25 5.072C11.25 5.30406 11.1183 5.52662 10.8839 5.69072C10.6495 5.85481 10.3315 5.947 10 5.947C9.66848 5.947 9.35054 5.85481 9.11612 5.69072C8.8817 5.52662 8.75 5.30406 8.75 5.072C8.75 4.83994 8.8817 4.61738 9.11612 4.45328C9.35054 4.28919 9.66848 4.197 10 4.197Z"
        fill={active ? "#C10932" : "#C10932"}
      />
    </svg>
  );

  // ✅ Aviator SVG
  const AviatorIcon = ({ active }) => (
    <svg width="20" height="20" viewBox="0 0 20 20">
      <path
        d="M7.52824 4.96923L5.40907 7.0834C5.0199 7.47173 4.6624 7.82756 4.3799 8.15006C4.18874 8.36267 4.01616 8.59129 3.86407 8.8334L3.84407 8.81256L3.7649 8.73423C3.39572 8.37757 2.9626 8.09373 2.48824 7.89756L2.38574 7.8559L2.0699 7.7309C1.97154 7.69212 1.88439 7.62946 1.81631 7.54857C1.74823 7.46768 1.70137 7.37111 1.67995 7.26758C1.65853 7.16404 1.66323 7.0568 1.69363 6.95554C1.72403 6.85428 1.77917 6.76218 1.85407 6.68756C2.7874 5.7559 3.90824 4.6384 4.4499 4.41423C4.92035 4.21772 5.43511 4.15179 5.9399 4.2234C6.3949 4.2909 6.8249 4.52506 7.52824 4.96923ZM11.1474 16.0942C11.3182 16.2676 11.4307 16.3901 11.5341 16.5209C11.6691 16.6937 11.7896 16.8765 11.8957 17.0692C12.0141 17.2859 12.1066 17.5167 12.2907 17.9792C12.3269 18.0667 12.3841 18.1439 12.4572 18.204C12.5303 18.264 12.6171 18.3051 12.71 18.3236C12.8028 18.3421 12.8987 18.3373 12.9893 18.3098C13.0798 18.2823 13.1622 18.2329 13.2291 18.1659L13.2991 18.0967C14.2324 17.1659 15.3532 16.0484 15.5782 15.5092C15.7759 15.0408 15.8419 14.5274 15.7691 14.0242C15.7016 13.5701 15.4674 13.1409 15.0216 12.4392L12.8949 14.5592C12.4966 14.9567 12.1316 15.3209 11.8007 15.6059C11.6032 15.7776 11.3866 15.9476 11.1474 16.0942Z"
        fill={active ? "#C10932" : "#C10932"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0391 13.6469L16.9116 8.78852C17.6132 8.08935 17.9641 7.73935 18.1482 7.29518C18.3324 6.85102 18.3332 6.35518 18.3332 5.36602V4.89352C18.3332 3.37185 18.3332 2.61102 17.8591 2.13852C17.3849 1.66602 16.6224 1.66602 15.0966 1.66602H14.6216C13.6299 1.66602 13.1341 1.66602 12.6882 1.85018C12.2416 2.03435 11.8907 2.38435 11.1882 3.08352L6.31658 7.94185C5.49658 8.75852 4.98824 9.26602 4.79158 9.75518C4.73066 9.90384 4.69897 10.0629 4.69824 10.2235C4.69824 10.8918 5.23741 11.4302 6.31658 12.506L6.46158 12.6502L8.15991 10.926C8.21753 10.8675 8.2861 10.821 8.36172 10.789C8.43733 10.757 8.51851 10.7402 8.60061 10.7396C8.68271 10.7389 8.76413 10.7545 8.84022 10.7854C8.91631 10.8162 8.98558 10.8617 9.04408 10.9193C9.10257 10.977 9.14914 11.0455 9.18113 11.1212C9.21312 11.1968 9.22991 11.2779 9.23053 11.3601C9.23114 11.4422 9.21559 11.5236 9.18474 11.5997C9.15389 11.6758 9.10836 11.745 9.05074 11.8035L7.34658 13.5327L7.46074 13.6469C8.53991 14.7219 9.07991 15.2602 9.74991 15.2602C9.89824 15.2602 10.0399 15.2343 10.1824 15.1818C10.6849 14.9968 11.1982 14.4852 12.0391 13.6469ZM14.3282 7.94185C14.0243 8.24468 13.6127 8.41472 13.1837 8.41472C12.7546 8.41472 12.343 8.24468 12.0391 7.94185C11.8887 7.79237 11.7693 7.61462 11.6878 7.41883C11.6064 7.22304 11.5644 7.01308 11.5644 6.80102C11.5644 6.58896 11.6064 6.37899 11.6878 6.1832C11.7693 5.98741 11.8887 5.80966 12.0391 5.66018C12.343 5.35735 12.7546 5.18731 13.1837 5.18731C13.6127 5.18731 14.0243 5.35735 14.3282 5.66018C14.4787 5.80966 14.598 5.98741 14.6795 6.1832C14.761 6.37899 14.8029 6.58896 14.8029 6.80102C14.8029 7.01308 14.761 7.22304 14.6795 7.41883C14.598 7.61462 14.4787 7.79237 14.3282 7.94185Z"
        fill={active ? "#C10932" : "#C10932"}
      />
    </svg>
  );

  // Map tabName to display text
  const tabLabels = {
    home: "Home",
    sports: "Sports",
    maincassino: "Cassino",
    casino: "Casino",
    slot: "Slot",
    aviator: "Aviator",
    ColorPrediction: "Color Prediction",
    PopularGames: "Popular ",
    CrashGames: "Crash ",
    Cricket: "Cricket",
    Football: "Football",
    Tennis: "Tennis",
    Evolution: "Evolution",
    TurboGames: "Turbo ",
    SportsBook: "Sports Book",
    LivePrediction: "Live Prediction",
    FishingGames: "Fishing ",
    FunGames: "Fun ",
    Mines: "Mines",
    Plinko: "Plinko",
    Jili: "Jili",
    Spribe: "Spribe",
    Ezugi: "Ezugi",
    Mac88: "Mac88",
  };

  // ✅ Categories
  const categories = [
    { id: "home", label: "Home", type: "text" }, // no icon
    { id: "sports", label: "Casino", type: "custom", icon: Cassino },
    { id: "maincassino", label: "Casino", type: "custom", icon: Cassino },
    { id: "casino", label: "Casino", type: "custom", icon: Cassino },
    { id: "slot", label: "Slot Games", type: "custom", icon: SlotIcon },
    { id: "aviator", label: "Aviator", type: "custom", icon: AviatorIcon },
  ];

  const selectedTab = tabLabels[tabName] || "Home";
  // find by id (preferred) or by label (fallback)
  const selected =
    categories.find(
      (c) =>
        c.id.toLowerCase() === (tabName || "").toLowerCase() ||
        c.label.replace(/\s+/g, "").toLowerCase() ===
          (tabName || "").toLowerCase()
    ) || categories[0];

  const IconComp = selected.icon; // component or undefined

    const games = [
      { id: 1, name: "AviaFly", image: aviator1 },
      { id: 2, name: "Aviator", image: aviator1 },
      { id: 3, name: "AviaFly", image: aviator1 },
      { id: 4, name: "Aviator", image: aviator1 },
      { id: 5, name: "AviaFly", image: aviator1 },
      { id: 6, name: "Aviator", image: aviator1 },
      { id: 7, name: "AviaFly", image: aviator1 },
      { id: 8, name: "Aviator", image: aviator1 },
      { id: 9, name: "AviaFly", image: aviator1 },
      { id: 10, name: "Aviator", image: aviator1 },
    ];
  return (
    <div className="">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1 px-4 py-2 pt-4">
          {IconComp && (
            <IconComp
              active={false}
              className="w-6 h-6 text-gray-700" // give explicit size for consistent alignment
            />
          )}
          <h2 className="text-xl font-semibold text-gray-700 -pt-1">
            {selectedTab} Games
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative w-full px-4">
          {/* Search Icon */}
          <svg
            className="absolute left-6 top-1/2 -translate-y-1/2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5748 9.9264C12.3038 8.93392 12.7344 7.70865 12.7344 6.38281C12.7344 3.07342 10.0516 0.390625 6.74219 0.390625C3.43279 0.390625 0.75 3.07342 0.75 6.38281C0.75 9.69221 3.43279 12.375 6.74219 12.375C8.06838 12.375 9.29395 11.9442 10.2866 11.2148L10.2858 11.2154C10.313 11.2523 10.3432 11.2876 10.3766 11.321L13.9263 14.8706C14.2863 15.2306 14.87 15.2306 15.23 14.8706C15.59 14.5106 15.59 13.9269 15.23 13.5669L11.6803 10.0172C11.647 9.98387 11.6117 9.95359 11.5748 9.9264ZM11.8125 6.38281C11.8125 9.18307 9.54245 11.4531 6.74219 11.4531C3.94193 11.4531 1.67188 9.18307 1.67188 6.38281C1.67188 3.58256 3.94193 1.3125 6.74219 1.3125C9.54245 1.3125 11.8125 3.58256 11.8125 6.38281Z"
              fill="#969696"
            />
          </svg>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search games"
            className="w-full pl-9 pr-4 py-2 rounded-md border border-grayBorder bg-white focus:outline-none focus:ring-2 focus:ring-grayBorder"
          />
        </div>
      </div>

      {/* Tabs again */}
      <div className="flex gap-2 mt-4">
        <SlidingTabs withHeader={true} />
      </div>

      {/* Provider name */}
      <div className="py-2 text-gray-700 text-lg font-semibold  px-4">
        <h2>Choose Provider</h2>
        <div className="mt-2">
          <SlidingCompany />
        </div>
      </div>
      {/* Sponser */}
      <div className=" px-4 py-2">
        <img src={sponser} alt="" className="w-full h-full rounded-xl" />
      </div>
      {/* Sub games list  */}
      <div className="py-2  px-4">
        <GamesOptions />
      </div>
      {/* Games list */}
      <div className=" px-4 py-2">
        <div className="grid grid-cols-3 gap-4 pb-2">
          {games.map((game) => (
            <div
              key={game.id}
              className="aspect-[3/4] rounded-[8px] overflow-hidden"
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
