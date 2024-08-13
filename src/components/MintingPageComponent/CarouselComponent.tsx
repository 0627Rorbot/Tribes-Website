"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

const CarouselComponent: React.FC = () => {
  const images = [
    "/img/nft/Asher.webp",
    "/img/nft/Benjamin.webp",
    "/img/nft/Dan.webp",
    "/img/nft/Ephraim.webp",
    "/img/nft/Gad.webp",
    "/img/nft/Issachar.webp",
    "/img/nft/Judah.webp",
    "/img/nft/Manasseh.webp",
    "/img/nft/Naphtali.webp",
    "/img/nft/Reuben.webp",
    "/img/nft/Simeon.webp",
    "/img/nft/Zebulun.webp",
  ];

  return (
    <div>
      <div className="flex justify-center w-[100%] p-[10px] skew-y-[-6deg]">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          pagination={{ clickable: true }}
        >
          {images.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <div className="w-[100%] h-[190px] flex justify-center items-center p-[30px] border-[2px] border-gray-3636 rounded-[20px]">
                <img src={imageUrl} className="m-auto w-[100%]" alt="image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center w-[100%] p-[10px] skew-y-[-6deg]">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          pagination={{ clickable: true }}
        >
          {images.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <div className="w-[100%] h-[190px] flex justify-center items-center p-[30px] border-[2px] border-gray-3636 rounded-[20px]">
                <img src={imageUrl} className="m-auto w-[100%]" alt="image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselComponent;
