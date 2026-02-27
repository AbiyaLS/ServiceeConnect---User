import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import BookIedtem from '../components/BookIedtem';
import ToolBox from '../components/ToolBox';
import TapRepairCard from '../components/TapRepairCard';
import Component4 from '../components/Component4';
import BottomNavBar from '../components/BottomNavBar';

const U19Bookings = () => {
  const navigate = useNavigate();

  // const handleOpenRequest = () => {
  //   navigate('/U18_Request_Service');
  // };

  return (
    <div className="pb-6 bg-gray-100 min-h-screen">

      <Component4
      title={"Booking"}
      theme='black'
      showFilter
      showSearch/>

      <div className="px-3 md:px-4 mt-4 md:mt-6 cursor-pointer" /* onClick={handleOpenRequest} */>
     <div className="w-full lg:max-w-[1000px] mx-auto">
      <BookIedtem />
     </div>
    



      </div>

    <div className="px-3 md:px-4 mt-4 md:mt-6 cursor-pointer">
  <div className="w-full lg:max-w-[1000px] mx-auto">
    <TapRepairCard />
  </div>


  
</div>
 <BottomNavBar/>
    </div>
  );
};

export default U19Bookings;
