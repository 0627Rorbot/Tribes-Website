import React from "react";

const GuideComponent: React.FC = ( ) => {
    return(
        <section className=" box-border pt-[50px] w-[100%] pb-[20px]">
            <div className="m-auto px-[20px] w-[100%] text-center pb-[20px]">
                <h2 className=" font-bold font-chakra text-[50px]">The Ultimate Guide <br /> To <span className="text-yellow-400 inline-block">Financial Literacy</span> Features </h2>
            </div>
            <div className="pt-[50px] px-[20px] flex flex-wrap items-center justify-center w-[100%]">
                <div className="basis-[300px] text-right mx-[10px] mt-[70px]">
                    <h4 className="text-[24px] text-yellow-400"><a href="#">HOW TO BUILD A CREDIT SCORE TO 750+</a></h4>
                    <h4 className="mt-[30px] text-[24px] text-yellow-400"><a href="#">MASTER CONSUMER LAWS THAT GOVERN THE CREDIT WORLD</a></h4>
                    <p className="mt-[15px] mb-[20px] font-chakra text-[18px] text-gray-300">FAIR DEBT COLLECTION PRACTICES ACT – FDCPA 15 USC 1692<br /> FAIR CREDIT REPORTING ACT - FCRA – 15USC 1681<br /> TRUTH IN LENDING – TIL - 15USC 1691</p>  
                </div>
                <div className="basis-[300px] mx-[10px] text-center">
                    <img alt="" className="mx-auto max-w-[100%] h-auto" src="/img/masterclass/Financial_literacy_bmb_.png" />
                </div>
                <div className="basis-[300px] mt-[50px] text-left">
                    <h4 className="mt-[30px] leading-[1.22] text-[24px] text-yellow-400"><a href="#">HOW TO OBTAIN OVER $100K IN BUSINESS FUNDING PER LLC</a></h4>
                    <h4 className="mt-[30px] leading-[1.22] text-[24px] text-yellow-400"><a href="#">REAL ESTATE GAME – BY MASON PIERRE ENTERPRISES</a></h4>
                    <h4 className="mt-[30px] leading-[1.22] text-[24px] text-yellow-400"><a href="#">LIST OF OVER 100 STREAMS OF INCOME AND SMALL BUSINESSES YOU CAN START</a></h4>
                    <h4 className="mt-[30px] leading-[1.22] text-[24px] text-yellow-400"><a href="#">LEARN HOW AUTOMATION CAN CHANGE YOUR LIFE</a></h4>
                </div>
            </div>
        </section>
    );
}

export default GuideComponent;