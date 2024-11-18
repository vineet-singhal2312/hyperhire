import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => (
  <button
    className={`px-4 py-1 bg-white text-blue-500 rounded ${className}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
