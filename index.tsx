import React, { useState, useEffect } from "react";

interface BeatingHeartIconProps {
  size?: number;
  color?: string;
  filled?: boolean;
  animationSpeed?: number;
}

const BeatingHeartIcon: React.FC<BeatingHeartIconProps> = ({
  size = 50,
  color = "red",
  filled = false,
  animationSpeed = 500
}) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prevScale) => (prevScale === 1 ? 1.1 : 1));
    }, animationSpeed);

    return () => {
      clearInterval(interval);
    };
  }, [animationSpeed]);

  const fill = filled ? color : "none";
  const strokeWidth = filled ? "0" : "2";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: `scale(${scale})`,
        transition: `transform ${animationSpeed / 2}ms ease`
      }}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};

export default BeatingHeartIcon;
