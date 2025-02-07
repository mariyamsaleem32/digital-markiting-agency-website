import { Link } from 'react-router';
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="bg-dark mt-5 py-5">
        <div className="container py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <h4 className="text-white mb-4">Our Office</h4>
              <p className="mb-2 text-white"><i className="mr-3"><FaMapMarkerAlt /></i>123 Street, New York, USA</p>
              <p className="mb-2 text-white"><i className="mr-3"><FaPhoneAlt /></i>+012 345 67890</p>
              <p className="mb-2 text-white"><i className="mr-3"><FaEnvelope /></i>info@example.com</p>
              <div className="flex pt-3">
                <Link className="bg-light text-dark p-2 rounded-full mr-2" to="#"><FaTwitter /></Link>
                <Link className="bg-light text-dark p-2 rounded-full mr-2" to="#"><FaFacebookF /></Link>
                <Link className="bg-light text-dark p-2 rounded-full mr-2" to="#"><FaYoutube /></Link>
                <Link className="bg-light text-dark p-2 rounded-full mr-2" to="#"><FaLinkedinIn /></Link>
              </div>
            </div>
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <Link className="text-light hover:text-white mb-2 block" to="/about">About Us</Link>
              <Link className="text-light hover:text-white mb-2 block" to="/contact">Contact Us</Link>
              <Link className="text-light hover:text-white mb-2 block" to="/services">Our Services</Link>
              <Link className="text-light hover:text-white mb-2 block" to="/terms">Terms &amp; Condition</Link>
              <Link className="text-light hover:text-white mb-2 block" to="/support">Support</Link>
            </div>
            <div>
              <h4 className="text-white mb-4">Business Hours</h4>
              <p className="text-white mb-1">Monday - Friday</p>
              <h6 className="text-light">09:00 am - 07:00 pm</h6>
              <p className="text-white mb-1">Saturday</p>
              <h6 className="text-light">09:00 am - 12:00 pm</h6>
              <p className="text-white mb-1">Sunday</p>
              <h6 className="text-light">Closed</h6>
            </div>
            <div>
              <h4 className="text-white mb-4">Newsletter</h4>
              <p className="text-white">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="relative w-full">
                <input className="w-full py-3 px-4 bg-transparent border border-gray-300 rounded-md" type="text" placeholder="Your email" />
                <button type="button" className="absolute top-0 right-0 mt-2 mr-2 py-2 px-4 bg-light text-dark rounded-md">SignUp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-white">
              © <Link className="text-light hover:text-white" to="#">Your Site Name</Link>, All Rights Reserved.
            </div>
            <div className="text-center text-white text-sm">
              Developed By <Link className="text-light hover:text-white" target="_blank" to="https://haassaaaannnn.netlify.app/">HASSAN</Link>
            </div>
            <div className="text-right text-white text-sm">
              Template author's <Link className="text-light hover:text-white" to="#">HTMLcodex</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
