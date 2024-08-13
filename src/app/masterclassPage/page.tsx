import React from 'react';
import HeaderBgComponent from '@/components/MasterClassPageComponent/HeaderBgComponent';
import GuideComponent from '@/components/MasterClassPageComponent/GuideComponent';
import CourseDetailsComponent from '@/components/MasterClassPageComponent/CourseDetailsComponent';
import BgComponent from '@/components/MasterClassPageComponent/BgComponent';
import TestimonialsComponent from '@/components/MasterClassPageComponent/TestimonialsComponent';
import ReceiptsComponent from '@/components/MasterClassPageComponent/ReceiptsComponent';
import PricingTableComponent from '@/components/MasterClassPageComponent/PricingTableComponent';
import InstructorsComponent from '@/components/MasterClassPageComponent/InstructorsComponent';

const Home: React.FC = () => {
  return (
    <div className='relative flex z-2 flex-col min-h-[100vh] box-border text-white p-2'>
      <HeaderBgComponent />
      <GuideComponent />
      <CourseDetailsComponent />
      <BgComponent />
      <TestimonialsComponent />
      <ReceiptsComponent />
      <PricingTableComponent />
      <InstructorsComponent />
    </div>
  );
}

export default Home;
