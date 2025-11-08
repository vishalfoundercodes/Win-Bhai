// import React, { createContext, useContext, useRef, useState } from "react";

// const ScrollContext = createContext();

// export const useScroll = () => {
//   const context = useContext(ScrollContext);
//   if (!context) {
//     throw new Error("useScroll must be used within ScrollProvider");
//   }
//   return context;
// };

// export const ScrollProvider = ({ children }) => {
//   const sectionRefs = useRef({});
//   const [activeSection, setActiveSection] = useState(null);

// // const scrollToSection = (brandId) => {
// //   console.log("🎯 Attempting to scroll to brand:", brandId);

// //   const sectionRef = sectionRefs.current[brandId];

// //   if (sectionRef) {
// //     setActiveSection(brandId);

// //     // ✅ METHOD 1: Use document.getElementById (most reliable)
// //     const targetElement = document.getElementById(`brand-${brandId}`);

// //     if (targetElement) {
// //       console.log("✅ Element found via ID, scrolling...");

// //       // Get the main scroll container
// //       const mainContainer =
// //         document.getElementById("main-scroll-container") ||
// //         document.querySelector(".w-\\[80\\%\\]") ||
// //         window;

// //       if (mainContainer !== window) {
// //         // Scroll inside container
// //         const elementRect = targetElement.getBoundingClientRect();
// //         const containerRect = mainContainer.getBoundingClientRect();
// //         const scrollTop = mainContainer.scrollTop;
// //         const targetTop = elementRect.top - containerRect.top + scrollTop - 100;

// //         mainContainer.scrollTo({
// //           top: targetTop,
// //           behavior: "smooth",
// //         });
// //       } else {
// //         // Scroll window
// //         targetElement.scrollIntoView({
// //           behavior: "smooth",
// //           block: "start",
// //           inline: "nearest",
// //         });
// //       }

// //       // Visual feedback
// //       setTimeout(() => {
// //         targetElement.style.transform = "scale(1.02)";
// //         targetElement.style.transition = "all 0.3s ease";
// //         targetElement.style.border = "4px solid #ef4444";
// //         targetElement.style.boxShadow = "0 0 30px rgba(239, 68, 68, 0.6)";

// //         setTimeout(() => {
// //           targetElement.style.transform = "scale(1)";
// //           setTimeout(() => {
// //             targetElement.style.border = "none";
// //             targetElement.style.boxShadow = "none";
// //           }, 300);
// //         }, 300);
// //       }, 300);
// //     }
// //   }
// // };

//   // ✅ Helper function to find scrollable parent
  
//   const scrollToSection = (brandId) => {
//     console.log("🎯 Attempting to scroll to brand:", brandId);
//     const target = document.getElementById(`brand-${brandId}`);

//     // Detect active scroll container
//     const mobileContainer = document.getElementById(
//       "main-scroll-container-mobile"
//     );
//     const desktopContainer = document.getElementById(
//       "main-scroll-container-desktop"
//     );

//     const scrollContainer =
//       window.innerWidth < 1024 ? mobileContainer : desktopContainer;

//     if (target && scrollContainer) {
//       console.log("✅ Element found via ID, scrolling...");

//       const containerTop = scrollContainer.getBoundingClientRect().top;
//       const targetTop = target.getBoundingClientRect().top;
//       const offset = targetTop - containerTop + scrollContainer.scrollTop - 80;

//       scrollContainer.scrollTo({ top: offset, behavior: "smooth" });
//     } else if (target) {
//       console.warn("⚠️ Container not found, scrolling window...");
//       target.scrollIntoView({ behavior: "smooth", block: "start" });
//     } else {
//       console.warn("❌ Scroll target not found");
//     }
//   };

  
//   const findScrollableParent = (element) => {
//     if (!element) return window;

//     let parent = element.parentElement;

//     while (parent) {
//       const overflowY = window.getComputedStyle(parent).overflowY;
//       const overflowX = window.getComputedStyle(parent).overflowX;

//       // Check if this parent is scrollable
//       if (
//         (overflowY === "auto" ||
//           overflowY === "scroll" ||
//           overflowX === "auto" ||
//           overflowX === "scroll") &&
//         parent.scrollHeight > parent.clientHeight
//       ) {
//         // console.log("Found scrollable parent:", parent);
//         return parent;
//       }

//       parent = parent.parentElement;
//     }

//     return window;
//   };

//   const registerSection = (brandId, element) => {
//     if (element) {
//     //   console.log("📝 Registering section:", brandId);
//       sectionRefs.current[brandId] = element;
//     }
//   };

