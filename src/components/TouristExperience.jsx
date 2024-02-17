import React from 'react';
import Navbar from './Navbar';

const TouristExperience = () => {
  return (
    <div className="w-full h-full relative">
      <div className=" bg-slate-500 hello">
        <div className="bg-black opacity-50 w-full h-full"></div>
        <div className="w-full h-full absolute top-0 px-2 py-3 sec1 ">
          <Navbar />
          <div className="mt-20 secf">
            <h2 className="text-white text-2xl font-mono ">
              <span className="text-green-500 font-extrabold">
                Meet Omar Khana ,{' '}
              </span>
              sharing his experience and overview about his tour through Rwanda
              with Rwanda Ventures
            </h2>
            <img
              src="../public/philip.png"
              alt="image not found"
              className="w-full mt-3 rounded-t-sm sec2image"
            />
          </div>
        </div>

        <div className="w-full h-full bg-black text-white">
         {/* Experience part */}
         <div className='sec2'>
            <h2 className="text-center pt-5 text-2xl">Experience</h2>
            <p className="text-xs px-4 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, maiores! Delectus voluptatibus recusandae eos
              laboriosam sit, earum officia possimus vero? Nemo fuga voluptatum
              minima quasi possimus alias, a consequuntur earum dolor vel.
            </p>
          </div>
         {/* End of Experience */}

          {/* images of atourist and description enlighting what he loved most  */}
          <div className="px-8 mt-3 grid grid-cols-2 gap-3 sec3">
           <div className='kupe'>
            <img src="../public/henry.png" alt="image not found" />
            <p className='text-green-500'>Akagera National park:

              <span className='text-white'> He mostly liked the tall giraffes</span>
            </p>
           </div>
           <div className='kupe'>
            <img src="../public/henry.png" alt="image not found" />
            <p className='text-green-500'>Akagera National park:

              <span className='text-white'> He mostly liked the tall giraffes</span>
            </p>
           </div>
           
          </div>
          {/* end of tourist images  */}

         {/* Tourist video or images having fun through various locations */}
         <div className='grid grid-cols-1 mt-12 sec4'>
           <div>
            <h1 className='text-center text-2xl'>Akagera National Park</h1>
             
           <img src="../public/gollira.jpg" alt="" className='mt-10'/>
           </div>
          </div>
          {/* Tourist video or images having fun through variouse locations */}

          {/* Tourist Expectations before the tour */}
          <div className='grid grid-cols-1  bg-black w-full h-full pt-10'>
           <div className='px-2 sec4'>
            <h1 className='text-center text-2xl'><span className='text-green-500 font-extrabold'>Khan's</span>  Expectations before the tour</h1>
             
            <span>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vero porro obcaecati fugit laboriosam hic minus ipsum iste tempore deserunt! Omnis ex animi voluptas libero dicta. Ipsam quaerat odit dolorum aut repellat a perspiciatis nemo saepe ullam nulla, illum accusamus libero laboriosam veniam, excepturi voluptate inventore provident repudiandae harum dolor."</span>
            <h1 className='text-green-500 font-extrabold mt-3 olo'>Over View from the tour</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam id, animi cupiditate explicabo tenetur ullam dolorem natus tempore magnam assumenda accusamus deleniti!</span>
           </div>
        
          </div>
          {/* Tourist expectations before the tour */}
        </div>
      </div>
    </div>
  );
};

export default TouristExperience;
