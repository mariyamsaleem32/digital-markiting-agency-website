import React from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';
import Home from '../pages/Home/index';
import Aboutus from '../pages/Aboutus/index';
import Services from '../pages/Services/index';
import Contactus from '../pages/Contactus/index';
import Notfound from '../pages/Notfound/index';
import FAQs from '../components/FAQs';
import Creativity from '../service-pages/create-identity/index' 
import Custom from '../service-pages/custom-logo/index';
import Mobile from '../service-pages/mobile-apps/index';
import Marketing from '../service-pages/digital-marketing/index';
import Software from '../service-pages/software-development/index';
import Animation from '../service-pages/vedio-animation/index';

const Routing = () => {
    const location = useLocation();
    const isNotFound = location.pathname === '/notfound'; 

    return (
        <div className="App">
            {!isNotFound && <Navbar />} {/* Render Navbar only if not on the NotFound page */}
            <Routes>
                <Route index element={<Home />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/creative-identity" element={<Creativity />} />
                <Route path="/custom-website" element={<Custom />} />
                <Route path="/mobile-apps" element={<Mobile />} />
                <Route path="/digital-marketing" element={<Marketing />} />
                <Route path="/software-development" element={<Software />} />
                <Route path="/vedio-animation" element={<Animation />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
            {!isNotFound && <Footer />} {/* Render Footer only if not on the NotFound page */}
        </div>
    );
};

export default Routing;