//   return (
//     <ScrollContext.Provider
//       value={{
//         scrollToSection,
//         registerSection,
//         activeSection,
//         sectionRefs,
//       }}
//     >
//       {children}
//     </ScrollContext.Provider>
//   );
// };


  // const scrollToSection = (brandId) => {
  //   console.log("🎯 Attempting to scroll to brand:", brandId);

  //   const target = document.getElementById(`brand-${brandId}`);

  //   if (!target) {
  //     console.warn("❌ Target element not found:", brandId);
  //     return;
  //   }

  //   // ✅ Detect which container is active
  //   const isMobile = window.innerWidth < 1024;

  //   const mobileContainer = document.getElementById(
  //     "main-scroll-container-mobile"
  //   );
  //   const desktopContainer = document.getElementById(
  //     "main-scroll-container-desktop"
  //   );

  //   const activeContainer = isMobile ? mobileContainer : desktopContainer;

  //   console.log("📱 Is Mobile:", isMobile);
  //   console.log("📦 Active Container:", activeContainer);

  //   if (activeContainer) {
  //     // ✅ Scroll within container
  //     const containerRect = activeContainer.getBoundingClientRect();
  //     const targetRect = target.getBoundingClientRect();

  //     const scrollTop = activeContainer.scrollTop;
  //     const offset = targetRect.top - containerRect.top + scrollTop - 120; // Adjust offset

  //     console.log("✅ Scrolling to offset:", offset);

  //     activeContainer.scrollTo({
  //       top: offset,
  //       behavior: "smooth",
  //     });

  //     setActiveSection(brandId);

  //     // ✅ Visual feedback
  //     setTimeout(() => {
  //       target.style.transform = "scale(1.02)";
  //       target.style.transition = "all 0.3s ease";
  //       target.style.border = "2px solid #ef4444";

  //       setTimeout(() => {
  //         target.style.transform = "scale(1)";
  //         setTimeout(() => {
  //           target.style.border = "none";
  //         }, 300);
  //       }, 300);
  //     }, 300);
  //   } else {
  //     // ✅ Fallback: scroll window
  //     console.warn("⚠️ Container not found, using window scroll");
  //     target.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };
  // const registerSection = (brandId, element) => {
  //   if (element) {
  //     console.log("📝 Registering section:", brandId, element);
  //     sectionRefs.current[brandId] = element;
  //   }
  // };

// import React, { createContext, useContext, useRef, useState } from "react";

// const ScrollContext = createContext();

// export const useScroll = () => {
//   const context = useContext(ScrollContext);
//   if (!context) {
//     throw new Error("useScroll must be used within ScrollProvider");
//   }
//   return context;
// };

// export const ScrollProvider = ({ children }) => {
//   const sectionRefs = useRef({});
//   const [activeSection, setActiveSection] = useState(null);


//   // const scrollToSection = (brandId) => {
//   //   console.log("🎯 Attempting to scroll to brand:", brandId);

//   //   const target = document.getElementById(`brand-${brandId}`);

//   //   if (!target) {
//   //     console.warn("❌ Target element not found:", brandId);
//   //     return;
//   //   }

//   //   // ✅ Detect device
//   //   const isMobile = window.innerWidth < 1024;

//   //   const mobileContainer = document.getElementById(
//   //     "main-scroll-container-mobile"
//   //   );
//   //   const desktopContainer = document.getElementById(
//   //     "main-scroll-container-desktop"
//   //   );

//   //   const activeContainer = isMobile ? mobileContainer : desktopContainer;

//   //   console.log("📱 Is Mobile:", isMobile);
//   //   console.log("📦 Active Container:", activeContainer);

//   //   if (activeContainer) {
//   //     // ✅ CORRECT offset calculation
//   //     const containerRect = activeContainer.getBoundingClientRect();
//   //     const targetRect = target.getBoundingClientRect();

//   //     const currentScrollTop = activeContainer.scrollTop;

//   //     // Calculate absolute position of target within container
//   //     const targetOffsetInContainer = targetRect.top - containerRect.top;

//   //     // Final scroll position with proper offset
//   //     const finalScrollPosition =
//   //       currentScrollTop + targetOffsetInContainer - 100;

//   //     console.log("📊 Scroll Calculation:", {
//   //       currentScrollTop,
//   //       targetOffsetInContainer,
//   //       finalScrollPosition,
//   //       containerTop: containerRect.top,
//   //       targetTop: targetRect.top,
//   //     });

//   //     // ✅ Only scroll if position is valid
//   //     if (finalScrollPosition >= 0) {
//   //       activeContainer.scrollTo({
//   //         top: finalScrollPosition,
//   //         behavior: "smooth",
//   //       });

//   //       setActiveSection(brandId);

//   //       // Visual feedback
//   //       setTimeout(() => {
//   //         target.style.transform = "scale(1.02)";
//   //         target.style.transition = "all 0.3s ease";
//   //         target.style.border = "2px solid #ef4444";

//   //         setTimeout(() => {
//   //           target.style.transform = "scale(1)";
//   //           setTimeout(() => {
//   //             target.style.border = "none";
//   //           }, 300);
//   //         }, 300);
//   //       }, 300);
//   //     } else {
//   //       console.warn("⚠️ Invalid scroll position:", finalScrollPosition);
//   //       // Fallback: scroll to top of element
//   //       activeContainer.scrollTo({
//   //         top: 0,
//   //         behavior: "smooth",
//   //       });
//   //     }
//   //   } else {
//   //     console.warn("⚠️ Container not found, using window scroll");
//   //     target.scrollIntoView({
//   //       behavior: "smooth",
//   //       block: "start",
//   //     });
//   //   }
//   // };


