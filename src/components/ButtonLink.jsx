import { Link } from 'react-router-dom';

const ButtonLink = ({ to, className, children }) => {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

export default ButtonLink;
