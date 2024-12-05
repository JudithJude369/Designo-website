import logo from '@/assets/shared/desktop/logo-dark.png';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          src={logo}
          alt="Designo-Company-Logo"
          className="px-4 w-48 mb-4 lg:m-0 lg:pt-6 lg:px-0"
        />
      </Link>
    </div>
  );
};

export default Logo;
