import Logo from "@/components/Logo";
import YellowBorderButton from "@/components/YellowBorderButton";
import ScrollDownButton from "@/components/ScrollDownButton";

export default function MainComponent() {
    return (
        <div className="w-[100%] relative z-[1] flex flex-col justify-center items-center box-border">
          <div className="relative z-[15] h-[100%] flex flex-col min-h-[87vh] pt-0 pr-0 pb-[120px] pl-0 justify-center items-center box-border">
            <div className="w-[100%] pt-0 pr-[80px] pb-0 pl-[80px] mt-0 mr-auto mb-0 ml-auto">
              <div className="text-center box-border">
                <Logo />
                <h2 className="[100%] m-auto mb-[10px] p-0 min-[900px]:text-[50px] max-[900px]:text-[35px] uppercase min-[900px]:tracking-[35px] max-[900px]:tracking-[10px] min-[900px]:leading-[70px] max-[900px]:leading-[35px] font-neon relative left-[17px] text-white">12 Tribes of Israel</h2>
                <div className="mt-[20px] box-border w-auto">
                  <YellowBorderButton href="#prophecy"> THE PROPHECY CONTINUES </YellowBorderButton>
                </div>
              </div>
            </div>
            <ScrollDownButton />
          </div>
        </div>
    )
}