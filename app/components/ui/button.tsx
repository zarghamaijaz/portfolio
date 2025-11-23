import React from "react";
import Link from "next/link";

const Button = ({ children, variant, large, className, disabled, tooltip, onClick, link }:
  { children: React.ReactNode, variant?: string, large?: boolean, className?: string, disabled?: boolean, tooltip?: string, onClick?: () => void, link?: string }) => {

  const classByVariant = 
    variant === "primary" ? "bg-dawn-orange" :
    variant === "secondary" ? "bg-dawn-blue text-foreground" :
    variant === "gradient" ? "bg-linear-to-r from-dawn-orange to-dawn-blue" :
    "text-background bg-foreground";

    const effectByVariant =
    variant === "primary" ? "bg-dawn-blue" :
    variant === "secondary" ? "bg-dawn-orange" :
    variant === "gradient" ? "bg-foreground" :
    "bg-linear-to-r from-dawn-orange to-dawn-blue";

  return (
    <div className={`${tooltip && "group"} p-1 w-fit relative button-effect-parent`}>
      <div className={`${effectByVariant} rounded-lg absolute inset-0 blur-[3px] opacity-0 transition-opacity duration-200 button-effect-child`}></div>
      {link ? (
      <Link href={link} className={`${disabled ? "opacity-50 cursor-not-allowed" : ""} ${large ? "px-6 py-3 text-md" : "px-4 py-2 text-sm"} ${className} ${classByVariant} text-background rounded-md relative block`}>
        {children}
      </Link>
      ): (
      <button disabled={disabled} onClick={onClick} className={`${disabled ? "opacity-50 cursor-not-allowed" : ""} ${large ? "px-6 py-3 text-md" : "px-4 py-2 text-sm"} ${className} ${classByVariant} text-background rounded-md relative`}>
        {children}
      </button>

      )}
      {tooltip && (
        <div className="hidden group-hover:flex z-10 absolute w-screen max-w-[300px] min-h-full bottom-full left-0 bg-foreground text-background justify-center items-center rounded-md text-xs p-2">{tooltip}</div>
      )}
    </div>
  );
};

export default Button;
