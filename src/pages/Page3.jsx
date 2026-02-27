import React from 'react'
import Component4 from '../components/Component4'
import Component5 from '../components/fifth'


function Page3() {
  return (
    <div className='w-full min-h-screen bg-gray-200 '>
      <Component4 title="OTP VERIFICATION" theme="black"/>
      <Component5 flow="signup"/>
    </div>
  )
}

export default Page3
