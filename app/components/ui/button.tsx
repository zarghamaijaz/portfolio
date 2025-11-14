import React from "react";

const Button = ({ children, large }: { children: React.ReactNode, large?: boolean }) => {
  return (
    <div className="p-1 w-fit relative button-effect-parent">
      <div className="bg-linear-to-r from-dawn-orange to-dawn-blue rounded-lg absolute inset-0 blur-[3px] opacity-0 transition-opacity duration-200 button-effect-child"></div>
      <button className={`${large ? "px-6 py-3 text-md" : "px-4 py-2 text-sm"} text-background bg-foreground rounded-md relative`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
