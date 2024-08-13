import Line from "@/components/Line";
import YellowBorderButton from "../YellowBorderButton";

export default function ProphecyComponent () {
    return(
        <div className="w-[100%]">
            <section id="prophecy" className="pt-[130px] w-[100%] relative flex flex-col justify-center">
                <div className="flex flex-col justify-center items-center w-[100%] py-0 px-[80px] mx-0 my-auto">
                    <h3 className="text-white font-chakra text-[36px]">Prophecy</h3>
                    <Line />
                </div>
                </section>

                <section id="prophecy-video" className="w-[100%]">
                <div className="mx-0 my-[30px] flex items-center justify-center text-white w-[100%]">
                    <iframe className="w-[560px] h-[315px] max-w-[100%]" src="https://www.youtube.com/embed/XNVvnD2KsE4" title="YouTube video player"></iframe>
                </div>
                </section>

                <section className="w-[100%] px-[20px] pb-[20px] pt-0 mx-0 my-auto">
                <div className="text-center">
                    <p className="font-chakra font-bold text-[20px] text-white mb-[20px]">Deuteronomy 28 1-15</p>
                    <div className="h-[60px] overflow-hidden relative mb-[20px] px-[30px] pb-[30px]">
                        <ul className="m-0 p-0 list-none text-yellow-400 animate-[scrollUp_60s_1s_linear_infinite_forwards]">
                            <li className="list-none">1 Now if you faithfully obey the voice of the LORD your God and are careful to follow all His commandments I am giving you today, the LORD your God will set you high above all the nations of the earth</li>
                            <li className="list-none">2 And all these blessings will come upon you and overtake you, if you will obey the voice of the LORD your God</li>
                            <li className="list-none">3 You will be blessed in the city and blessed in the country</li>
                            <li className="list-none">4 The fruit of your womb will be blessed, as well as the produce of your land and the offspring of your livestock—the calves of your herds and the lambs of your flocks</li>
                            <li className="list-none">5 Your basket and kneading bowl will be blessed</li>
                            <li className="list-none">6 You will be blessed when you come in and blessed when you go out.</li>
                            <li className="list-none">7 The LORD will cause the enemies who rise up against you to be defeated before you. They will march out against you in one direction but flee from you in seven.</li>
                            <li className="list-none">8 The LORD will decree a blessing on your barns and on everything to which you put your hand; the LORD your God will bless you in the land He is giving you.</li>
                            <li className="list-none">9 The LORD will establish you as His holy people, just as He has sworn to you, if you keep the commandments of the LORD your God and walk in His ways.</li>
                            <li className="list-none">10 Then all the peoples of the earth will see that you are called by the name of the LORD, and they will stand in awe of you.</li>
                            <li className="list-none">11 The LORD will make you prosper abundantly—in the fruit of your womb, the offspring of your livestock, and the produce of your land—in the land that the LORD swore to your fathers to give you.</li>
                            <li className="list-none">12 The LORD will open the heavens, His abundant storehouse, to send rain on your land in season and to bless all the work of your hands. You will lend to many nations, but borrow from none.</li>
                            <li className="list-none">13 The LORD will make you the head and not the tail; you will only move upward and never downward, if you hear and carefully follow the commandments of the LORD your God, which I am giving you today. </li>
                            <li className="list-none">14 Do not turn aside to the right or to the left from any of the words I command you today, and do not go after other gods to serve them.</li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <YellowBorderButton href="https://discord.gg/EaJkRY47MZ">JOIN DISCORD</YellowBorderButton>
                        <YellowBorderButton href="10-year-strategic-plan.html">THE BLUE PRINT</YellowBorderButton>
                    </div>
                </div>
            </section>
        </div>
    );
}