import React from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
import Home from '../pages/Home/index';
import Aboutus from '../pages/Aboutus/index';
import Team from '../pages/Team/index';
import Services from '../pages/Services/index';
import Contactus from '../pages/Contactus/index';
import Notfound from '../pages/Notfound/index';
import FAQs from '../components/FAQs';

const Routing = () => {
    const location = useLocation();
    const isNotFound = location.pathname === '/notfound'; 

    return (
        <div className="App">
            {!isNotFound && <Navbar />} {/* Render Navbar only if not on the NotFound page */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/services" element={<Services />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
            {!isNotFound && <Footer />} {/* Render Footer only if not on the NotFound page */}
        </div>
    );
};

export default Routing;
