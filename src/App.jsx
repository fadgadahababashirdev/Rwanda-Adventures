import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import Mainpage from './components/Mainpage';
import { Context } from './components/TouristContext';
import Services from './kevin/Services';
import { ToastContainer } from 'react-toastify';
import Aside from './components/dashboard/Aside';
import Alltb from './components/tables/Alltb';
import Userstable from './components/tables/Userstable';
import Booking from './kevin/Booking';
import TouristExperience from './components/TouristExperience';
import Places from './components/tables/Places';
import PlaceForm from './components/forms/PlaceForm';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Place } from './components/contexts/Place';
import Tours from './components/tables/Tours';
import CreateTour from './components/forms/CreateTour';
import Funplaces from './components/Funplaces';
import Activities from './components/tables/Activities';
import CreateActivity from './components/forms/CreateActivity';
import { Tou } from './components/contexts/Tou';
import { Activ } from './components/contexts/ActivityContext';
import Bookings from './components/tables/Bookings';
import { Book } from './components/contexts/Book';
import { Omo } from './components/contexts/Admin';

const App = () => {
  //  users data
  const [userData, setUsersData] = useState([]);
  useEffect(() => {
    const handleData = async () => {
      try {
        const url = 'https://rvbbackend.onrender.com/users';
        const response = await axios.get(url);

        setUsersData(response.data);
      } catch (error) {
        console.log(error);
        console.log('data not got ');
      }
    };

    handleData();
  }, []);
  // const Booking
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const handleBooks = async () => {
      try {
        const url = 'https://rvbbackend.onrender.com/bookings';
        const response = await axios.get(url);
        setBooking(response.data.books);
      } catch (error) {}
    };
    handleBooks();
  }, []);
  // Activities Data
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const getActivities = async () => {
      const url = 'https://rvbbackend.onrender.com/getActivity';
      const response = await axios.get(url);
      setActivities(response.data.seeActivity);
    };
    getActivities();
  }, []);

  // Tours Data
  const [tours, setTours] = useState([]);
  useEffect(() => {
    const getTours = async () => {
      try {
        const url = 'https://rvbbackend.onrender.com/tours';
        const response = await axios.get(url);
        setTours(response.data.tours);
      } catch (error) {
        console.log(error);
      }
    };
    getTours();
  }, []);

  // Place Data
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const handlePlace = async () => {
      try {
        const url = 'https://rvbbackend.onrender.com/places';
        const response = await axios.get(url);
        const place = response.data.fndPlace;
        setPlaces(place);
      } catch (error) {
        console.log(error);
      }
    };
    handlePlace();
  }, []);

  // usersData

  const images = [];
  return (
    <>
    <Omo.Provider value={{userData}}>
      <Book.Provider value={{ booking }}>
        <Activ.Provider value={{ activities }}>
          <Tou.Provider value={{ tours }}>
            <Place.Provider value={{ places }}>
              <Context.Provider value={{ images }}>
                <ToastContainer />
                <Router>
                  <Routes>
                    <Route path="/" element={<Mainpage />} />
                    <Route path="/Login" element={<LoginPage />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/dashboard" element={<Aside />} />
                    <Route path="/tables" element={<Alltb />} />
                    <Route path="/userstable" element={<Userstable />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route
                      path="/TouristExperience"
                      element={<TouristExperience />}
                    />
                    <Route path="/places" element={<Places />} />
                    <Route path="/createPlace" element={<PlaceForm />} />
                    <Route path="/Tours" element={<Tours />} />
                    <Route path="/createTour" element={<CreateTour />} />
                    <Route path="/Funplaces" element={<Funplaces />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="createActivity" element={<CreateActivity />} />
                    <Route path="/bookingg" element={<Bookings />}></Route>
                  </Routes>
                </Router>
              </Context.Provider>
            </Place.Provider>
          </Tou.Provider>
        </Activ.Provider>
      </Book.Provider>
      </Omo.Provider>
    </>
  );
};

export default App;
