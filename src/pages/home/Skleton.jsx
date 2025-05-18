import React from "react";

const Skleton = () => {
   return (
      <div className="container mx-auto">
         <div className="w-full lg:h-[663px] md:h-[437px] sm:h-[342px] h-[330px] mb-2.5 rounded-[12px] bg-gray-500"></div>
         <div className="w-1/2 flex gap-4 justify-center items-center mx-auto">
            <div className="bg-gray-500 rounded-[12px] w-[140px] h-[78px]"></div>
            <div className="bg-gray-500 rounded-[12px] w-[140px] h-[78px]"></div>
            <div className="bg-gray-500 rounded-[12px] w-[140px] h-[78px]"></div>
            <div className="bg-gray-500 rounded-[12px] w-[140px] h-[78px]"></div>
         </div>
         <div>
            <div className="flex justify-between items-center mb-2.5">
               <div className="w-[120px] h-5 bg-gray-500"></div>
               <div className="w-[120px] h-5 bg-gray-500"></div>
            </div>
            <div className="grid grid-cols-5 gap-5 mb-10">
               <div className="bg-gray-500 h-[284px] rounded-[12px]"></div>
               <div className="bg-gray-500 h-[284px] rounded-[12px]"></div>
               <div className="bg-gray-500 h-[284px] rounded-[12px]"></div>
               <div className="bg-gray-500 h-[284px] rounded-[12px]"></div>
               <div className="bg-gray-500 h-[284px] rounded-[12px]"></div>
            </div>
         </div>
      </div>
   );
};

export default Skleton;
