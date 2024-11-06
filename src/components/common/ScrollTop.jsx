import { useEffect, useState } from "react";
import BackToTop from "../../assets/images/svg/back-to-top.svg";

// SCROLLTOP COMPONENT: RENDER A BACK-TO-TOP BUTTON
const ScrollTop = () => {
  // STATE TO TRACK SCROLL POSITION
  const [scrollValue, setScrollValue] = useState(0);
  // STATE TO TOGGLE VISIBILITY OF BACK-TO-TOP BUTTON
  const [showScrollTop, setShowScrollTop] = useState(false);

  // USEEFFECT HOOK TO TRACK SCROLL POSITION
  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY); // SET SCROLL POSITION ON SCROLL
    };
    // ADD SCROLL EVENT LISTENER
    window.addEventListener("scroll", handleScroll);
    // CLEANUP FUNCTION TO REMOVE EVENT LISTENER
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // USEEFFECT HOOK TO TOGGLE VISIBILITY OF BACK-TO-TOP BUTTON
  useEffect(() => {
    if (scrollValue > 200) {
      setShowScrollTop(true); // SHOW BUTTON IF SCROLLED MORE THAN 200PX
    } else {
      setShowScrollTop(false); // HIDE BUTTON OTHERWISE
    }
  }, [scrollValue]); // DEPENDS ON SCROLL VALUE

  // HANDLER FUNCTION TO SCROLL TO TOP OF THE PAGE
  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // SMOOTH SCROLLING ANIMATION
    });
  };

  // RENDER BACK-TO-TOP BUTTON
  return (
    <button
      onClick={scrollTopHandler} // SCROLL TO TOP WHEN CLICKED
      className={`fixed bottom-[2%] right-[2%] z-[200] bg-blueberry flex h-10 w-10 items-center shadow-off-white justify-center overflow-hidden rounded-full hover:bg-primary transition-all duration-500 large:right-[calc((100vw-1900px)/2)] border border-white ${
        showScrollTop ? "translate-y-0 scale-100" : "translate-y-[40px] scale-0"
      }`} // BUTTON STYLING AND ANIMATIONS
    >
      <img src={BackToTop} alt="BackToTop" /> {/* ICON FOR BACK-TO-TOP */}
    </button>
  );
};

export default ScrollTop; // EXPORT THE COMPONENT
