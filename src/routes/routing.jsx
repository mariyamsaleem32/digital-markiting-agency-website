import React from 'react';
import {Routes,Route} from 'react-router';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
import NewsLetters from '../components/NewsLetters';
import Home from '../pages/Home/index';
import Aboutus from '../pages/Aboutus/index';
import Team from '../pages/Team/index';
import Services from '../pages/Services/index';
import Contactus from '../pages/Contactus/index';
import Notfound from '../pages/Notfound/index';
import Price from '../pages/Price/index';

const Routing = () => {
    return (
        <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/price" element={<Price/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route element={<Notfound/>}/>
    </Routes>
        <NewsLetters/>
        <Footer/> 
      </div>
    );
}

export default Routing;
