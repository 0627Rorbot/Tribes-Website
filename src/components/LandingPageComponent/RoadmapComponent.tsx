"use client";
import React, { useRef } from "react";
import Line from "../Line";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import RoadmapSlide from "../RoadmapSlide";

export default function RoadmapComponent() {
  const data = [
    {
      title: "2.2.2022 AD",
      description:
        "@bmb_funding  brought Dream Home for his family with the exact skills implemented in MASTER CLASS",
    },
    {
      title: "3.3.2022 AD",
      description:
        "The Ultimate Guide to Financial Literacy eBook Launch",
    },
    {
      title: "4.3.2022 AD",
      description:
        "Inspiration for The Financial Literacy Master Class to help people buy their dream home, and learn about Businesses, Banking, and economics.",
    },
    {
      title: "5.1.2022 AD",
      description:
        "@bmb_funding collab with @anavieltheservant on HIPHOP “BAG” EP Project",
    },
    {
      title: "7.15.2022 AD",
      description:
        "HIRE DEV TEAM TO BRING PROJECT TO LIFE",
    },
    {
      title: "7.1.2022 AD",
      description:
        "First beta version of Patriarch of the 12 tribes of Israel created",
    },
    {
      title: "7.25.2022 AD",
      description:
        "@bmb_funding stop accepting new Credit Repair clients to focus on 12tribes.io project",
    },
    {
      title: "7.29.2022 AD",
      description:
        "Financial Literacy Master Class Framework started",
    },
    {
      title: "8.1.2022 AD",
      description:
        "“BAG” “EP” Released BY @anavieltheservant",
    },
    {
      title: "8.5.2022 AD",
      description:
        "10 Year Strategic plan released",
    },
    {
      title: "8.8.2022 AD",
      description:
        "1 Hour IG Live with Anavial discussion about the Bag project and 12Tribes.IO NFT",
    },
    {
      title: "8.22.2022 AD",
      description:
        "@anavieltheservant IG Live: Talk about what he thinks about the Master Class and about the 12tribes.io NFT project and what he got out of the ebook and masterclass materials",
    },
    {
      title: "8.15.2022 AD",
      description:
        "12 Tribes of Israel ArtWork completed",
    },
    {
      title: "11.14.2022 AD",
      description:
        "Website NFT LAUNCH",
    },
  ];

  return (
    <section id="twelve" className="pt-[150px] box-border pb-[50px] w-[100%] h-auto flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center w-[100%] py-0 px-[80px] mx-0 mb-[100px]">
        <h3 className="text-white font-chakra text-center text-[36px]">
          12 Tribes Roadmap
        </h3>
        <Line />
      </div>

      <div className="w-[100%] flex flex-row">
        <div className="w-[65%] h-[7px] bg-yellow-400"></div>
        <div className="w-[35%] h-[7px] ml-[10px] bg-gray-400"></div>
      </div>
      <div className="flex justify-center w-[100%] h-auto mb-[20px] relative mt-[-70px]">
        <Swiper slidesPerView={2} spaceBetween={10} pagination={{ clickable: true }}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <RoadmapSlide title={item.title} description={item.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