//   const scrollToSection = (brandId) => {
//     console.log("🎯 Attempting to scroll to brand:", brandId);

//     const isMobile = window.innerWidth < 1024;
//     const target = document.getElementById(`brand-${brandId}`);

//     if (!target) {
//       console.warn("❌ Target element not found:", brandId);
//       return;
//     }

//     // ✅ Check if element is actually visible
//     const isVisible = target.offsetParent !== null;
//     console.log("👁️ Element visible:", isVisible);

//     if (!isVisible) {
//       console.warn("⚠️ Target element is hidden!");
//       return;
//     }

//     const mobileContainer = document.getElementById(
//       "main-scroll-container-mobile"
//     );
//     const desktopContainer = document.getElementById(
//       "main-scroll-container-desktop"
//     );
//     const activeContainer = isMobile ? mobileContainer : desktopContainer;

//     console.log("📱 Is Mobile:", isMobile);
//     console.log("📦 Active Container:", activeContainer);

//     if (activeContainer) {
//       // ✅ Get header height dynamically
//       const header = isMobile
//         ? document.querySelector(".lg2\\:hidden.sticky") // Mobile header
//         : document.querySelector(".lg2\\:block.sticky"); // Desktop header

//       const headerHeight = header ? header.offsetHeight : 0;
//       console.log("📏 Header Height:", headerHeight);

//       const containerRect = activeContainer.getBoundingClientRect();
//       const targetRect = target.getBoundingClientRect();
//       const currentScrollTop = activeContainer.scrollTop;

//       // ✅ Calculate target's position WITHIN the scrollable container
//       const targetTopRelativeToDocument = target.offsetTop;
//       const containerTopRelativeToDocument = activeContainer.offsetTop;
//       const targetOffsetInContainer =
//         targetTopRelativeToDocument - containerTopRelativeToDocument;

//       // ✅ Final position with header offset
//       const finalScrollPosition = targetOffsetInContainer - headerHeight - 20; // 20px extra padding

//       console.log("📊 Scroll Calculation:", {
//         currentScrollTop,
//         targetTopRelativeToDocument,
//         containerTopRelativeToDocument,
//         targetOffsetInContainer,
//         headerHeight,
//         finalScrollPosition,
//         containerTop: containerRect.top,
//         targetTop: targetRect.top,
//       });

//       // ✅ Scroll even if position is negative (for elements at top)
//       activeContainer.scrollTo({
//         top: Math.max(0, finalScrollPosition), // Prevent negative scroll
//         behavior: "smooth",
//       });

//       setActiveSection(brandId);

//       // Visual feedback
//       setTimeout(() => {
//         target.style.transform = "scale(1.02)";
//         target.style.transition = "all 0.3s ease";
//         target.style.border = "2px solid #ef4444";

//         setTimeout(() => {
//           target.style.transform = "scale(1)";
//           setTimeout(() => {
//             target.style.border = "none";
//           }, 300);
//         }, 300);
//       }, 300);
//     } else {
//       console.warn("⚠️ Container not found, using window scroll");
//       target.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   const registerSection = (brandId, element) => {
//     if (element && brandId) {
//       // console.log("📝 Registering section:", brandId);
//       sectionRefs.current[brandId] = element;
//     }
//   };



//   return (
//     <ScrollContext.Provider
//       value={{
//         scrollToSection,
//         registerSection,
//         activeSection,
//         sectionRefs,
//       }}
//     >
//       {children}
//     </ScrollContext.Provider>
//   );
// };

// import React, { createContext, useContext, useRef, useState } from "react";

// const ScrollContext = createContext();

// export const useScroll = () => {
//   const context = useContext(ScrollContext);
//   if (!context) {
//     throw new Error("useScroll must be used within ScrollProvider");
//   }
//   return context;
// };

// export const ScrollProvider = ({ children }) => {
//   const sectionRefs = useRef({});
//   const [activeSection, setActiveSection] = useState(null);

//   const scrollToSection = (brandId) => {
//     console.log("🎯 Attempting to scroll to brand:", brandId);

//     const isMobile = window.innerWidth < 1024;
//     const target = document.getElementById(`brand-${brandId}`);

//     if (!target) {
//       console.warn("❌ Target element not found:", brandId);
//       return;
//     }

//     // ✅ Check if element is visible AND has proper dimensions
//     const isVisible = target.offsetParent !== null && target.offsetHeight > 0;
//     const rect = target.getBoundingClientRect();
//     console.log("👁️ Element visible:", isVisible);
//     console.log("📐 Element dimensions:", {
//       height: target.offsetHeight,
//       top: rect.top,
//       bottom: rect.bottom,
//     });

//     if (!isVisible) {
//       console.warn("⚠️ Target element is hidden or has no height!");
//       // ✅ Try to wait for element to render
//       setTimeout(() => scrollToSection(brandId), 300);
//       return;
//     }

