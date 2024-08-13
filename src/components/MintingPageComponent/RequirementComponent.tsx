import React from "react";
import RequirementData from "../RequirementData";

const RequirementComponent: React.FC = ( ) => {

    const items = [
        {number: '01', data: 'Active coinbase account'},
        {number: '02', data: 'Google chrome browser'},
        {number: '03', data: 'Purchase $3,000 worth of ETH includes gas fees'},
        {number: '04', data: 'Transfer ETH to metamask / Coinbase Wallet'},
        {number: '05', data: 'Connect Wallet'},
        {number: '06', data: 'Mint NFT'},
        {number: '07', data: 'Cashapp, Venmo, Zelle Accepted'},
    ]

    return(
        <section className="text-center pt-[100px] box-border w-[100%] text-white">
            <div className="px-[20px]">
                <h2 className="min-[500px]:text-[50px] max-[500px]:text-[35px] font-chakra font-bold">
                    <span className="text-yellow-300 inline-block">REQUIREMENTS</span> TO MINT
                </h2>
                <div className="w-[70%] m-auto mt-[50px]">
                    {items.map((item, index) => (
                        <RequirementData key={index} number={item.number} data={item.data} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RequirementComponent;