import React from "react";

const Skleton = () => {
   return (
      <div className="container mx-auto mt-5">
         <div className="flex gap-2 overflow-hidden">
            {Array(17)
               .fill("")
               .map((val, i) => (
                  <div key={i} className="rounded-[12px] py-4 px-8 bg-gray-500 w-[50px]"></div>
               ))}
         </div>

         <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-2">
            {Array(20)
               .fill("")
               .map((val, i) => (
                  <div key={i} className="flex flex-col gap-3">
                     <div className="w-[280px] h-[420px] bg-gray-500 rounded-[12px]"></div>
                     <div className="w-1/2 h-[20px] bg-gray-500"></div>
                     <div className="w-1/3 h-[20px] bg-gray-500"></div>
                  </div>
               ))}
         </div>
      </div>
   );
};

export default Skleton;
