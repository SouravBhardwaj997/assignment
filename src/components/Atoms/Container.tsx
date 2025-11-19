import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="2xl:w-10/12 lg:w-10/12 md:w-5/6 w-11/12 xl:w-11/12 mx-auto relative">
      {children}
    </div>
  );
};
