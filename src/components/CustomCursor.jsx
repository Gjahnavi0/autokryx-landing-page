import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleMouseOver = (event) => {
      const target = event.target.closest(
        "a, button, .product-card"
      );

      setHovering(Boolean(target));
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    document.addEventListener(
      "mouseover",
      handleMouseOver
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${
        hovering ? "cursor-hover" : ""
      }`}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <span>
        {hovering ? "↗" : ""}
      </span>
    </div>
  );
}

export default CustomCursor;