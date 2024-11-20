import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => (
  <button
    className={`px-6 py-1.5 bg-white text-text-200 w-px-100 rounded ${className}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
