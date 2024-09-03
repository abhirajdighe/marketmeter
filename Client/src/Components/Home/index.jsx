import React, { useState, useEffect } from "react";
import himg1 from "../heroimage/himg1.jpg";
import himg2 from "../heroimage/himg2.png";
import himg3 from "../heroimage/himg3.png";
import "./Home.css"

const Home = () => {
  return (
    <div className="w-full h-full bg-green-50">
      <div className="m-6 mt-4 flex overflow-auto hero bg-green-50">
        <img src={himg1} className="p-6 w-[65vw] ml-[17%] rounded-lg " alt="" />
        <img src={himg2} className="p-6 w-[65vw] ml-[17%] " alt="" />
        <img src={himg3} className="p-6 w-[65vw] ml-[17%] " alt="" />
      </div>
      <div className="flex w-full  p-6 justify-center flex-wrap bg-green-50">
        <div id="first" className="h-[400px] w-[400px] m-4 bg-rose-600 mr-6"></div>
        <div id="second" className="h-[400px] w-[400px] m-4 bg-rose-600 mr-6"></div>
        <div id="third" className="h-[400px] w-[400px] m-4 bg-rose-600 mr-6"></div>
      </div>
      <div></div>
      <div className="footer h-[100px] bg-green-300 flex items-center text-gray-600 ">
        <div className="flex w-full h-[30px] justify-center text-[23px]">
          <div className="mr-4 hover:text-zinc-700"><i class="text-black ri-copyright-line"></i> All Rights Reserved</div>
          <div className="mr-4 hover:text-rose-600"><i className="text-rose-600 ri-instagram-line "></i> Instagram</div>
          <div  className="mr-4 hover:text-zinc-600"><i className="text-black ri-twitter-x-line"></i> Twitter</div>
          <div className="mr-4 hover:text-blue-900"><i className="text-blue-900  ri-facebook-line"></i> Facebook</div>
          <div className="mr-4 hover:text-blue-500"><i className="text-blue-500  ri-linkedin-box-line"></i> LinkedIn</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
