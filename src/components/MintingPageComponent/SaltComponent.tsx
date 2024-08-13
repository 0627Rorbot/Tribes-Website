import React from "react";
import Salt from "../Salt";

const SaltlComponent: React.FC = () => {
  const saltItems = [
    {
      info: "Reuben - 1st Born",
      eth: "1.029 ETH",
      href: "#",
      img: "/img/nft/Reuben.webp",
    },
    {
      info: "Simeon - 2nd Born",
      eth: "1.029 ETH",
      href: "#",
      img: "/img/nft/Simeon.webp",
    },
    {
      info: "Levi - 3rd Born",
      eth: "1.029 ETH",
      href: "#",
      img: "/img/nft/Dan.webp",
    },
  ];

  return (
    <section className="mt-[200px] text-center text-white box-border p-[20px]">
      <h2 className="text-[50px] font-chakra font-bold mb-[20px]">
        SALT OF THE <span className="text-yellow-500 inline-block"> EARTH</span>
      </h2>
      <a href="https://opensea.io/collection/12tribes-io">
        <button className="bg-gradient-to-r from-yellow-300 to-yellow-500 font-chakra text-black font-bold rounded-[10px] px-[30px] py-[15px] text-[16px]">
          See All
        </button>
      </a>
      <div className="mt-[80px] box-borde w-[100%]">
        <ul className="flex min-[900px]:flex-row w-[100%] max-[900px]:flex-col justify-center list-none">
          {saltItems.map((item, index) => (
            <Salt
              key={index}
              info={item.info}
              eth={item.eth}
              href={item.href}
              img={item.img}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SaltlComponent;
