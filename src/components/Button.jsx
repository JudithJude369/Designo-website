import { Link } from 'react-router-dom';

const Button = ({ to, children }) => {
  return (
    <Link to={to}>
      <button className=" cursor-pointer font-semibold px-8 py-4 text-black rounded-lg bg-white mt-8 hover:bg-red-300 focus:bg-red-300 hover:text-white transition-all ease-in-out">
        {children}
      </button>
    </Link>
  );
};

export default Button;