//     const mobileContainer = document.getElementById(
//       "main-scroll-container-mobile"
//     );
//     const desktopContainer = document.getElementById(
//       "main-scroll-container-desktop"
//     );
//     const activeContainer = isMobile ? mobileContainer : desktopContainer;

//     console.log("📱 Is Mobile:", isMobile);
//     console.log("📦 Active Container:", activeContainer);

//     if (!activeContainer) {
//       console.warn("⚠️ Scroll container not found!");
//       // ✅ Fallback to window scroll
//       const offset = 100; // Header height
//       const targetPosition =
//         target.getBoundingClientRect().top + window.pageYOffset - offset;

//       window.scrollTo({
//         top: targetPosition,
//         behavior: "smooth",
//       });

//       setActiveSection(brandId);
//       addVisualFeedback(target);
//       return;
//     }

//     // ✅ Get header height dynamically
//     const header = isMobile
//       ? document.querySelector(".sticky") // Mobile header
//       : document.querySelector(".lg2\\:block.sticky"); // Desktop header

//     const headerHeight = header ? header.offsetHeight : 100;
//     console.log("📏 Header Height:", headerHeight);

//     // ✅ Calculate scroll position relative to container
//     const containerRect = activeContainer.getBoundingClientRect();
//     const targetRect = target.getBoundingClientRect();

//     // ✅ Get element's actual offset from container top
//     let elementOffsetFromContainerTop = 0;
//     let element = target;

//     while (element && element !== activeContainer) {
//       elementOffsetFromContainerTop += element.offsetTop;
//       element = element.offsetParent;
//     }

//     const currentScrollTop = activeContainer.scrollTop;
//     const finalScrollPosition =
//       elementOffsetFromContainerTop - headerHeight - 20;

//     console.log("📊 Scroll Calculation:", {
//       currentScrollTop,
//       elementOffsetFromContainerTop,
//       headerHeight,
//       finalScrollPosition,
//       containerHeight: activeContainer.scrollHeight,
//       targetTop: targetRect.top,
//     });

//     // ✅ Scroll to calculated position
//     activeContainer.scrollTo({
//       top: Math.max(0, finalScrollPosition),
//       behavior: "smooth",
//     });

//     setActiveSection(brandId);

//     // ✅ Add visual feedback after scroll completes
//     setTimeout(() => {
//       addVisualFeedback(target);
//     }, 500);
//   };

//   // ✅ Separate function for visual feedback
//   const addVisualFeedback = (target) => {
//     target.style.transform = "scale(1.02)";
//     target.style.transition = "all 0.3s ease";
//     target.style.border = "2px solid #ef4444";
//     target.style.boxShadow = "0 0 15px rgba(239, 68, 68, 0.5)";

//     setTimeout(() => {
//       target.style.transform = "scale(1)";
//       setTimeout(() => {
//         target.style.border = "none";
//         target.style.boxShadow = "none";
//       }, 300);
//     }, 300);
//   };

//   const registerSection = (brandId, element) => {
//     if (element && brandId) {
//       console.log("📝 Registering section:", brandId);
//       sectionRefs.current[brandId] = element;

//       // ✅ Verify element is in DOM
//       const isInDOM = document.contains(element);
//       console.log(`✅ Section ${brandId} in DOM:`, isInDOM);
//     }
//   };

