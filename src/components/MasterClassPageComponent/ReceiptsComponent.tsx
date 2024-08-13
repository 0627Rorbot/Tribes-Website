"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

const ReceiptsComponent: React.FC = () => {
  const images = [
    "/img/receipts/1.JPG",
    "/img/receipts/2.jpg",
    "/img/receipts/3.JPG",
    "/img/receipts/4.JPG",
    "/img/receipts/5.JPG",
    "/img/receipts/6.JPG",
    "/img/receipts/7.JPG",
    "/img/receipts/8.JPG",
    "/img/receipts/9.JPG",
    "/img/receipts/10.JPG",
    "/img/receipts/11.JPG",
    "/img/receipts/12.JPG",
    "/img/receipts/13.JPG",
    "/img/receipts/14.JPG",
    "/img/receipts/15.JPG",
    "/img/receipts/16.JPG",
    "/img/receipts/17.JPG",
    "/img/receipts/18.JPG",
    "/img/receipts/19.JPG",
    "/img/receipts/20.JPG",
    "/img/receipts/21.JPG",
    "/img/receipts/22.JPG",
    "/img/receipts/23.JPG",
    "/img/receipts/24.JPG",
    "/img/receipts/25.JPG",
    "/img/receipts/26.JPG",
    "/img/receipts/27.JPG",
    "/img/receipts/28.JPG",
    "/img/receipts/29.JPG",
    "/img/receipts/30.JPG",
    "/img/receipts/31.JPG",
    "/img/receipts/32.JPG",
    "/img/receipts/33.JPG",
    "/img/receipts/34.JPG",
    "/img/receipts/35.JPG",
    "/img/receipts/36.JPG",
    "/img/receipts/37.JPG",
    "/img/receipts/38.JPG",
    "/img/receipts/39.JPG",
    "/img/receipts/40.JPG",
    "/img/receipts/41.JPG",
    "/img/receipts/42.JPG",
    "/img/receipts/43.JPG",
    "/img/receipts/44.JPG",
    "/img/receipts/45.JPG",
    "/img/receipts/46.JPG",
    "/img/receipts/47.JPG",
    "/img/receipts/48.JPG",
    "/img/receipts/49.JPG",
    "/img/receipts/50.JPG",
    "/img/receipts/51.JPG",
    "/img/receipts/52.JPG",
  ];

  return (
    <div className="flex justify-center">
      <Swiper slidesPerView={3} spaceBetween={10} pagination={{ clickable: true }}>
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} className="m-auto w-[300px]" alt="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReceiptsComponent;
