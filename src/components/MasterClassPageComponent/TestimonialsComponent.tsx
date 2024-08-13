import React from "react";

const TestimonialsComponent: React.FC = ( ) => {
    return(
        <section className="w-[100%] box-border pt-[50px]">
            <div className="p-[20px] w-[100%] mx-auto">
                <div className="pb-[20px] text-center">
                    <h2 className="font-bold font-chakra text-[50px] leading-3 text-yellow-400 uppercase mb-[20px]"><span>Testimonials</span></h2>
                </div>
                <div className="flex gap-[30px] justify-center items-center flex-wrap box-border">
                    <div className="grow-0 shrink basis-[30%]">
                        <iframe className="w-[100%] h-[100%]" src="https://www.youtube.com/embed/2Ojy3bA5Kjg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                    <div className="grow-0 shrink basis-[30%]">
                        <video width="100%" controls>
							<source src="/video/testitmonial-two.mov" type="video/mp4" />
						</video>
                    </div>
                    <div className="grow-0 shrink basis-[30%]">
                        <video width="100%" controls>
							<source src="/video/testimonial-three.mp4" type="video/mp4" />
						</video>
                    </div>
                    <div className="grow-0 shrink basis-[30%]">
                        <video width="100%" controls>
							<source src="/video/testimonial-four.mp4" type="video/mp4" />
						</video>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialsComponent;