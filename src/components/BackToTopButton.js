import React from "react";
import { useEffect, useState } from "react";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="BackToTopButton">
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "0px",
            height: "50px",
            width: "50px",
            fontSize: "40px",
            color: "#f0f0ec",
            marginBottom: "20px",
            backgroundColor: "#1b1e20",
            zIndex: "1000",
          }}
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