//   return (
//     <ScrollContext.Provider
//       value={{
//         scrollToSection,
//         registerSection,
//         activeSection,
//         sectionRefs,
//       }}
//     >
//       {children}
//     </ScrollContext.Provider>
//   );
// };



  // const scrollToSection = (brandId) => {
  //   console.log("🎯 Attempting to scroll to brand:", brandId);

  //   const isMobile = window.innerWidth < 1024;
  //   const target = document.getElementById(`brand-${brandId}`);

  //   if (!target) {
  //     console.warn("❌ Target element not found:", brandId);
  //     return;
  //   }
    

  //   // ✅ Better visibility check - check if element has dimensions
  //   const rect = target.getBoundingClientRect();
  //   const hasSize = rect.height > 0 && rect.width > 0;

  //   console.log("📐 Element dimensions:", {
  //     height: rect.height,
  //     width: rect.width,
  //     top: rect.top,
  //     bottom: rect.bottom,
  //     hasSize,
  //   });

  //   if (!hasSize) {
  //     console.warn("⚠️ Target element has no size, retrying...");
  //     // Retry after a short delay
  //     setTimeout(() => scrollToSection(brandId), 200);
  //     return;
  //   }

  //   const mobileContainer = document.getElementById(
  //     "main-scroll-container-mobile"
  //   );
  //   const desktopContainer = document.getElementById(
  //     "main-scroll-container-desktop"
  //   );
  //   const activeContainer = isMobile ? mobileContainer : desktopContainer;

  //   console.log("📱 Is Mobile:", isMobile);
  //   console.log("📦 Active Container:", activeContainer);

    

  //   if (!activeContainer) {
  //     console.warn("⚠️ Scroll container not found!");
  //     // ✅ Fallback to window scroll
  //     const offset = 100; // Header height
  //     const targetPosition =
  //       target.getBoundingClientRect().top + window.pageYOffset - offset;

  //     window.scrollTo({
  //       top: targetPosition,
  //       behavior: "smooth",
  //     });

  //     setActiveSection(brandId);
  //     addVisualFeedback(target);
  //     return;
  //   }

  //   // ✅ Get header height dynamically
  //   const header = isMobile
  //     ? document.querySelector(".sticky") // Mobile header
  //     : document.querySelector(".lg2\\:block.sticky"); // Desktop header

  //   const headerHeight = header ? header.offsetHeight : 100;
  //   console.log("📏 Header Height:", headerHeight);

  //   // ✅ Calculate scroll position relative to container
  //   const containerRect = activeContainer.getBoundingClientRect();
  //   const targetRect = target.getBoundingClientRect();

  //   // ✅ Get element's actual offset from container top
  //   let elementOffsetFromContainerTop = 0;
  //   let element = target;

  //   while (element && element !== activeContainer) {
  //     elementOffsetFromContainerTop += element.offsetTop;
  //     element = element.offsetParent;
  //   }

  //   const currentScrollTop = activeContainer.scrollTop;
  //   const finalScrollPosition =
  //     elementOffsetFromContainerTop - headerHeight - 20;

  //   console.log("📊 Scroll Calculation:", {
  //     currentScrollTop,
  //     elementOffsetFromContainerTop,
  //     headerHeight,
  //     finalScrollPosition,
  //     containerHeight: activeContainer.scrollHeight,
  //     targetTop: targetRect.top,
  //   });

  //   // ✅ Scroll to calculated position
  //   activeContainer.scrollTo({
  //     top: Math.max(0, finalScrollPosition),
  //     behavior: "smooth",
  //   });

  //   setActiveSection(brandId);

  //   // ✅ Add visual feedback after scroll completes
  //   setTimeout(() => {
  //     addVisualFeedback(target);
  //   }, 500);
  // };

  // ✅ Separate function for visual feedback
  
  
// const scrollToSection = (brandId) => {
//   console.log(`🔍 Searching for element: brand-${brandId}`);

//   let attempts = 0;
//   const maxAttempts = 10;

//   const tryScroll = () => {
//     const isMobile = window.innerWidth < 1024;
//     const target = document.getElementById(`brand-${brandId}`);

//     if (!target) {
//       console.warn(`❌ Target element brand-${brandId} not found`);
//       return;
//     }

//     const rect = target.getBoundingClientRect();
//     const hasSize = rect.height > 0 && rect.width > 0;

//     if (!hasSize || rect.top === 0) {
//       console.warn(`⚠️ brand-${brandId} not visible yet, retrying...`);
//       attempts++;
//       if (attempts < maxAttempts) {
//         setTimeout(tryScroll, 300);
//       } else {
//         console.error(`❌ Failed to scroll to brand-${brandId} after retries`);
//       }
//       return;
//     }

//     // ✅ Scroll logic
//   if (isMobile) {
//     target.scrollIntoView({ behavior: "smooth", block: "start" });

//     // Fallback: scroll parent manually
//     const mobileContainer = document.getElementById(
//       "main-scroll-container-mobile"
//     );
//     if (mobileContainer) {
//       const offset = target.offsetTop - 80; // adjust for header
//       mobileContainer.scrollTo({ top: offset, behavior: "smooth" });
//     }
//   } else {
//     const container = document.getElementById("main-scroll-container-desktop");
//     const header = document.querySelector(".lg2\\:block.sticky");
//     const headerHeight = header ? header.offsetHeight : 100;

//     let offsetTop = 0;
//     let el = target;
//     while (el && el !== container) {
//       offsetTop += el.offsetTop;
//       el = el.offsetParent;
//     }

//     container.scrollTo({
//       top: Math.max(0, offsetTop - headerHeight - 20),
//       behavior: "smooth",
//     });
//   }

//     setActiveSection(brandId);
//     addVisualFeedback(target);
//   };

//   tryScroll();
// };


  // const registerSection = (brandId, element) => {
  //   if (element && brandId) {
  //     console.log("📝 Registering section:", brandId);
  //     sectionRefs.current[brandId] = element;

  //     // ✅ Verify element is in DOM
  //     const isInDOM = document.contains(element);
  //     console.log(`✅ Section ${brandId} in DOM:`, isInDOM);
  //   }
  // };



  // const registerSection = (brandId, element) => {
  //   if (element && brandId) {
  //     sectionRefs.current[brandId] = element;

  //     // Optional: log only if debugging specific brand
  //     if (activeSection === brandId) {
  //       console.log(`📝 Registering section: ${brandId}`);
  //       const isInDOM = document.contains(element);
  //       console.log(`✅ Section ${brandId} in DOM:`, isInDOM);
  //     }
  //   }
  // };


// import React, { createContext, useContext, useRef, useState } from "react";

// const ScrollContext = createContext();

