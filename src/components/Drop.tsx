import React, {ReactNode} from "react"

interface MemberProps {
    children: ReactNode;
    image: string;
  }

const Drop: React.FC<MemberProps> = ({ children, image }) => {
    return(
        <React.Fragment>
            <li className="min-[650px]:w-[50%] max-[650px]:grow pl-[20px] pr-[10px] mb-[40px] box-border">
                <div className="w-[100%] relative box-border border-2 rounded-[5px] border-gray-666 transition-all duration-300 hover:border-yellow-300">
                    <div className="relative overflow-hidden z-[5px] box-border">
                        <img className="transition-all duration-[0.5s] hover:scale-[1.15] ease-linear hover:rotate-[-5deg]" src={ image } alt="" />
                    </div>
                    <div className="text-center pt-[22px] pb-[21px] px-[20px] relative z-5 box-border">
                        <h3 className="text-[18px] font-chakra m-0 p-0">
                            <a href="#" className="text-white transition-all duration-[0.5s] hover:text-yellow-300">{children}</a>
                        </h3>
                    </div>
                </div>
            </li>
        </React.Fragment>
    ) 
}

export default Drop;