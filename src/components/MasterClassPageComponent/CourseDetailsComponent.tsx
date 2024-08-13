import React from "react";

const CourseDetailsComponent: React.FC = ( ) => {
    return(
        <section className=" box-border pt-[50px] w-[100%] pb-[20px]">
            <div className="w-[100%] mx-auto text-center mb-[20px]">
                <h2 className="text-[50px] font-chakra font-bold uppercase"><span className="text-yellow-400">Course</span> Details</h2>
            </div>
            <div className="py-[50px] w-[100%] flex flex-row flex-wrap px-[20px] mx-auto">
                <div className="box-border basis-[400px] grow px-[10px] flex flex-row">
                    <div className="w-[50%] mx-[10px] text-center">
                        <img className="mb-[18px] m-auto" alt="" src="/img/masterclass/length.png" />
                        <h4 className="text-[24px] uppercase text-yellow-400 font-bold font-chakra mb-[20px]"><a href="#">Length</a></h4>
                        <p className="mt-[8px] mb-[20px] text-[18px]">6 – 12 Months to master the credit game. 10,000 hours to master anything.</p>
                    </div>
                    <div className="w-[50%] mx-[10px] ml-[20px] text-center">
                        <img className="mb-[18px] m-auto" alt="" src="/img/masterclass/instructor.png" />
                        <h4 className="text-[24px] uppercase text-yellow-400 font-bold font-chakra mb-[20px]"><a href="#">heading-tag-color</a></h4>
                        <p className="mt-[8px] mb-[20px] text-[18px]">Tommy Lee, Noeaze, CG__QUE</p>
                    </div>
                </div>
                <div className="box-border basis-[400px] grow px-[10px] flex flex-row">
                    <div className="w-[50%] mx-[10px] text-center">
                        <img className="mb-[18px] m-auto" alt="" src="/img/masterclass/mastery.png" />
                        <h4 className="text-[24px] uppercase text-yellow-400 font-bold font-chakra mb-[20px]"><a href="#">Mastery</a></h4>
                        <p className="mt-[8px] mb-[20px] text-[18px]">Funding, Credit, Consumer Law, and Financial Literacy</p>
                    </div>
                    <div className="w-[50%] mx-[10px] ml-[20px] text-center">
                        <img className="mb-[18px] m-auto" alt="" src="/img/masterclass/execution.png" />
                        <h4 className="text-[24px] uppercase text-yellow-400 font-bold font-chakra mb-[20px]"><a href="#">Execution</a></h4>
                        <p className="mt-[8px] mb-[20px] text-[18px]">Utilize the methods learned to obtain over $100K+ in business and or personal credit to build a righteous nation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CourseDetailsComponent;