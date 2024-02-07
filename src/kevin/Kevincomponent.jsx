import React from 'react'
import Component5 from './component5'
import Component6 from './component6'
import Component7 from './component7'
import Component8 from './component8'
import Footer from './component9'
const kevincomponent = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Component5/>
      <Component6/>
     <Component7/>
     <div className='flex flex-col gap-10 relative mt-24 '>
      <Component8/>
      <Footer/>
      </div>
      
     </div>
  )

}

export default kevincomponent 