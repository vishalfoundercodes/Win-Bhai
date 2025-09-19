import React, { useState, useRef, useEffect } from "react";

export default function Learn() {
  const [category, setCategory] = useState("All");
  const [language, setLanguage] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null); // track which dropdown is open
  const ref = useRef(null);

  const categories = ["All", "Math", "Science", "History", "Programming"];
  const languages = ["English", "Hindi", "Marathi", "Tamil"];

  // close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-200 flex flex-col items-center p-6"
      style={{
        fontFamily: "Roboto",
      }}
    >
      {/* Title */}
      <h1 className="text-lg font-medium text-gray-800 mb-2">
        Learn and Become Smart
      </h1>

      <div className="w-full space-y-4" ref={ref}>
        {/* Categories (Custom Dropdown) */}
        <div className="w-full relative">
          <label className="block text-gray-700 font-medium text-lg mb-2">
            Categories
          </label>

          <div
            className="flex justify-between w-full  bg-white cursor-pointer border border-[#ADADAD] rounded-md px-3 py-2 items-center"
            onClick={() =>
              setOpenDropdown(openDropdown === "category" ? null : "category")
            }
          >
            <div
              className={` ${openDropdown === "category" ? "ring-none" : ""}`}
              style={{
                fontFamily: "Robot",
                fontSize: "16px",
                fontWeight: "400px",
              }}
            >
              {category || "Select category"}
            </div>
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.66 0.433036L13.72 1.49404L7.943 7.27304C7.85043 7.36619 7.74036 7.44012 7.61911 7.49057C7.49786 7.54101 7.36783 7.56699 7.2365 7.56699C7.10517 7.56699 6.97514 7.54101 6.85389 7.49057C6.73264 7.44012 6.62257 7.36619 6.53 7.27304L0.75 1.49404L1.81 0.434036L7.235 5.85804L12.66 0.433036Z"
                fill="#969696"
              />
            </svg>
          </div>

          {openDropdown === "category" && (
            <div className="absolute mt-1 w-full bg-white  rounded-md shadow-lg z-10">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  className={`px-3 py-2 hover:bg-gray-100 cursor-pointer  ${
                    i !== categories.length - 1
                      ? "border-b border-[#E5E7EB]"
                      : ""
                  }`}
                  style={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: "400px",
                  }}
                  onClick={() => {
                    setCategory(cat);
                    setOpenDropdown(null);
                  }}
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Language (Custom Dropdown) */}
        <div className="w-full relative">
          <label className="block text-gray-700 text-lg font-medium mb-2">
            Language
          </label>

          <div
            className="flex justify-between w-full  bg-white cursor-pointer border border-[#ADADAD] rounded-md px-3 py-2 items-center "
            onClick={() =>
              setOpenDropdown(openDropdown === "language" ? null : "language")
            }
          >
            <div
              className={` ${openDropdown === "language" ? "ring-none" : ""}`}
              style={{
                fontFamily: "Robot",
                fontSize: "16px",
                fontWeight: "400px",
              }}
            >
              {language || "Select language"}
            </div>
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.66 0.433036L13.72 1.49404L7.943 7.27304C7.85043 7.36619 7.74036 7.44012 7.61911 7.49057C7.49786 7.54101 7.36783 7.56699 7.2365 7.56699C7.10517 7.56699 6.97514 7.54101 6.85389 7.49057C6.73264 7.44012 6.62257 7.36619 6.53 7.27304L0.75 1.49404L1.81 0.434036L7.235 5.85804L12.66 0.433036Z"
                fill="#969696"
              />
            </svg>
          </div>
          {openDropdown === "language" && (
            <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-10">
              {languages.map((lang, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer ${
                    i !== languages.length - 1
                      ? "border-b border-[#E5E7EB]"
                      : ""
                  }`}
                  style={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400, // px hata diya, px mat use karo
                  }}
                  onClick={() => {
                    setLanguage(lang);
                    setOpenDropdown(null);
                  }}
                >
                  {/* Text */}
                  <span>{lang}</span>

                  {/* Circle indicator */}
                  <span
                    className={`w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center`}
                  >
                    {language === lang && (
                      <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