// export const useScroll = () => {
//   const context = useContext(ScrollContext);
//   if (!context) {
//     throw new Error("useScroll must be used within ScrollProvider");
//   }
//   return context;
// };

// export const ScrollProvider = ({ children }) => {
//   const sectionRefs = useRef({});
//   const [activeSection, setActiveSection] = useState(null);

// const scrollToSection = (brandId) => {
//   console.log(`🔍 Searching for element: brand-${brandId}`);

//   const isMobile = window.innerWidth <= 500;
//   const isDesktop = window.innerWidth >= 1024;
//   const targetId = `brand-${brandId}`;
//   const maxAttempts = 10;
//   let attempts = 0;

//   const tryScroll = () => {
//     const target = document.getElementById(targetId);
//     if (!target) {
//       console.warn(`❌ Element ${targetId} not found`);
//       return;
//     }

//   const rect = target.getBoundingClientRect();
//   const isVisible = rect.height > 0 && rect.width > 0;
//     if (!isVisible) {
//   console.warn(`⚠️ brand-${brandId} not visible`);
//   console.log(`📐 brand-${brandId} rect values:`, {
//     top: rect.top,
//     left: rect.left,
//     bottom: rect.bottom,
//     right: rect.right,
//     width: rect.width,
//     height: rect.height,
//   });
// }
//   console.log(`👁️ brand-${brandId} visible: ${isVisible}`);


//     if (!isVisible) {
//       attempts++;
//       if (attempts < maxAttempts) {
//         setTimeout(tryScroll, 300);
//       } else {
//         console.error(`❌ Failed to scroll to ${targetId} after retries`);
//       }
//       return;
//     }

//     if (isMobile) {
//       // ✅ Bypass container logic — scroll directly
//       target.scrollIntoView({ behavior: "smooth", block: "start" });
//     } else if (isDesktop) {
//       const container = document.getElementById(
//         "main-scroll-container-desktop"
//       );
//       const header = document.querySelector(".lg2\\:block.sticky");
//       const headerHeight = header ? header.offsetHeight : 100;

//       let offsetTop = 0;
//       let el = target;
//       while (el && el !== container) {
//         offsetTop += el.offsetTop;
//         el = el.offsetParent;
//       }

//       container?.scrollTo({
//         top: Math.max(0, offsetTop - headerHeight - 20),
//         behavior: "smooth",
//       });
//     } else {
//       // Tablet or unknown width — fallback
//       target.scrollIntoView({ behavior: "smooth", block: "start" });
//     }

//     setActiveSection(brandId);
//     addVisualFeedback(target);
//   };

//   tryScroll();
// };

// const scrollToBrand = (brandId) => {
//   const isMobile = window.innerWidth <= 768;
//   const containerId = isMobile
//     ? "main-scroll-container-mobile"
//     : "main-scroll-container-desktop";

//   const scrollContainer = document.getElementById(containerId);
//   const element = document.getElementById(`brand-${brandId}`);

//   console.log("Scroll attempt:", {
//     brandId,
//     isMobile,
//     containerId,
//     scrollContainer: !!scrollContainer,
//     element: !!element,
//     elementVisible: element ? element.offsetHeight > 0 : false,
//   });

//   if (!element || !scrollContainer) {
//     console.error("Missing element or container");
//     return;
//   }

//   // Get element position relative to container
//   const containerRect = scrollContainer.getBoundingClientRect();
//   const elementRect = element.getBoundingClientRect();

//   // Calculate scroll position
//   const scrollTop = scrollContainer.scrollTop;
//   const elementTop = elementRect.top - containerRect.top + scrollTop;

//   // Scroll with offset for header
//   const offset = isMobile ? 80 : 120;

//   scrollContainer.scrollTo({
//     top: elementTop - offset,
//     behavior: "smooth",
//   });
// };

// const registerSection = (brandId, element) => {
//   const screenWidth = window.innerWidth;
//   const isMobile = screenWidth <= 500;
//   const isDesktop = screenWidth >= 1024;

//   if (!element || !brandId) return;

//   // ✅ Register only for relevant screen
//   if (
//     (isMobile && element.dataset.device === "mobile") ||
//     (isDesktop && element.dataset.device === "desktop")
//   ) {
//     sectionRefs.current[brandId] = element;
//     // console.log(
//     //   `📝 Registering section: ${brandId} for ${
//     //     isMobile ? "mobile" : "desktop"
//     //   }`
//     // );
//   }
// };



//   const addVisualFeedback = (target) => {
//     target.style.transform = "scale(1.02)";
//     target.style.transition = "all 0.3s ease";
//     target.style.border = "2px solid #ef4444";
//     target.style.boxShadow = "0 0 15px rgba(239, 68, 68, 0.5)";

//     setTimeout(() => {
//       target.style.transform = "scale(1)";
//       setTimeout(() => {
//         target.style.border = "none";
//         target.style.boxShadow = "none";
//       }, 300);
//     }, 300);
//   };



//   return (
//     <ScrollContext.Provider
//       value={{
//         scrollToSection,
//         registerSection,
//         activeSection,
//         sectionRefs,
//       }}
//     >
//       {children}
//     </ScrollContext.Provider>
//   );
// };


