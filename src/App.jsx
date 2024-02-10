import React from 'react';
import { Context } from './components/TouristContext';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Secondfirst from './components/Secondfirst';
import Component5 from './kevin/Component5';
import Component6 from './kevin/Component6';
import Component7 from './kevin/Component7';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import Footer1 from './kevin/Footer1';
import ThirdFirst from './components/ThirdFirst';


const App = () => {
  const images = [
    {
      img: '../public/forest.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '1',
    },
    {
      img: '../public/frog.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '2',
    },
    {
      img: '../public/gollira.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',

      id: '3',
    },
    {
      img: '../public/ima.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '4',
    },
    {
      img: '../public/iman.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '5',
    },
    {
      img: '../public/img.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '6',
    },
    {
      img: '../public/monkey.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '7',
    },
    {
      img: '../public/mountain.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '8',
    },
    {
      img: '../public/waterfalls.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '9',
    },
  ];
  return (
    <BrowserRouter>
      <Context.Provider value={{ images }}>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
           

          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
        <Secondfirst/>
        <ThirdFirst/>
        <Component5/>
        <Component6/>
        <Component7/>
        
        <Footer1/>
        
        
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
