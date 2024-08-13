import React from "react";
import Line from "../Line";
import Member from "../Member";

const TeamMembersComponent: React.FC = () => {
  const members = [
    {
      mail: "@cg_que",
      name: "Artist",
      img: "/img/Artist.png",
      insta: "https://instagram.com/cg__que?igshid=ODBkMDk1MTU",
    },
    {
      mail: "@BMB_funding",
      name: "Financial Prophet",
      img: "/img/FP.jpeg",
      insta: "https://instagram.com/bmb_funding?igshid=ODBkMDk1MTU=",
    },
    {
      mail: "@noeaze",
      name: "Bankruptcy Specialist",
      img: "/img/BS.jpg",
      insta: "https://instagram.com/noeaze?igshid=ODBkMDk1MTU=",
    },
    {
      mail: "@anavieltheservant",
      name: "Artist",
      img: "/img/AAG.jpeg",
      insta: "https://instagram.com/anavieltheservant?igshid=ODBkMDk1MTU=",
    },
  ];

  return (
    <section id="team" className="pt-[150px] relative box-border w-[100%]">
      <div className="w-[100%] py-0 px-[20px] mx-auto my-0 overflow-hidden">
        <div className="flex flex-col justify-center items-center w-[100%] py-0 px-[80px] mx-0 mb-[31px]">
          <h3 className="text-white font-chakra text-[36px] text-center">
            Our Team Members
          </h3>
          <Line />
        </div>
        <div className="flex min-[650px]:flex-row min-[650px]:flex-wrap max-[650px]:flex-col list-none box-border justify-center w-[100%]">
          {members.map((item, index) => (
            <Member key={index} image={item.img} insta={item.insta}>
              {item.mail}
              <br />
              {item.name}
            </Member>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembersComponent;
