import React from "react";
import logo from "@/assets/footer-logo.svg";
import image from "@/assets/image.svg";
import image1 from "@/assets/image1.svg";
import face from "@/assets/face.svg";
import ins from "@/assets/ins.svg";
import you from "@/assets/you.svg";
import file from "@/assets/file.svg";
import bas from "@/assets/bas.svg";
import faq from "@/assets/faq.svg";
import movie1 from "@/assets/movie1.svg";
import movie2 from "@/assets/movie2.svg";
import phone from "@/assets/phone.svg";
import shining from "@/assets/shining.svg";
import teatr from "@/assets/teatr.svg";

const Footer = () => {
   return (
      <footer>
         <div className="container mx-auto p-[30px] border grid md:grid-cols-4 grid-cols-2 gap-5 bg-dark rounded-[12px]">
            <div className="flex flex-col gap-2 justify-between">
               <img className="w-[55px]" src={logo} alt="" />
               <div className="flex flex-col gap-2">
                  <img className="w-[155px]" src={image} alt="" />
                  <img className="w-[155px]" src={image1} alt="" />
               </div>
            </div>

            <div>
               <p className="text-[#fff] mb-[18px]">О нас</p>
               <ul className="text-text flex flex-col gap-5">
                  <li className="flex gap-[4px] cursor-pointer">
                     <img src={file} alt="" />
                     Публичная оферта
                  </li>
                  <li className="flex gap-[4px] cursor-pointer">
                     <img src={shining} alt="" />
                     Реклама
                  </li>
                  <li className="flex gap-[4px] cursor-pointer">
                     <img src={faq} alt="" />
                     F.A.Q
                  </li>
                  <li className="flex gap-[4px] cursor-pointer">
                     <img src={phone} alt="" />
                     Контакты
                  </li>
               </ul>
            </div>

            <div>
               <p className="text-[#fff] mb-[18px]">Категории</p>
               <ul className="text-text flex flex-col gap-5">
                  <li className="flex gap-[4px] cursor-pointer">
                     <img src={movie1} alt="" />
                     Кино
                  </li>
                  <li className="flex gap-[4px] cursor-pointer">
                     <img src={teatr} alt="" />
                     Театр
                  </li>
                  <li className="flex gap-[4px] cursor-pointer">
                     <img src={movie2} alt="" />
                     Концерты
                  </li>
                  <li className="flex gap-[4px] cursor-pointer">
                     <img src={bas} alt="" />
                     Спорт
                  </li>
               </ul>
            </div>

            <div className="flex flex-col justify-between gap-[54px]">
               <div>
                  <p className="text-[#fff] mb-[18px]">Связаться с нами</p>
                  <a className="text-primary" href="">
                     +998 (95) 897-33-38
                  </a>
               </div>
               <div>
                  <p className="text-[#fff] mb-[18px]">Социальные сети</p>
                  <div className="flex gap-5">
                     <img src={ins} alt="" />
                     <img src={face} alt="" />
                     <img src={you} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default React.memo(Footer);
