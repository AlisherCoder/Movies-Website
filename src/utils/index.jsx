import React from "react";
import logo from "@/assets/logo.svg";

export const Loading = () => {
   return (
      <div className="w-full h-screen grid place-items-center">
         <img className="w-[80px] h-[80px]" src={logo} alt="" />
      </div>
   );
};

export const Suspense = ({ children }) => {
   return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};
