import React from "react";

const StyledTitle = ({children}:{
    children: React.ReactNode
}) => {
  return (
    <div className="flex justify-center">
      <div>
        <h2 className="text-4xl text-dawn-orange font-heading mb-3">{children}</h2>
        <div className="w-full h-1 bg-foreground"></div>
        <div className="w-[50%] mx-auto h-1 bg-foreground mt-2"></div>
      </div>
    </div>
  );
};

export default StyledTitle;
