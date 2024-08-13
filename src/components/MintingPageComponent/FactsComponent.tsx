import React from "react";

const FactsComponent: React.FC = ( ) => {
    return(
        <section className="mt-[150px] text-white box-border w-[100%] p-[40px]">
            <div className="box-border w-[100%] mx-auto mb-[20px]">
                <span>FAQ</span>
                <h2 className="text-[50px] font-bold font-chakra">GET THE <span className="text-yellow-300">FACTS</span></h2>
                <div className="mt-[70px] box-border flex flex-col">
                    <button className=" bg-transparent w-[100%] px-[20px] py-[35px] border-none text-left outline-none text-[20px] transition-all duration-200 font-chakra font-bold after:content-['\002B'] after:text-white after:font-bold after:text-[25px] after:float-right">
                        Can I purchase the Master class without the NFT?
                    </button>
                    <span className="border-gray-3636 border-t-[1px] block"></span>
                    <button className=" bg-transparent w-[100%] px-[20px] py-[35px] border-none text-left outline-none text-[20px] transition-all duration-200 font-chakra font-bold after:content-['\002B'] after:text-white after:font-bold after:text-[25px] after:float-right">
                        Any guarantees?
                    </button>
                    <span className="border-gray-3636 border-t-[1px] block"></span>
                    <button className=" bg-transparent w-[100%] px-[20px] py-[35px] border-none text-left outline-none text-[20px] transition-all duration-200 font-chakra font-bold after:content-['\002B'] after:text-white after:font-bold after:text-[25px] after:float-right">
                        Can I get a refund?
                    </button>
                    <span className="border-gray-3636 border-t-[1px] block"></span>
                    <button className=" bg-transparent w-[100%] px-[20px] py-[35px] border-none text-left outline-none text-[20px] transition-all duration-200 font-chakra font-bold after:content-['\002B'] after:text-white after:font-bold after:text-[25px] after:float-right">
                        What if I have questions about a subject or topic?
                    </button>
                    <span className="border-gray-3636 border-t-[1px] block"></span>
                    <button className=" bg-transparent w-[100%] px-[20px] py-[35px] border-none text-left outline-none text-[20px] transition-all duration-200 font-chakra font-bold after:content-['\002B'] after:text-white after:font-bold after:text-[25px] after:float-right">
                        Are these live classes, do I have to take off work to participate?
                    </button>
                    <span className="border-gray-3636 border-t-[1px] block"></span>
                </div>
            </div>
        </section>
    );
}

export default FactsComponent;