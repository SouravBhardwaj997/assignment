import React from "react";

export const ArrowIcon = ({
  opacity = 1,
  size = "30",
  className = "",
}: {
  opacity?: number;
  size?: string;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      className={className}
      height={size}
      opacity={opacity}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2_49)">
        <path
          d="M11.2346 20.8364L17.5496 12.2622L18.5863 19.0951L20.3175 18.8324L18.8324 9.04494L9.04494 10.53L9.30762 12.2612L16.1405 11.2244L9.82549 19.7986L11.2346 20.8364Z"
          fill="#233A41"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_49">
          <rect
            width="21"
            height="21"
            fill="white"
            transform="translate(29.3624 12.4536) rotate(126.372)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
