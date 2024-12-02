import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10 text-center">
      <h1 className="font-medium">404 | Page Not Found</h1>
      <br />
      <button
        onClick={() => navigate('/')}
        className="bg-sky-500 p-2 rounded-md border-0 "
      >
        Go to homepage
      </button>
    </div>
  );
};

export default PageNotFound;
