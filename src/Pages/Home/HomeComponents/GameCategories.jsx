/* GamesGrid.jsx */
import casinoImage from "../../../assets/Home/Games/live cassino.png";
import cardGames from "../../../assets/Home/Games/card games.png"
import crashGames from "../../../assets/Home/Games/carsh games.png"
import evolution from "../../../assets/Home/Games/evolution.png"
import BG1 from "../../../assets/JPEG/Background+Shadow-1.jpg";
import BG2 from "../../../assets/JPEG/Background+Shadow-2.jpg";
import BG3 from "../../../assets/JPEG/Background+Shadow-3.jpg";
import BG4 from "../../../assets/JPEG/Background+Shadow-4.jpg";
import BG5 from "../../../assets/JPEG/Background+Shadow-5.jpg";
import BG6 from "../../../assets/JPEG/Background+Shadow-6.jpg";
import BG7 from "../../../assets/JPEG/Background+Shadow-7.jpg";
import BG8 from "../../../assets/JPEG/Background+Shadow-8.jpg";
import BG9 from "../../../assets/JPEG/Background+Shadow-9.jpg";
import BG10 from "../../../assets/JPEG/Background+Shadow-10.jpg";
import BG11 from "../../../assets/JPEG/Background+Shadow-11.jpg";
import BG12 from "../../../assets/JPEG/Background+Shadow-12.jpg";
import BG13 from "../../../assets/JPEG/Background+Shadow-13.jpg";
import BG14 from "../../../assets/JPEG/Background+Shadow-14.jpg";
import BG15 from "../../../assets/JPEG/Background+Shadow-15.jpg";
import BG16 from "../../../assets/JPEG/Background+Shadow-16.jpg";
import BG17 from "../../../assets/JPEG/Background+Shadow-17.jpg";
import BG18 from "../../../assets/JPEG/Background+Shadow-18.jpg";
import BG19 from "../../../assets/JPEG/Background+Shadow-19.jpg";
import BG20 from "../../../assets/JPEG/Background+Shadow-20.jpg";
import BG from "../../../assets/JPEG/Background+Shadow.jpg";
import { useScroll } from "../../../Context/ScrollContext";
import { useNavigate } from "react-router-dom";
const categories = [
  {
    name: "Card games",
    icon: "🎮",
    image: BG,
    brandId: "78",
    id: "Ezugi",
    cat_id: 13,
  },
  {
    name: "Crash Games",
    icon: "🎮",
    image: BG1,
    brandId: "104",
    id: "CrashGames",
    cat_id: 28,
  },
  {
    name: "Evolution",
    icon: "🎮",
    image: BG2,
    brandId: "58",
    id: "Evolution",
    cat_id: 10,
  },
  { name: "Mac88", icon: "🎮", image: BG3, id: "Mac88", cat_id: 6 },
  {
    name: "Live Cassino",
    icon: "🎮",
    image: BG4,
    brandId: "78",
    id: "Ezugi",
    cat_id: 13,
  },
  {
    name: "Fishing games",
    icon: "🎮",
    image: BG5,
    id: "FishingGames",
    cat_id: 30,
  },
  { name: "Mines", icon: "🎮", image: BG6, brandId: "104", id: "Mines" },
  {
    name: "Jilli",
    icon: "🎮",
    image: BG7,
    brandId: "49",
    id: "Jili",
    cat_id: 15,
  },
  {
    name: "Ezugi",
    icon: "🎮",
    image: BG8,
    brandId: "78",
    id: "Ezugi",
    cat_id: 13,
  },
  {
    name: "PG Games",
    icon: "🎮",
    image: BG9,
    brandId: "123",
    id: "PGsGaming",
    cat_id: 21,
  },
  {
    name: "Aura",
    icon: "🎮",
    image: BG10,
    id: "Aura",
    cat_id: 31,
  },
  {
    name: "Cassino",
    icon: "🎮",
    image: BG11,
    brandId: "78",
    id: "Ezugi",
    cat_id: 13,
  },
  {
    name: "Turbo Games",
    icon: "🎮",
    image: BG12,
    brandId: "100",
    id: "TurboGames",
    cat_id: 18,
  },
  {
    name: "Color Prediction",
    icon: "🎮",
    image: BG13,
    brandId: "2",
    id: "ColorChickenGames",
    cat_id: 7,
  },
  { name: "Sport book ", icon: "🎮", image: BG14, id: "SportsBook" },
  {
    name: "Slot Games",
    icon: "🎮",
    image: BG15,
    brandId: "1",
    id: "SlotGames",
    cat_id: 29,
  },
  {
    name: "Fun Games",
    icon: "🎮",
    image: BG16,
    brandId: "49",
    id: "FunGames",
    cat_id: 5,
  },
  { name: "Plinko", icon: "🎮", image: BG17, brandId: "57", id: "Plinko" },
  {
    name: "Spribe",
    icon: "🎮",
    image: BG18,
    brandId: "57",
    id: "Spribe",
    cat_id: 9,
  },
  {
    name: "Inout",
    icon: "🎮",
    image: BG19,
    brandId: "112",
    id: "InOut",
    cat_id: 12,
  },
  {
    name: "MiniGames",
    icon: "🎮",
    image: BG20,
    brandId: "104",
    id: "MiniGames",
    cat_id: 22,
  },
  // { name: "Live Casinos", icon: "👑", image: cardGames },
  // { name: "Evolution", icon: "🍃", image: crashGames },
  // { name: "Card Games", icon: "🃏", image: evolution },
];

