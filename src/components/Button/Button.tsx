import React, { ButtonHTMLAttributes } from "react";
import "./style.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};
