import React from "react";

const FollowComponent: React.FC = ( ) => {
    return(
        <section className="mt-[100px] text-white box-border">
            <div className="px-[80px] w-[100%] mx-auto">
                <div className="min-[900px]:flex min-[900px]:flex-row max-[900px]flex-col: justify-center h-[800px] box-border">
                    <div className="min-[900px]:w-[80%]">
                        <img src="/img/FP.jpeg" className=" rounded-[20px] min-[900px]:w-[100%] max-[900px]:w-[50%] m-auto" />
                    </div>
                    <div className="flex flex-col text-center self-center">
                        <p className="min-[900px]:mb-[150px]">Follow us on Instagram</p>
                        <a href="https://www.instagram.com/12tribes.io/">
                            <h2 className=" min-[900px]:rotate-[-90deg] text-[50px] text-yellow-400 font-chakra font-bold">INSTAGRAM</h2>
                        </a>
                    </div>
                    <div className=" self-end relative min-[900px]:w-[80%] max-[900px]:w-[100%]">
                        <img src="/img/nft/Judah.gif" className=" max-[900px]:m-auto max-[900px]:w-[70%]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FollowComponent;