import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mr-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="white" 
          className="w-5 h-5"
        >
          <path 
            d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18l-4.5 4.5L6 18.48 9.52 22 9 18z" 
          />
        </svg>
      </div>
      <span className="font-bold text-xl text-white">Reflect</span>
    </div>
  );
};

export default Logo; 