import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/header-logo.svg";
import { IoHomeOutline, IoBookmarkOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineMovie } from "react-icons/md";
import "./style.css";

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const menuRef = useRef(null);

   return (
      <header>
         <div className="container mx-auto max-h-20 flex py-[22px] justify-between items-center">
            <div className="flex">
               <NavLink to={"/"} className="w-[100px]">
                  <img src={logo} alt="" />
               </NavLink>
            </div>
            <ul
               ref={menuRef}
               className={`flex gap-[30px] transition-all duration-500 ease-in-out items-center justify-center
                              max-[750px]:fixed max-[750px]:left-1/2 max-[750px]:-translate-x-1/2 max-[750px]:w-full max-[750px]:flex-col max-[750px]:py-5 max-[750px]:bg-black z-10
                              ${isMenuOpen ? "max-[750px]:top-0" : "max-[750px]:-top-100"}
                        `}
            >
               <li>
                  <NavLink onClick={() => setIsMenuOpen((p) => !p)} className="text-text flex flex-col items-center nav_link max-[750px]:flex-row gap-2.5" to={"/"}>
                     <IoHomeOutline className="text-2xl" /> <span>Афиша</span>
                  </NavLink>
               </li>

               <li>
                  <NavLink onClick={() => setIsMenuOpen((p) => !p)} className="text-text flex flex-col items-center nav_link max-[750px]:flex-row gap-2.5" to={"/movies"}>
                     <MdOutlineMovie className="text-2xl" /> Сеансы
                  </NavLink>
               </li>

               <li>
                  <NavLink onClick={() => setIsMenuOpen((p) => !p)} className="text-text flex flex-col items-center nav_link max-[750px]:flex-row gap-2.5" to={"/saved"}>
                     <IoBookmarkOutline className="text-2xl" /> Билеты
                  </NavLink>
               </li>

               <li>
                  <NavLink onClick={() => setIsMenuOpen((p) => !p)} className="text-text flex flex-col items-center nav_link max-[750px]:flex-row gap-2.5" to={"/search"}>
                     <IoSearchOutline className="text-2xl" /> Поиск
                  </NavLink>
               </li>
               <div className="hidden max-[750px]:block">
                  <button className="bg-primary px-[66px] py-[10px] rounded-[12px] text-[#FFF] cursor-pointer">Войти</button>
               </div>
            </ul>
            <div className="flex gap-5 items-center max-[750px]:hidden ">
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
               <div className=" ">
                  <button className="bg-primary px-[66px] py-[18px] rounded-[12px] text-[#FFF] cursor-pointer">Войти</button>
               </div>
            </div>
            <div onClick={() => setIsMenuOpen((p) => !p)} className="hidden max-[750px]:block z-20">
               <div className="w-8 h-1 bg-text rounded-[12px]"></div>
               <div className="w-8 h-1 bg-text rounded-[12px] my-1"></div>
               <div className="w-8 h-1 bg-text rounded-[12px]"></div>
            </div>
         </div>
      </header>
   );
};

export default Header;