// import React, { createContext, useContext, useRef, useState } from "react";

// const ScrollContext = createContext();

// export const useScroll = () => {
//   const context = useContext(ScrollContext);
//   if (!context) {
//     throw new Error("useScroll must be used within ScrollProvider");
//   }
//   return context;
// };

// export const ScrollProvider = ({ children }) => {
//   const sectionRefs = useRef({});
//   const [activeSection, setActiveSection] = useState(null);

//   // ✅ SINGLE, UNIFIED SCROLL FUNCTION
//   const scrollToSection = (brandId) => {
//     console.log(`🔍 Attempting to scroll to: brand-${brandId}`);

//     const targetId = `brand-${brandId}`;
//     const isMobile = window.innerWidth <= 768;

//     // Wait for DOM to be ready
//     setTimeout(() => {
//       const target = document.getElementById(targetId);

//       if (!target) {
//         console.error(`❌ Element ${targetId} not found in DOM`);
//         return;
//       }

//       console.log(`✅ Found element: ${targetId}`);

//       // Check if element is actually visible
//       const rect = target.getBoundingClientRect();
//       const computedStyle = window.getComputedStyle(target);

//       console.log(`📊 Element metrics:`, {
//         width: rect.width,
//         height: rect.height,
//         top: rect.top,
//         display: computedStyle.display,
//         visibility: computedStyle.visibility,
//         opacity: computedStyle.opacity,
//         offsetHeight: target.offsetHeight,
//         scrollHeight: target.scrollHeight,
//       });

//       // Force element to be visible if it's collapsed
//       if (target.offsetHeight === 0) {
//         console.warn(`⚠️ Element has 0 height, forcing display`);
//         target.style.display = "block";
//         target.style.visibility = "visible";
//         target.style.minHeight = "200px";
//       }

//       // Get scroll container
//       const containerId = isMobile
//         ? "main-scroll-container-mobile"
//         : "main-scroll-container-desktop";

//       const scrollContainer = document.getElementById(containerId);

//       if (!scrollContainer) {
//         console.error(`❌ Scroll container ${containerId} not found`);
//         // Fallback to window scroll
//         target.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//           inline: "nearest",
//         });
//         return;
//       }

//       console.log(`📦 Scroll container:`, {
//         id: containerId,
//         scrollTop: scrollContainer.scrollTop,
//         scrollHeight: scrollContainer.scrollHeight,
//         clientHeight: scrollContainer.clientHeight,
//       });

//       // Calculate position relative to scroll container
//       const containerRect = scrollContainer.getBoundingClientRect();
//       const targetRect = target.getBoundingClientRect();

//       // Current scroll position + element position relative to viewport - container position
//       const targetScrollTop =
//         scrollContainer.scrollTop + (targetRect.top - containerRect.top);

//       // Account for header offset
//       const headerOffset = isMobile ? 80 : 120;
//       const finalScrollTop = Math.max(0, targetScrollTop - headerOffset);

//       console.log(`📍 Scroll calculation:`, {
//         containerTop: containerRect.top,
//         targetTop: targetRect.top,
//         currentScroll: scrollContainer.scrollTop,
//         targetScrollTop,
//         headerOffset,
//         finalScrollTop,
//       });

//       // Perform scroll
//       scrollContainer.scrollTo({
//         top: finalScrollTop,
//         behavior: "smooth",
//       });

//       // Visual feedback
//       setTimeout(() => {
//         addVisualFeedback(target);
//         setActiveSection(brandId);
//       }, 100);
//     }, 100); // Small delay to ensure DOM is ready
//   };

//   const registerSection = (brandId, element) => {
//     if (!element || !brandId) {
//       console.warn(
//         `⚠️ Cannot register: brandId=${brandId}, element=${!!element}`
//       );
//       return;
//     }

//     const screenWidth = window.innerWidth;
//     const isMobile = screenWidth <= 768;
//     const deviceType = element.dataset?.device;

//     // Register for correct device
//     if (
//       (isMobile && deviceType === "mobile") ||
//       (!isMobile && deviceType === "desktop")
//     ) {
//       sectionRefs.current[brandId] = element;
//       console.log(`✅ Registered section: ${brandId} (${deviceType})`);
//     } else {
//       console.log(
//         `⏭️ Skipped registration: ${brandId} (wrong device: ${deviceType})`
//       );
//     }
//   };

//   const addVisualFeedback = (target) => {
//     if (!target) return;

//     target.style.transition = "all 0.3s ease";
//     target.style.border = "2px solid #ef4444";
//     target.style.boxShadow = "0 0 15px rgba(239, 68, 68, 0.5)";

//     setTimeout(() => {
//       target.style.border = "none";
//       target.style.boxShadow = "none";
//     }, 600);
//   };

