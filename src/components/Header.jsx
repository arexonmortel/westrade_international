import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import logo from '../assets/westrade_logo_no_bg.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slideAnimation = useSpring({
    width: isMenuOpen ? '40%' : '0%',
    opacity: isMenuOpen ? 1 : 0,
    config: { tension: 220, friction: 20 },
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <header className={`sticky z-50 bg-gradient-to-r from-white via-lightBlue to-royalBlue top-0 text-darkBlue font-semibold min-h-14  p-5 md:py-2  `}>
      <div className="container mx-auto md:px-4 md:py-2 flex items-center mr-auto">
          {/* Company Logo and Name */}
          <NavLink to= '/'>
          <div className="flex items-center justify-center" onClick={scrollTop}>
          <img src={logo} alt="Westrade Logo" className="h-10 w-10 mr-2" />
          <p className="text-sm md:text-xl font-bold text-royalBlue">Westrade International Co., Inc.</p>
        </div>
          </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex ml-auto h-fit">
          <nav className="flex space-x-8 text-xl">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `max-w-fit relative hover:no-underline hover:text-white before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-white before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 ${
                  isActive ? 'underline underline-offset-4 ' : ''
                }`
              }
            >
              About
            </NavLink>
            <a  
                onClick = {scrollTop}
                href="https://www.facebook.com/photo/?fbid=252139054908127&set=a.252139011574798"  // WESTRADE FB page link
                target="_blank"  // Opens the link in a new tab
                rel="noopener noreferrer"  // Security feature for external links
              className="max-w-fit relative hover:no-underline hover:text-white before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-white before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 "
            >
              Products
            </a>
            <a
                href="https://www.facebook.com/WestradeInternationalCoInc/photos_albums"  // WESTRADE FB page link
                target="_blank"  // Opens the link in a new tab
                rel="noopener noreferrer"  // Security feature for external links
              className="max-w-fit relative hover:no-underline hover:text-white before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-white before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 "
            >
              Seminar & Events
            </a>
            <NavLink
              onClick={scrollTop}
              to="/contact"
              className={({ isActive }) =>
                `max-w-fit relative hover:no-underline hover:text-white before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-white before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 ${
                  isActive ? 'underline underline-offset-4' : ''
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden z-50 ml-auto text-darkBlue`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="w-7 h-7 transition-transform duration-300 ease-in-out transform rotate-180 text-white font-bold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 transition-transform duration-300 ease-in-out text-white font-bold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <animated.nav
          style={slideAnimation}
          className="md:hidden bg-royalBlue px-4 py-2 h-full fixed right-0 top-0 z-40 pt-8"
        >
          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `block py-2 text-white hover:text-white ${isActive ? 'underline' : ''}`
            }
          >
            About 
          </NavLink>
          <a
            href="https://www.facebook.com/photo/?fbid=252139054908127&set=a.252139011574798"
            target='_blank'
            rel="noopener noreferrer" 
            onClick={() => setIsMenuOpen(false)}
            className='block py-2 text-white hover:text-white '
          >
            Products
          </a>
          <a
            href='https://www.facebook.com/WestradeInternationalCoInc/photos_albums'
            target='_blank'
            
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-white hover:text-white "
          >
            Seminars & Events
          </a>
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `block py-2 text-white hover:text-white ${isActive ? 'underline' : ''}`
            }
          >
            Contact Us
          </NavLink>
        </animated.nav>
      )}
    </header>
  );
}

export default Header;
