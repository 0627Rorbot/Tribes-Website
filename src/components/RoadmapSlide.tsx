import React from "react";

interface Item {
  title: string;
  description: string;
}

const RoadmapSlide: React.FC<Item> = ({ title, description }) => {
  return (
    <div className="w-[90%] flex flex-row box-border py-[70px] cursor-move mr-[5px]">
      <div className="flex flex-col items-center">
        <div className="w-[20px] h-[10px] bg-yellow-400"></div>
        <div className="w-[2px] h-[200px] bg-yellow-400"></div>
        <div className="w-[20px] h-[20px] bg-yellow-400"></div>
        <div className="w-[70px] h-[2px] bg-yellow-400 mt-[-10px] ml-[50px]"></div>
      </div>
      <div className="w-[80%] bg-black border-[2px] border-yellow-400 mt-[50px] transition-all duration-300 ease-linear hover:shadow-[0px_0px_35px_rgba(250,212,0,0.6)] flex items-center justify-center text-white relative corner top-10 h-auto box-border">
        <div className="w-[100%] text-white z-[2] p-[20px] self-start">
            <p className="font-bold text-[24px] font-chakra">{title}</p>
            {description}
        </div>
        <div className="w-[90%] h-[103%] bg-black absolute transition-all duration-700 inner-corner"></div>
      </div>
    </div>
  );
};

export default RoadmapSlide;