//   return (
//     <ScrollContext.Provider
//       value={{
//         scrollToSection,
//         registerSection,
//         activeSection,
//         sectionRefs,
//       }}
//     >
//       {children}
//     </ScrollContext.Provider>
//   );
// };

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

  // ✅ SINGLE, UNIFIED SCROLL FUNCTION
  const scrollToSection = (brandId) => {
    console.log(`🔍 Attempting to scroll to: brand-${brandId}`);
    
    const targetId = `brand-${brandId}`;
    const isMobile = window.innerWidth <= 768;
    
    // Wait for DOM to be ready
    setTimeout(() => {
      const target = document.getElementById(targetId);
      
      if (!target) {
        console.error(`❌ Element ${targetId} not found in DOM`);
        return;
      }

      console.log(`✅ Found element: ${targetId}`);
      
      // Check if element is actually visible
      const rect = target.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(target);
      
      console.log(`📊 Element metrics:`, {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        display: computedStyle.display,
        visibility: computedStyle.visibility,
        opacity: computedStyle.opacity,
        offsetHeight: target.offsetHeight,
        scrollHeight: target.scrollHeight
      });

      // Force element to be visible if it's collapsed
      if (target.offsetHeight === 0) {
        console.warn(`⚠️ Element has 0 height, forcing display`);
        target.style.display = 'block !important';
        target.style.visibility = 'visible !important';
        target.style.minHeight = '200px !important';
        target.style.opacity = '1';
        
        // Also check parent containers
        let parent = target.parentElement;
        let depth = 0;
        while (parent && depth < 5) {
          const parentStyle = window.getComputedStyle(parent);
          if (parentStyle.display === 'none' || parentStyle.height === '0px') {
            console.warn(`⚠️ Parent has display:none or height:0`, parent);
            parent.style.display = 'block';
            parent.style.minHeight = 'auto';
          }
          parent = parent.parentElement;
          depth++;
        }
        
        // Wait for reflow
        target.offsetHeight; // Force reflow
        
        // Retry after forcing display
        setTimeout(() => scrollToSection(brandId), 200);
        return;
      }

      // Get scroll container
      const containerId = isMobile 
        ? "main-scroll-container-mobile" 
        : "main-scroll-container-desktop";
      
      const scrollContainer = document.getElementById(containerId);
      
      if (!scrollContainer) {
        console.error(`❌ Scroll container ${containerId} not found`);
        // Fallback to window scroll
        target.scrollIntoView({ 
          behavior: "smooth", 
          block: "start",
          inline: "nearest" 
        });
        return;
      }

      console.log(`📦 Scroll container:`, {
        id: containerId,
        scrollTop: scrollContainer.scrollTop,
        scrollHeight: scrollContainer.scrollHeight,
        clientHeight: scrollContainer.clientHeight
      });

      // Calculate position relative to scroll container
      const containerRect = scrollContainer.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      
      // Current scroll position + element position relative to viewport - container position
      const targetScrollTop = 
        scrollContainer.scrollTop + 
        (targetRect.top - containerRect.top);
      
      // Account for header offset
      const headerOffset = isMobile ? 80 : 120;
      
      // ✅ FIX: Handle negative scroll positions (element above viewport)
      let finalScrollTop;
      if (targetScrollTop < 0) {
        // Element is above current view, scroll up
        finalScrollTop = Math.max(0, scrollContainer.scrollTop + targetScrollTop - headerOffset);
      } else {
        // Element is below, scroll down
        finalScrollTop = Math.max(0, targetScrollTop - headerOffset);
      }
      
      console.log(`📍 Scroll calculation:`, {
        containerTop: containerRect.top,
        targetTop: targetRect.top,
        currentScroll: scrollContainer.scrollTop,
        targetScrollTop,
        headerOffset,
        finalScrollTop
      });

      // Perform scroll
      scrollContainer.scrollTo({
        top: finalScrollTop,
        behavior: "smooth"
      });

      // Visual feedback
      setTimeout(() => {
        addVisualFeedback(target);
        setActiveSection(brandId);
      }, 100);
      
    }, 100); // Small delay to ensure DOM is ready
  };

  const registerSection = (brandId, element) => {
    if (!element || !brandId) {
      console.warn(`⚠️ Cannot register: brandId=${brandId}, element=${!!element}`);
      return;
    }

    const screenWidth = window.innerWidth;
    const isMobile = screenWidth <= 768;
    const deviceType = element.dataset?.device;

    // Register for correct device
    if (
      (isMobile && deviceType === "mobile") ||
      (!isMobile && deviceType === "desktop")
    ) {
      sectionRefs.current[brandId] = element;
      console.log(`✅ Registered section: ${brandId} (${deviceType})`);
    } else {
      console.log(`⏭️ Skipped registration: ${brandId} (wrong device: ${deviceType})`);
    }
  };

  const addVisualFeedback = (target) => {
    if (!target) return;
    
    target.style.transition = "all 0.3s ease";
    target.style.border = "2px solid #ef4444";
    target.style.boxShadow = "0 0 15px rgba(239, 68, 68, 0.5)";

    setTimeout(() => {
      target.style.border = "none";
      target.style.boxShadow = "none";
    }, 600);
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