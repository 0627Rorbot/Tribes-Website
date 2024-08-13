"use client"
import React from "react";
import Line from "../Line";
import ImageRotation from "@/components/ImageRotation";

const NationComponent: React.FC = () => {
  return (
    <section id="map" className="pt-[150px] relative box-border w-[100%]">
      <div className="w-[100%] py-0 px-[80px] mx-auto my-0 overflow-hidden">
        <div className="flex flex-col justify-center items-center w-[100%] py-0 px-[80px] mx-0 mb-[10px]">
          <h3 className="text-white font-chakra text-[36px] text-center">
            A Nation Within A Nation
          </h3>
          <Line />
        </div>
        <ImageRotation />
      </div>
    </section>
  );
};

export default NationComponent;
