import logo from '@/assets/shared/desktop/logo-dark.png';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <NavLink to="/">
        <img
          src={logo}
          alt="Designo-Company-Logo"
          className="px-4 w-48 mb-4 lg:m-0 lg:pt-6 lg:px-0"
        />
      </NavLink>
    </div>
  );
};

export default Logo;
