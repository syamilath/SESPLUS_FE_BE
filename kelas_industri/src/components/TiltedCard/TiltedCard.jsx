import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.15,
  rotateAmplitude = 14,
  showMobileWarning = false,
  showTooltip = false,
  overlayContent = null,
  displayOverlayContent = true,
  backgroundColor = "#27548A",
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const shadow = useSpring("0px 0px 0px rgba(0,0,0,0)", springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    shadow.set("0px 20px 40px rgba(0, 0, 0, 0.5)"); 
    opacity.set(1);
  }

  function handleMouseLeave() {
    scale.set(1);
    shadow.set("0px 0px 0px rgba(0,0,0,0)");
    opacity.set(0);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        {/* Card background */}
        <motion.div
          className="absolute top-0 left-0 rounded-[15px] will-change-transform border border-blue-400"
          style={{
            width: imageWidth,
            height: imageHeight,
            backgroundColor,
            transform: "translateZ(10px)",
          
            boxShadow: `0 0 12px 2px #3b82f6`, 
          }}
        />

        {/* Overlay mengambang */}
        {displayOverlayContent && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full z-10 p-6 text-white flex flex-col justify-start items-center pointer-events-none"
            style={{
              transform: "translateZ(30px)",
            }}
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
