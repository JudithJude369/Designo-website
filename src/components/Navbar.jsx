import { NavLink } from 'react-router-dom';
import Logo from '@/components/Logo';
import hamburger from '@/assets/shared/mobile/icon-hamburger.svg';
import closeBtn from '@/assets/shared/mobile/icon-close.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '@/features/hamburger/hamburgerSlice';

const Navbar = () => {
  const isOpen = useSelector((state) => state.toggle.isOpen);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <header className="relative">
      <nav className=" text-2xl lg:flex justify-between px-0 py-8 lg:px-16 lg:text-xl font-medium w-full lg:text-center uppercase">
        <Logo />
        {/* desktop navigation */}
        <ul className=" self-center lg:flex lg:gap-6 lg:mt-0  lg:text-gray-600 lg:bg-white lg:p-0 hidden">
          <li className="lg:hover:underline transition-all ease-in-out   text-center">
            <NavLink to="/about">Our Company</NavLink>
          </li>
          <li className="lg:hover:underline transition-all ease-in-out">
            <NavLink to="/locations">Locations</NavLink>
          </li>
          <li className="lg:hover:underline transition-all ease-in-out">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        {isOpen && (
          <ul
            // mobile navigation
            className="px-12 py-10 mt-10
           bg-black text-white  flex flex-col gap-4 absolute  z-10 lg:hidden navBar text-2xl uppercase"
          >
            <li className=" transition-all ease-in-out">
              <NavLink
                to="/about"
                className=" hover:bg-gray-300/50 focus:bg-gray-300/50"
              >
                Our Company
              </NavLink>
            </li>
            <li className=" transition-all ease-in-out">
              <NavLink
                to="/locations"
                className=" hover:bg-gray-300/50 focus:bg-gray-300/50"
              >
                Locations
              </NavLink>
            </li>
            <li className=" transition-all ease-in-out">
              <NavLink
                to="/contact"
                className=" hover:bg-gray-300/50 focus:bg-gray-300/50"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
      {isOpen ? (
        <img
          onClick={toggleHandler}
          src={closeBtn}
          alt="close-btn"
          className="lg:hidden absolute closeBtn"
        />
      ) : (
        <img
          onClick={toggleHandler}
          src={hamburger}
          alt="hamburger-menu"
          className="lg:hidden absolute hamburger"
        />
      )}
    </header>
  );
};

export default Navbar;
