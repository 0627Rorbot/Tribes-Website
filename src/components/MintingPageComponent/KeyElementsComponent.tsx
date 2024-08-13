import React from "react";

const KeyElementsComponent: React.FC = () => {
  return (
    <section className="mt-[200px] relative h-[1100px] box-border text-white w-[100%]">
      <div className="box-border px-[40px] mx-auto w-[100%] text-center">
        <h2 className=" min-[900px]:float-right min-[900px]:mr-[200px] text-[50px] font-bold font-chakra">
            KEY ELEMENTS<br />OF <span className="text-yellow-300">OUR NFT</span>
        </h2>
        <div className="min-[900px]:absolute w-[100%] max-[900px]:flex max-[900px]:flex-col max-[900px]:justify-center ">
            <div className="min-[900px]:absolute max-[900px]:m-auto min-[900px]:top-[-110px] min-[900px]:left-[150px]">
                <p className="w-[80%] m-auto min-[900px]:top-[50%] min-[900px]:left-[50%] min-[900px]:translate-x-[-50%] min-[900px]:translate-y-[-50%] font-chakra text-[25px] text-center absolute max-[900px]:top-[25%] max-[900px]:left-[10%]">12 TRIBES OF ISRAEL</p>
                <svg className="animate-rotate max-[900px]:w-[300px] max-[900px]:h-[300px]" width="500px" height="500px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="transparent" strokeWidth="0.5" cx="33" cy="33" r="30" stroke="url(#gradient)"/>
                    <linearGradient id="gradient">
                        <stop offset="50%" stop-color="gold" stop-opacity="1"/>
                        <stop offset="65%" stop-color="gold" stop-opacity="0.1"/>
                        <stop offset="100%" stop-color="gold" stop-opacity="0"/>
                    </linearGradient>
                </svg>
            </div>
            <div className="min-[900px]:absolute min-[900px]:top-[200px] min-[900px]:left-[765px] max-[900px]:m-auto">
                <p className="w-[80%] m-auto min-[900px]:top-[50%] min-[900px]:left-[50%] min-[900px]:translate-x-[-50%] min-[900px]:translate-y-[-50%] font-chakra text-[20px] text-center absolute max-[900px]:top-[53%] max-[900px]:left-[10%]">DISCORD ACCESS</p>
                <svg className="animate-rotate max-[900px]:w-[300px] max-[900px]:h-[300px]" width="300px" height="300px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="transparent" strokeWidth=".5" cx="33" cy="33" r="30" stroke="url(#gradient)"/>
                    <linearGradient id="gradient">
                        <stop offset="50%" stop-color="gold" stop-opacity="1"/>
                        <stop offset="65%" stop-color="gold" stop-opacity=".5"/>
                        <stop offset="100%" stop-color="gold" stop-opacity="0"/>
                    </linearGradient>
                </svg> 
            </div>
            <div className="min-[900px]:absolute min-[900px]:top-[490px] min-[900px]:left-[335px] max-[900px]:m-auto">
                <p className="w-[80%] m-auto min-[900px]:top-[50%] min-[900px]:left-[50%] min-[900px]:translate-x-[-50%] min-[900px]:translate-y-[-50%] font-chakra text-[25px] text-center absolute max-[900px]:top-[80%] max-[900px]:left-[10%]">PRIVATE EVENTS</p>
                <svg className="animate-rotate max-[900px]:w-[300px] max-[900px]:h-[300px]" width="600px" height="600px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="transparent" strokeWidth=".5" cx="33" cy="33" r="30" stroke="url(#gradient)"/>
                    <linearGradient id="gradient">
                        <stop offset="50%" stop-color="gold" stop-opacity="1"/>
                        <stop offset="65%" stop-color="gold" stop-opacity=".5"/>
                        <stop offset="100%" stop-color="gold" stop-opacity="0"/>
                    </linearGradient>
                </svg> 
            </div>
            <div className="min-[900px]:absolute min-[900px]:top-[430px] min-[900px]:left-[970px] max-[900px]:m-auto">
                <p className="w-[80%] m-auto min-[900px]:top-[50%] min-[900px]:left-[50%] min-[900px]:translate-x-[-50%] min-[900px]:translate-y-[-50%] font-chakra text-[20px] text-center absolute max-[900px]:top-[108%] max-[900px]:left-[10%]">FINANCIAL LITERACY</p>
                <svg className="animate-rotate max-[900px]:w-[300px] max-[900px]:h-[300px]" width="450px" height="450px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="transparent" strokeWidth=".5" cx="33" cy="33" r="30" stroke="url(#gradient)"/>
                    <linearGradient id="gradient">
                        <stop offset="50%" stop-color="gold" stop-opacity="1"/>
                        <stop offset="65%" stop-color="gold" stop-opacity=".5"/>
                        <stop offset="100%" stop-color="gold" stop-opacity="0"/>
                    </linearGradient>
                </svg> 
            </div>
        </div>
      </div>
    </section>
  );
};

export default KeyElementsComponent;
