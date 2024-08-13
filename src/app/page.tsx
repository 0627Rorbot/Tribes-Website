import React from "react";
import MainComponent from "@/components/LandingPageComponent/MainComponent";
import ProphecyComponent from "@/components/LandingPageComponent/ProphecyComponent";
import LatestDropComponent from "@/components/LandingPageComponent/LatestDropComponent";
import RoadmapComponent from "@/components/LandingPageComponent/RoadmapComponent";
import NationComponent from "@/components/LandingPageComponent/NationComponent";
import TeamMembersComponent from "@/components/LandingPageComponent/TeamMembersComponent";

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center items-center box-border w-[100%]">
      <MainComponent />
      <ProphecyComponent />
      <LatestDropComponent />
      <RoadmapComponent />
      <NationComponent />
      <TeamMembersComponent />
    </div>
  );
};

export default Home;
