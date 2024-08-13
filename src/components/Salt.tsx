import React, { ReactNode } from "react";

interface MemberProps {
  info: string;
  eth: string;
  href: string;
  img: string;
}

const Salt: React.FC<MemberProps> = ({ info, eth, href, img }) => {
  return (
    <React.Fragment>
      <li className="grow pl-[10px] mb-[40px]">
        <div className="w-[100%] relative p-[30px] bg-gray-3636 rounded-[20px] border-[2px] border-gray-500 transition-all duration-300 hover:border-yellow-400">
          <div className="relative rounded-[5px] overflow-hidden z-5 box-border">
            <img
              src={img}
              className="w-[100%] h-[100%] object-cover transition-all duration-[1s] hover:scale-[1.15] hover:rotate-[-6deg]"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center text-center pt-[22px] pb-[21px] px-[20px] relative z-5">
            <div className="mt-[30px] items-center">
              <p>
                <b>{info}</b>
              </p>
              <p>{eth}</p>
            </div>
            <div className="w-[100px] h-[35px] flex justify-center items-center cursor-pointer mt-[40px] box-border bg-yellow-400 rounded-[10px] text-black shadow-[10px_10px_15px_rgba(250,212,0,0.6)] transition-all duration-300 ease-linear hover:shadow-[0_0_0_rgba(0,0,0,0)]">
              <a href={href} className="font-chakra p-2 text-[13px] font-bold">
                View NFT
              </a>
            </div>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default Salt;
