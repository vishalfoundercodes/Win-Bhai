import React, { createContext, useContext, useRef, useState } from "react";

const ScrollContext = createContext();

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within ScrollProvider");
  }
  return context;
};

export const ScrollProvider = ({ children }) => {
  const sectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState(null);

const scrollToSection = (brandId) => {
  console.log("🎯 Attempting to scroll to brand:", brandId);

  const sectionRef = sectionRefs.current[brandId];

  if (sectionRef) {
    setActiveSection(brandId);

    // ✅ METHOD 1: Use document.getElementById (most reliable)
    const targetElement = document.getElementById(`brand-${brandId}`);

    if (targetElement) {
      console.log("✅ Element found via ID, scrolling...");

      // Get the main scroll container
      const mainContainer =
        document.getElementById("main-scroll-container") ||
        document.querySelector(".w-\\[80\\%\\]") ||
        window;

      if (mainContainer !== window) {
        // Scroll inside container
        const elementRect = targetElement.getBoundingClientRect();
        const containerRect = mainContainer.getBoundingClientRect();
        const scrollTop = mainContainer.scrollTop;
        const targetTop = elementRect.top - containerRect.top + scrollTop - 100;

        mainContainer.scrollTo({
          top: targetTop,
          behavior: "smooth",
        });
      } else {
        // Scroll window
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }

      // Visual feedback
      setTimeout(() => {
        targetElement.style.transform = "scale(1.02)";
        targetElement.style.transition = "all 0.3s ease";
        targetElement.style.border = "4px solid #ef4444";
        targetElement.style.boxShadow = "0 0 30px rgba(239, 68, 68, 0.6)";

        setTimeout(() => {
          targetElement.style.transform = "scale(1)";
          setTimeout(() => {
            targetElement.style.border = "none";
            targetElement.style.boxShadow = "none";
          }, 300);
        }, 300);
      }, 300);
    }
  }
};

  // ✅ Helper function to find scrollable parent
  const findScrollableParent = (element) => {
    if (!element) return window;

    let parent = element.parentElement;

    while (parent) {
      const overflowY = window.getComputedStyle(parent).overflowY;
      const overflowX = window.getComputedStyle(parent).overflowX;

      // Check if this parent is scrollable
      if (
        (overflowY === "auto" ||
          overflowY === "scroll" ||
          overflowX === "auto" ||
          overflowX === "scroll") &&
        parent.scrollHeight > parent.clientHeight
      ) {
        console.log("Found scrollable parent:", parent);
        return parent;
      }

      parent = parent.parentElement;
    }

    return window;
  };

  const registerSection = (brandId, element) => {
    if (element) {
      console.log("📝 Registering section:", brandId);
      sectionRefs.current[brandId] = element;
    }
  };

  return (
    <ScrollContext.Provider
      value={{
        scrollToSection,
        registerSection,
        activeSection,
        sectionRefs,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
