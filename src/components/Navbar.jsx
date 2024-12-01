import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="lg:flex justify-between px-6 py-8 lg:px-16">
      <Logo />
      <ul className="lg:flex items-center lg:space-x-14">
        <li>
          <NavLink to="about">Our Company</NavLink>
        </li>
        <li>
          <NavLink to="locations">Locations</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
