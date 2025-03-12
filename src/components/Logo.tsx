import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center">
        <div className="w-10 h-10 relative mr-2 bg-gradient-to-r from-eco-green to-tech-blue rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">G</span>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-eco-dark rounded-full"></div>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-eco-dark to-eco-green bg-clip-text text-transparent">
          GreenFinOps
        </span>
      </div>
    </Link>
  );
};

export default Logo;