"use client";
import React from "react";

export interface ButtonProps {
  /** Text shown inside the button */
  label?: string;

  /** Value for controlled use-cases (optional) */
  value?: string | number;

  /** Triggered when the button is clicked */
  onClick?: (value?: string | number) => void;

  /** Additional CSS classes */
  className?: string;

  /** Disable button */
  disabled?: boolean;

  /** Optional left icon */
  leftIcon?: React.ReactNode;

  /** Optional right icon */
  rightIcon?: React.ReactNode;

  /** Loading state */
  loading?: boolean;

  /** Children override label if provided */
  children?: React.ReactNode;
}

export const Button = ({
  label,
  value,
  onClick,
  className = "",
  disabled = false,
  leftIcon,
  rightIcon,
  loading = false,
  children,
}: ButtonProps) => {
  const handleClick = () => {
    if (!disabled && onClick) onClick(value);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || loading}
      className={`inline-flex items-center gap-1 px-4 py-2 rounded-md border bg-white hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none transition cursor-pointer ${className}`}
    >
      {loading ? (
        <span className="animate-spin border-2 border-gray-400 border-t-transparent rounded-full w-4 h-4"></span>
      ) : (
        <>
          {leftIcon && <span className="flex items-center">{leftIcon}</span>}
          {children || label}
          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
