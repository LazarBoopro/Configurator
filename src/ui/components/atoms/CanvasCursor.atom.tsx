import { AnimatePresence, motion } from "framer-motion";
import { RefObject, useEffect, useState } from "react";

export default function CanvasCursor({
  canvasRef,
}: {
  canvasRef: RefObject<HTMLDivElement>;
}) {
  const [position, setPosition] = useState({ x: 150, y: 150 });
  const [visibile, setVisible] = useState(false);

  const handleMouseMove = (event: MouseEvent) => {
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    if (!canvasRect) return;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const isInside =
      mouseX >= canvasRect.left &&
      mouseX <= canvasRect.right &&
      mouseY >= canvasRect.top &&
      mouseY <= canvasRect.bottom;

    setVisible(isInside);
    setPosition({
      x: mouseX,
      y: mouseY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    visibile && (
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        style={{
          position: "absolute",
          zIndex: 9,
          borderRadius: "100%",
          height: "4rem",
          transform: "translate(-50%, -50%)",
          aspectRatio: "1",
          backgroundColor: "rgb(150,150,150,.5)",
          backdropFilter: "blur(3px)",
          left: `${position.x}px`,
          top: `${position.y}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          pointerEvents: "none",
          outline: "1px solid white",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          color="white"
          stroke-linejoin="round"
          // className="lucide lucide-rotate-3d"
        >
          <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
          <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
          <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
        </svg>
        {/* <img
              src={rotateIcon}
              style={{
                filter: "invert(.5)",
                height: "1.25rem",
                aspectRatio: "1",
              }}
            /> */}
      </motion.div>
    )
  );
}
