import { Link } from 'react-router';
import { FaWhatsapp, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';
import AppQR from '../QRcode';
import './styles.css'

const Footer = () => {
  return (
    <>
      <div className="bg-dark mt-1 py-5">
        <div className="container py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <h4 className="text-white mb-4">Our Office</h4>
              <p className="mb-2 text-white"><i className="mr-"><FaMapMarkerAlt /></i>karachi pakistan</p>
              <p className="mb-2 text-white"><i className="mr-3"><FaPhoneAlt /></i>0320 7707187</p>
              <p className="mb-2 text-white"><i className="mr-3"><FaEnvelope /></i>info.visualimagery@gmail.com</p>
              <div className="flex pt-3">
                <Link id='margin' className="bg-light text-dark p-2 rounded-full mr-3" to="https://wa.me/92 313 2403968" target="_blank"><FaWhatsapp /></Link>
                <Link id='margin' className="bg-light text-dark p-2 rounded-full mr-2" to="https://www.facebook.com/profile.php?id=100090462638801" target="_blank" rel="noopener noreferrer"><FaFacebookF /></Link>
                <Link id='margin' className="bg-light text-dark p-2 rounded-full mr-2" to="https://www.instagram.com/visualimagery11?fbclid=IwY2xjawITOe1leHRuA2FlbQIxMAABHSRpTx8xSx6Z4DOuNJgOtPq5IWhxmp1qvJCG7cPeGPTwc-bqT04SMtFDJg_aem_xCAlOlMNtOgcizCRlBhLeA" target="_blank"><FaInstagram/></Link>
              </div>
            </div>
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <Link id='link' className="text-light hover:text-white mb-2 block" to="/aboutus">About Us</Link>
              <Link id='link' className="text-light hover:text-white mb-2 block" to="/contactus">Contact Us</Link>
              <Link id='link' className="text-light hover:text-white mb-2 block" to="/services">Our Services</Link>
              <Link id='link' className="text-light hover:text-white mb-2 block" to="/faqs">Terms &amp; Condition</Link>
            </div>
            
            <div>
  <h4 className="text-white mb-4">Our Services</h4>
  <p><Link to={'/creative-identity'} className="text-white mb-1 no-underline">Creative Identity</Link></p>
  <p><Link to={'/custom-website'} className="text-white mb-1 no-underline">Custom Website</Link></p>
  <p><Link to={'/digital-marketing'} className="text-white mb-1 no-underline">Digital Marketing</Link></p>
  <p><Link to={'/mobile-apps'} className="text-white mb-1 no-underline">Mobile Apps</Link></p>
  <p><Link to={'/software-development'} className="text-white mb-1 no-underline">Software Development</Link></p>
  <p><Link to={'/vedio-animation'} className="text-white mb-1 no-underline">Video Animation</Link></p>
</div>


            <div>
             <AppQR/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-2">
        <div className="footer-container">
        <p style={{textAlign:'center',color:'white',fontSize:'20px',display:'flex',justifyContent:'center',alignItems:'center'}}>@your site all right reseved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;

