import React from 'react';

const Button = ({ children }) => {
  return (
    <div>
      <button className=" font-medium px-8 py-4 text-black rounded-lg bg-white mt-8">
        {children}
      </button>
    </div>
  );
};

export default Button;
