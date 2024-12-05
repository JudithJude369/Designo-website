import { NavLink } from 'react-router-dom';
import Logo from '@/components/Logo';
import hamburger from '@/assets/shared/mobile/icon-hamburger.svg';
// import closeBtn from '@/assets/shared/mobile/icon-close.svg';

const Navbar = () => {
  return (
    <div className="relative">
      <nav className=" text-2xl lg:flex justify-between px-0 py-8 lg:px-16 lg:text-3xl font-medium  w-full lg:text-center ">
        <Logo />

        <ul className="px-6 py-8 mt-10 z-20 bg-black text-white space-y-4 lg:flex lg:space-x-14 lg:items-centre lg:mt-0 lg:z-0 lg:text-gray-600 lg:bg-gray-50 lg:p-0">
          <li className="lg:hover:underline transition-all ease-in-out   lg:pt-4">
            <NavLink to="/about">Our Company</NavLink>
          </li>
          <li className="lg:hover:underline transition-all ease-in-out">
            <NavLink to="/locations">Locations</NavLink>
          </li>
          <li className="lg:hover:underline transition-all ease-in-out">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <img
        src={hamburger}
        alt="hamburger-menu"
        className="lg:hidden absolute hamburger"
      />

      {/* <img
        src={closeBtn}
        alt="close-btn"
        className="lg:hidden absolute hamburger"
      /> */}
    </div>
  );
};

export default Navbar;
