import React from 'react';
import FirstComponent from '@/components/MintingPageComponent/FirstComponent';
import RequirementComponent from '@/components/MintingPageComponent/RequirementComponent';
import SaleComponent from '@/components/MintingPageComponent/SaleComponent';
import CarouselComponent from '@/components/MintingPageComponent/CarouselComponent';
import SaltlComponent from '@/components/MintingPageComponent/SaltComponent';
import KeyElementsComponent from '@/components/MintingPageComponent/KeyElementsComponent';
import FactsComponent from '@/components/MintingPageComponent/FactsComponent';
import FollowComponent from '@/components/MintingPageComponent/FollowComponent'

const Home: React.FC = () => {
  return (
    <div className='relative flex flex-col box-border p-3 text-white'>
      <FirstComponent />
      <RequirementComponent />
      <SaleComponent />
      <CarouselComponent />
      <SaltlComponent />
      <KeyElementsComponent />
      <FactsComponent />
      <FollowComponent />
    </div>
  );
}

export default Home;
