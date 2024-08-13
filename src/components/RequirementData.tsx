import React from "react";

interface Item {
  number: string;
  data: string;
}

const RequirementData: React.FC<Item> = ({ number, data }) => {
  return (
    <div className="m-[1rem] p-[1rem] overflow-x-hidden will-change-transform flex min-[600px]:gap-[100px] max-[600px]:gap-[30px] items-center relative">
      <div className="min-[600px]:text-[70px] max-[600px]:text-[30px] font-bold">{number}</div>
      <div className="text-[25px]">{data}</div>
      <div className="bg-white w-[100%] h-[2px] absolute bottom-0 overflow-hidden">
        <div className="bg-yellow-300 w-[100%] h-[2px] z-2 absolute bottom-0 animate-move"></div>
      </div>
    </div>
  );
};

export default RequirementData;
