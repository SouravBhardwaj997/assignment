export const GlowEffect = ({
  color = "bg-blue-500",
  size = "w-60 h-60",
  position = "top-1/4 left-1/2 -translate-x-1/2",
  blur = "blur-3xl",
  opacity = "opacity-50",
  className = "",
}: {
  color?: string;
  size?: string;
  position?: string;
  blur?: string;
  opacity?: string;
  className?: string;
}) => {
  return (
    <div
      className={`
        absolute
        ${color}
        ${size}
        ${position}
        ${blur}
        ${opacity}
        rounded-full
        pointer-events-none 
        ${className}
      `}
    ></div>
  );
};
