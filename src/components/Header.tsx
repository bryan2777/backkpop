import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

const Header: React.FC = () => {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white py-2 px-4 shadow-lg">
      <div className="container mx-auto text-center">
        <span className="text-sm font-medium">
          A OFERTA EXPIRA EM: {hours}:{minutes}:{seconds}
        </span>
      </div>
    </div>
  );
};

export default Header;