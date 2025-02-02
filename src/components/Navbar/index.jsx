import './styles.css';
import { Link } from 'react-router'
import { useState } from 'react'; 

const Navbar = () => {
  // State for toggling the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon when the menu is closed */}
                {!isMobileMenuOpen ? (
                  <svg
                    className="block size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  // Close icon when the menu is open
                  <svg
                    className="block size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link style={{color:'white',textDecoration:'none'}}
                    to="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700
                     hover:text-white focus:bg-blue-800"
                    aria-current="page"
                  >
                   Home
                  </Link>
                  <Link style={{color:'white',textDecoration:'none'}}
                    to="/aboutus"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-blue-800"
                  >
                   About
                  </Link>
                  <Link
                    to="/services"
                    style={{color:'white',textDecoration:'none'}}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-blue-800"
                  >
                    Services
                  </Link>
                  <Link
                    to="/price"
                    style={{color:'white',textDecoration:'none'}}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-blue-800"
                  >
                    Price 
                  </Link>
                  <Link
                    to="/team"
                    style={{color:'white',textDecoration:'none'}}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-blue-800"
                  >
                    Team 
                  </Link>
                  <Link
                    to="/contactus"
                    style={{color:'white',textDecoration:'none'}}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-blue-800"
                  >
                    Contact 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on mobile menu state */}
        {isMobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Link
                to="/"
                style={{color:'white',textDecoration:'none'}}
                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-blue-500"
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                style={{color:'white',textDecoration:'none'}}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-blue-500"
              >
                About
              </Link>
              <Link
                to="/services"
                style={{color:'white',textDecoration:'none'}}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-blue-500"
              >
                Services
              </Link>
              <Link
                to="/price"
                style={{color:'white',textDecoration:'none'}}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-blue-500"
              >
                Price
              </Link>
              <Link
                to="/team"
                style={{color:'white',textDecoration:'none'}}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-blue-500 "
              >
                Team
              </Link>
              <Link
                to="/contactus"
                style={{color:'white',textDecoration:'none'}}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-blue-500"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
