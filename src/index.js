import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './App';
import VideoBackground from './video';
import Frontbrands from './Frontbrands';
import PopularCars from './Popularcars';
import ExploreButton from './Explorebutton';
import VideoBackground2 from './video2';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <VideoBackground/>
    <Frontbrands/>
    <PopularCars/>
    <ExploreButton/>
    <VideoBackground2/>
    <Footer/>
  </React.StrictMode>

);


