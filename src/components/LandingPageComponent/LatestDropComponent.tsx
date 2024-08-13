import Line from "../Line"
import Drop from "../Drop"
import YellowBorderButton from "../YellowBorderButton";

export default function LatestDropComponent() {

    const drops = [
        {name: 'Reuben', id: '1st Born', image: "/img/nft/Reuben.gif"},
        {name: 'Simeon', id: '2nd Born', image: "/img/nft/Simeon.gif"},
        {name: 'Levi', id: '3rd Born', image: "/img/nft/LEVI.gif"},
        {name: 'Judah', id: '4th Born', image: "/img/nft/Judah.gif"},
        {name: 'Napthali', id: '5th Born', image: "/img/nft/Napthali.gif"},
        {name: 'Gad', id: '6th Born', image: "/img/nft/GAD.gif"},
        {name: 'Asher', id: '7th Born', image: "/img/nft/Asher.gif"},
        {name: 'Issachar', id: '8th Born', image: "/img/nft/Issachar.gif"},
        {name: 'Zebulun', id: '9th Born', image: "/img/nft/ZEBULUN.gif"},
        {name: 'Manesseh', id: '10th Born', image: "/img/nft/Manasseh.gif"},
        {name: 'Ephraim', id: '11th Born', image: "/img/nft/Ephriam.gif"},
        {name: 'Benjamin', id: '12th/Last Born', image: "/img/nft/Benjamin.gif"},
    ];

    return (
        <section id="drop" className="pt-[135px] relative justify-center box-border w-[100%] py-[20px]">
            <div className="flex flex-col justify-center items-center w-[100%] py-0 px-[80px] mx-0 mb-[70px]">
                <h3 className="text-white font-chakra text-center text-[36px]">Our Latest Drop</h3>
                <Line />
            </div>  
            <div className="box-border w-[100%] pl-[30px] pr-[40px]">
                <ul className="h-[965px] overflow-y-auto flex min-[650px]:flex-row min-[650px]:flex-wrap max-[650px]:flex-col list-none dropbox">
                    {drops.map((item, index) => (
                        <Drop key={index} image={item.image}>
                            {item.name}<br />
                            {item.id}
                        </Drop>
                    ))}
                </ul>
                <div className="text-center mt-[50px] pt-[50px]">
                    <YellowBorderButton href="#">Mint</YellowBorderButton>
                </div>
            </div>
        </section>
    )
}