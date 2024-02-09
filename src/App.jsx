import Kevincomponent from './kevin/kevincomponent';
import React from 'react';
import FadgaAllComonent from './components/FadgaAllComonent';
import { Context } from './components/TouristContext';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Secondfirst from './components/Secondfirst';
import ThirdFirst from './components/ThirdFirst';
import Component5 from './kevin/Component5';
import Component6 from './kevin/Component6'
import Component7 from './kevin/Component7';
import Component8 from './kevin/Component8';
import Footer from './kevin/Footer';

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
    <>
      <Context.Provider value={{ images }}>
        <LandingPage></LandingPage>
        <Secondfirst></Secondfirst>
        <ThirdFirst></ThirdFirst>
        <Component5></Component5>
        <Component6></Component6>
        <Component7></Component7>
        <Footer></Footer>
      </Context.Provider>
    </>
  );
};

export default App;
