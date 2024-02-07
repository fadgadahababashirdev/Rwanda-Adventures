import React from 'react';

const TouristExperience = () => {
  return (
    <div className="w-full h-screen">
      <div className="z-10 absolute top-0 flex  w-full justify-between px-5 mt-5 containe shadow-xl items-center pb-5">
        <h1 className="text-sm">Rwanda Ventures</h1>
        <ul className="flex unordered">
          <li className="mx-2 text-sm">Rwanda</li>
          <li className="mx-2 text-sm">Rwanda</li>
          <li className="mx-2 text-sm">Rwanda</li>
          <li className="mx-2 text-sm">Rwanda</li>
          <img
            src="../public/menu.svg"
            className="w-5 toggle"
            onClick={() => setLinks(!links)}
          />
        </ul>
      </div>

      <div className="pt-32">
        <h2 className="ml-10 text-lg font-sans">
          Experience testimony with Omar Khana
        </h2>
        <div className="mx-10 mt-10 flex w-full h-full">
          <div>
            <img
              src="../public/monkey.jpg"
              alt=""
              className="w-96 h-96 rounded-t-sm"
            />

            <div className="flex justify-between w-96">
              <div>
                <h1 className="text-xs">Places Visited</h1>

                <div className="flex">
                  <p className="text-xs">Nyungwe Forest</p>
                  <img
                    src="../public/forest.jpg"
                    alt=""
                    className="w-12 h-12  mx-10"
                  />
                </div>
                <div className="flex">
                  <p className="text-xs">Nyungwe Forest</p>
                  <img
                    src="../public/forest.jpg"
                    alt=""
                    className="w-12 h-12  mx-10"
                  />
                </div>
                <div className="flex">
                  <p className="text-xs">Nyungwe Forest</p>
                  <img
                    src="../public/forest.jpg"
                    alt=""
                    className="w-12 h-12  mx-10"
                  />
                </div>
                <div className="flex">
                  <p className="text-xs">Nyungwe Forest</p>
                  <img
                    src="../public/forest.jpg"
                    alt=""
                    className="w-12 h-12  mx-10"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xs">Mostly Liked</h1>
                <hr className=" bg-red-500" />
                <div className="flex">
                  <p className="text-xs">Nyungwe Forest</p>
                  <img
                    src="../public/forest.jpg"
                    alt=""
                    className="w-12 h-12"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="  p-5 text-sans text-10 w-1/3 ">
            <h1 className="text-sm text-black font-sans">
              <span className="text-green-300"> Omar Khan ,</span> Lorem ipsum
              dolor sit amet consectetur adipisicing elit. In hic ipsa
              accusantium? Commodi dolore fugiat ipsam minus consequuntur, sunt
              aliquid quos praesentium natus, nemo provident vitae dolorem
              tempore quod adipisci quisquam aut ratione sed dolorum eum! Illum
              a harum, est exercitationem enim unde similique asperiores ut
              blanditiis, reprehenderit dolorum rerum illo voluptates aliquid
              sapiente quis officiis inventore aliquam eos facere eligendi quo.
              Odit vel, dolore fugiat modi atque quibusdam ex voluptatum
              deleniti sit fuga iusto quos optio ea ipsum asperiores tempore
              expedita, reprehenderit aliquid totam velit impedit aut voluptate.
              Voluptates aut, hic at sequi doloremque aperiam quas similique
              dignissimos vel quidem ipsa corporis ex voluptatibus enim ab
              cupiditate maiores neque error eius? Minima, alias fuga? Tempora
              animi adipisci ad sed laboriosam quod labore ullam, voluptatibus
              cum illo saepe recusandae veritatis sapiente perspiciatis
              laudantium tenetur? Laudantium, quis. Veritatis deleniti, cum,
              consequatur neque reiciendis sed explicabo nihil quae voluptates
              earum odit quisquam assumenda distinctio sint. Sed consequuntur
              rerum, libero, cumque deserunt molestiae natus, fugit velit minus
              deleniti vel quia officiis optio officia rem aspernatur!
              Distinctio quaerat tempore modi ex inventore eligendi, sed dolore
              beatae reprehenderit voluptates alias a deleniti iure numquam,
              ipsa voluptatibus ea maxime recusandae minima! Ex alias vero
              soluta repellendus.
            </h1>
          </div>
          <div className="w-96 h-96">
            <img src="../public/iman.jpg" alt="" />
            <div>
              <h1 className="text-xs text-green-500 text-center mt-5">
                Omar Khana's Rating on Rwanda Ventures
              </h1>
              <p className="text-xs font-mono">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                ratione maiores cupiditate dolor recusandae velit consequuntur
                aperiam sequi aspernatur, iure quidem, ea quia vero laboriosam
                voluptatum, magni aut quisquam. Possimus saepe nam numquam ea
                deserunt, magni consequuntur id architecto neque. Voluptatum
                officia ratione molestias facere nesciunt laborum cumque qui
                eius.
              </p>
              <button className=" text-red-400 p-2 rounded-md text-center outline mt-5 text-xs ">
                Schedule your Tour
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Guiders part */}
      <div className="z-10 absolute top-0 flex  w-full justify-between px-5 mt-5 containe shadow-xl items-center pb-5">
        <h1 className="text-sm">Rwanda Ventures</h1>
        <ul className="flex unordered">
          <li className="mx-2 text-sm">Rwanda</li>
          <li className="mx-2 text-sm">Rwanda</li>
          <li className="mx-2 text-sm">Rwanda</li>
          <li className="mx-2 text-sm">Rwanda</li>
          <img
            src="../public/menu.svg"
            className="w-5 toggle"
            onClick={() => setLinks(!links)}
          />
        </ul>
      </div>

      <div className="pt-32">
        <h2 className="ml-10 text-lg font-sans">
          Overview about Omar khana by{' '}
          <span className="text-green-300">Niyonshuti Joseph</span>
        </h2>
        <div className="mx-10 mt-10 flex w-full h-full">
          <div>
            <img
              src="../public/gollira.jpg"
              alt=""
              className="w-96 h-96 rounded-t-sm"
            />
            <div className="bg-black text-xs p-2 w-80 ml-1">
              <p className="text-white text-sans ">Names :Niyonshuti Joseph</p>
              <p className="text-white text-sans ">
                Email :niyonshuitiJoseph@gmail.com
              </p>
              <p className="text-white text-sans ">
                Language I:Niyonshuti Joseph
              </p>
            </div>
          </div>

          <div className="  p-5 text-sans text-10 w-1/3">
            <h1 className="text-sm text-black font-serif">
              <span className="text-green-300"> Niyonshuti Joseph ,</span> Lorem
              ipsum dolor sit amet consectetur adipisicing elit. In hic ipsa
              accusantium? Commodi dolore fugiat ipsam minus consequuntur, sunt
              aliquid quos praesentium natus, nemo provident vitae dolorem
              tempore quod adipisci quisquam aut ratione sed dolorum eum! Illum
              a harum, est exercitationem enim unde similique asperiores ut
              blanditiis, reprehenderit dolorum rerum illo voluptates aliquid
              sapiente quis officiis inventore aliquam eos facere eligendi quo.
              Odit vel, dolore fugiat modi atque quibusdam ex voluptatum
              deleniti sit fuga iusto quos optio ea ipsum asperiores tempore
              expedita, reprehenderit aliquid totam velit impedit aut voluptate.
              Voluptates aut, hic at sequi doloremque aperiam quas similique
              dignissimos vel quidem ipsa corporis ex voluptatibus enim ab
              cupiditate maiores neque error eius? Minima, alias fuga? Tempora
              animi adipisci ad sed laboriosam quod labore ullam, voluptatibus
              cum illo saepe recusandae veritatis sapiente perspiciatis
              laudantium tenetur? Laudantium, quis. Veritatis deleniti, cum,
              consequatur neque reiciendis sed explicabo nihil quae voluptates
              earum odit quisquam assumenda distinctio sint. Sed consequuntur
              rerum, libero, cumque deserunt molestiae natus, fugit velit minus
              deleniti vel quia officiis optio officia rem aspernatur!
              Distinctio quaerat tempore modi ex inventore eligendi, sed dolore
              beatae reprehenderit voluptates alias a deleniti iure numquam,
              ipsa voluptatibus ea maxime recusandae minima! Ex alias vero
              soluta repellendus.
            </h1>
          </div>
          <div className="w-96 h-96">
            <img src="../public/iman.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristExperience;
