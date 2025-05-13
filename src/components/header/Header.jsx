import React from "react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/header-logo.svg";
import tv from "@/assets/tv.svg";
import tablet from "@/assets/tablet.svg";
import coupon from "@/assets/coupon.svg";
import search from "@/assets/search.svg";

const Header = () => {
   return (
      <header>
         <div className="container mx-auto max-h-20 flex py-[22px] justify-center items-center gap-[167px]">
            <div className="flex-1">
               <NavLink>
                  <img src={logo} alt="" />
               </NavLink>
            </div>
            <ul className="flex gap-[30px] items-center justify-center">
               <NavLink>
                  <li className="text-text flex flex-col justify-center items-center">
                     <img src={tv} alt="" />
                     Афиша
                  </li>
               </NavLink>
               <NavLink>
                  <li className="text-text flex flex-col justify-center items-center">
                     <img src={tablet} alt="" />
                     Сеансы
                  </li>
               </NavLink>
               <NavLink>
                  <li className="text-text flex flex-col justify-center items-center">
                     <img src={coupon} alt="" />
                     Билеты
                  </li>
               </NavLink>
               <NavLink>
                  <li className="text-text flex flex-col justify-center items-center">
                     <img src={search} alt="" />
                     Поиск
                  </li>
               </NavLink>
            </ul>
            <div className="flex gap-5 items-center">
               <div className="py-3.5 px-3 rounded-[12px] bg-[#1D1D1D80] backdrop-blur-[30px] flex">
                  <select className="text-[#fff] outline-none" name="" id="">
                     <option className="text-black" value="">
                        Ру
                     </option>
                     <option className="text-black" value="">
                        Уз
                     </option>
                  </select>
               </div>
               <div>
                  <button className="bg-primary px-[66px] py-[18px] rounded-[12px] text-[#FFF] cursor-pointer">Войти</button>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
