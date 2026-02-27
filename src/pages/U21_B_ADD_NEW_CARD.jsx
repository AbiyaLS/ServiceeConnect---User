import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import the tool
import AppHeader from '../components/AppHeader';
import CardPaymentForm from '../components/CardPaymentForm';
import Component4 from '../components/Component4';

const U21_B_ADD_NEW_CARD = () => {


  return (
    <div className='bg-gray-100'>
      
      <Component4
      title={"Add Card"}
      theme='black'/>

      <CardPaymentForm />
    </div>
  );
};

export default U21_B_ADD_NEW_CARD;