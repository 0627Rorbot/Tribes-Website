import React from "react";

const FirstComponent: React.FC = ( ) => {
    return(
        <div className="text-white flex min-[900px]:flex-row max-[900px]:flex-col relative w-[100%] justify-center items-center box-border px-[20px] pb-[50px] border-b-[1px] border-gray-666">
            <div className="max-[900px]:grow min-[900px]:w-[50%] z-[1]">
                <h1 className="min-[600px]:text-[45px] max-[600px]:text-[30px] font-chakra text-center">
                    <span className="text-yellow-300 inline-block">SONS OF JACOB</span> NET <br />
                    GENESIS 49:1-2
                </h1>
                <p className="text-[16] box-border mt-[20px]">
                    The 12 tribes of Israel NFT is a collection of 144 unique NFTs that serves as your exclusive membership to Thomas Financial literacy Masterclass. This Master Class will teach you how to build wealth and how you can start the building of a nation within a nation. With the biblical principles of the bible, mastering financial literacy and Repentance the kingdom is at hand.
                    <br />
                    <br />
                    Only 144 will ever be in existence and those that mint one of the tribe members will start a journey beyond finances and into spiritual transformation.
                </p>
                <div className="w-[40%] h-[40px] flex justify-center items-center cursor-pointer mt-[40px] box-border bg-yellow-400 rounded-[10px] text-black shadow-[10px_10px_15px_rgba(250,212,0,0.6)] transition-all duration-300 ease-linear hover:shadow-[0_0_0_rgba(0,0,0,0)] text-center py-[5px]">
                    <a href="#" className="font-chakra font-bold p-2">Our Medium Article</a>
                </div>
                <div className="w-[100%] flex flex-row mt-[100px]">
                    <div className="w-[50%] border-r-[1px] border-gray-666">
                        <img className="w-[12%]" src="/img/logo.webp" />
                        <p className="mt-[10px] mb-[20px] text-[17px] font-bold font-chakra">Financial Literacy Token</p>
                    </div>
                    <div className="w-[50%] pl-[50px]">
                        <img className="w-[12%]" src="/img/bag_music.webp" />
                        <p className="mt-[10px] mb-[20px] text-[17px] font-bold font-chakra">“BAG” Music EP Token</p>
                    </div>
                </div>
            </div>
            <div className="max-[900px]:grow w-[50%] px-[20px]">
                <div className="w-[100%]">
                    <img className="w-[60%] z-[3] m-auto" alt="" src="/img/nft/judah-gold.gif" />
                    <img className="w-[50%] mt-[-100px] z-[1] m-auto" alt="" src="/img/12TribesGems3.gif" />
                </div>
            </div>
        </div>
    );
}

export default FirstComponent;