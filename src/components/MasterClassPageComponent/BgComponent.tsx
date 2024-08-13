import React from "react";

const BgComponent: React.FC = ( ) => {
    return(
        <section className="bg-mint-bg py-[180px] box-border block bg-center bg-no-repeat bg-cover w-[100%] px-[50px]">
            <div className="w-[100%] text-center">
                <h2 className="text-[35px] uppercase font-chakra leading-[45px] tracking-[1px] font-bold mb-[30px]">Mint our NFT</h2>
                <ul className="flex flex-row flex-wrap justify-center">
                    <li className=" bg-white basis-[200px] p-[10px] rounded-[20px] mx-[10px] my-[10px] w-[170px] h-[70px]">
                        <a href="#">
                            <img alt="1" src="/img/masterclass/metamask.png" />
                        </a>
                    </li>
                    <li className=" bg-white basis-[200px] p-[10px] rounded-[20px] mx-[10px] my-[10px] w-[170px] h-[70px]">
                        <a href="#">
                            <img alt="1" src="/img/masterclass/eth.png" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default BgComponent;