// Sample brand games data
const brandGames = [
  { 
    brand: { brand_id: "78", brand_title: "Crash Games 1", logo: "🚀" },
    games: [
      { id: 1, name: "Aviator", image: "🛩️" },
      { id: 2, name: "Rocket", image: "🚀" },
      { id: 3, name: "JetX", image: "✈️" },
    ]
  },
  { 
    brand: { brand_id: "49", brand_title: "Jili Games", logo: "🎮" },
    games: [
      { id: 4, name: "Fortune Tree", image: "🌳" },
      { id: 5, name: "Lucky Slots", image: "🎰" },
    ]
  },
  { 
    brand: { brand_id: "57", brand_title: "Slot Masters", logo: "🎰" },
    games: [
      { id: 6, name: "Mega Spin", image: "💎" },
      { id: 7, name: "Wild West", image: "🤠" },
    ]
  },
  { 
    brand: { brand_id: "52", brand_title: "Card Pro", logo: "🃏" },
    games: [
      { id: 8, name: "Poker", image: "♠️" },
      { id: 9, name: "Blackjack", image: "♥️" },
    ]
  },
];
export default function GameCategories() {
  const { scrollToSection } = useScroll();
  const navigate = useNavigate();
//     const handleClick=(id)=>{
// // setActive(id)
// if(id=="home"){
// navigate("/");
// }
// else{
// navigate(`/game/${id}`);
// }}
const handleClick = (cat) => {
  const { id, cat_id, name, brandId } = cat;

  if (id === "home") {
    navigate("/", { state: { cat_id } });
  } else {
    navigate(`/game/${id}`, {
      state: {
        selectedCategory: {
          id,
          cat_id,
          name,
          brandId,
        },
      },
    });
  }
};

  // 2 rows banane ke liye split karenge
  const firstRow = categories.filter((_, i) => i % 2 === 0);
  const secondRow = categories.filter((_, i) => i % 2 !== 0);

  const renderRow = (row) => (
    <div className="flex space-x-2">
      {row.map((cat, i) => (
        <div
          key={i}
          onClick={() => {
            // scrollToSection(cat.brandId)
            handleClick(cat)
          }}
          className="relative rounded-[5px] overflow-hidden shadow-lg h-8 w-38 xsm4:w-40 xsm3:w-42 xxs:w-48  flex-shrink-0 cursor-pointer"
        >
          {/* Background image */}
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-cover rounded-[8px]"
          />

          {/* Left gradient overlay */}
          {/* <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] flex items-center px-2">
            <div className="flex items-center space-x-2 text-white font-semibold text-sm">
              <span className="text-xl">{cat.icon}</span>
              <span className="whitespace-nowrap">{cat.name}</span>
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );

  return (
    <div className="overflow-x-auto hide-scrollbar">
      <div className="flex flex-col space-y-2 min-w-max px-4 pr-4 py-2">
        {renderRow(firstRow)}
        {renderRow(secondRow)}
      </div>
    </div>
  );
}

