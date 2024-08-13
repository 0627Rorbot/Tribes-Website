import React from "react";
import YellowBorderButton from "../YellowBorderButton";

const HeaderBgComponent: React.FC = ( ) => {
    return(
        <div className="pb-[100px] pt-[100px] z-1 relative h-[90vh] box-border bg-center bg-no-repeat bg-cover before:content-[''] before:clear-both before:table flex flex-col justify-center">
            <div className="absolute bg-header-bg w-[100%] h-[100%] flex justify-center top-0 text-center">
                <h1 className="absolute uppercase font-chakra text-[40px] font-bold tracking-[1px] box-border mt-[100px]">The Ultimate Guide To <span className=" text-yellow-400 inline-block">Financial Literacy</span> <br /> The Official Blueprint</h1>
                <video className="z-[-1] absolute w-[100%] h-[100%]" loop autoPlay muted >
                    <source src="/video/masterclass_vid.webm" type="video/webm" />
                </video>
            </div>
            <div className=" bottom-[50px] absolute w-[100%] flex justify-center">
                <YellowBorderButton href="#">MINT NOW</YellowBorderButton>
            </div>
        </div>
    );
}

export default HeaderBgComponent;