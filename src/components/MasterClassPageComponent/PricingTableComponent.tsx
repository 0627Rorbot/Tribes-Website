import React from "react";
import YellowBorderButton from "../YellowBorderButton";

const PricingTableComponent: React.FC = ( ) => {
    return(
        <section className="w-[100%] box-border pt-[50px]">
            <div className="p-[20px] w-[100%] mx-auto">
                <h2 className="font-bold text-[50px] font-chakra text-yellow-400 uppercase text-center mb-[40px]">Our <span> Pricing Table</span></h2>
                <div className="py-[50px] box-border px-[40px]">
                    <div className=" border-[1px] border-gray-300 text-center w-[400px] m-auto py-[20px]">
                        <h4 className="text-[24px] uppercase">Investment</h4>
                        <p className=" text-yellow-400 font-roboto text-[40px] font-bold my-[20px]">$3,000 <span>Lifetime</span></p>
                        <ul className=" list-none px-[40px] text-gray-300">
                            <li className=" py-[15px] list-none mb-[5px] border-b-[1px] border-gray-400">
                                <p className="mb-[20px] tracking-[1px] text-[20px]">Official Blue print</p>
                            </li>
                            <li className=" py-[15px] list-none mb-[5px] border-b-[1px] border-gray-400">
                                <p className="mb-[20px] tracking-[1px] text-[20px]">24/7 Support </p>
                            </li>
                            <li className=" py-[15px] list-none mb-[5px] border-b-[1px] border-gray-400">
                                <p className="mb-[20px] tracking-[1px] text-[20px]">Exclusive community</p>
                            </li>
                            <li className=" py-[15px] list-none mb-[5px] border-b-[1px] border-gray-400">
                                <p className="mb-[20px] tracking-[1px] text-[20px]">Mentorship</p>
                            </li>
                            <li className=" py-[15px] list-none mb-[5px]">
                                <p className="mb-[20px] tracking-[1px] text-[20px]">12 Tribes NFT</p>
                            </li>
                        </ul>
                        <YellowBorderButton href="#">MINT NOW</YellowBorderButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingTableComponent;