import React from 'react';
import Component5 from './Component5';
import Component6 from './Component6';
import Component7 from './Component7';
import Component8 from './Component8';
import Footer from './Footer';
const kevincomponent = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Component5 />
      <Component6 />
      <Component7 />
      <div className="flex flex-col gap-10 relative mt-24 ">
        <Component8 />

        <Footer />
      </div>
    </div>
  );
};

export default kevincomponent;
