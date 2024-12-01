import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="lg:flex justify-between px-6 py-8 lg:px-16 lg:text-2xl font-medium text-gray-600 ">
      <Logo />
      <ul className="lg:flex items-center lg:space-x-14">
        <li className="hover:underline transition-all ease-in-out">
          <NavLink to="/about">Our Company</NavLink>
        </li>
        <li className="hover:underline transition-all ease-in-out">
          <NavLink to="/locations">Locations</NavLink>
        </li>
        <li className="hover:underline transition-all ease-in-out">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
