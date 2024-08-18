import React from 'react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Mi Tienda</h1>
      <button onClick={onCartClick} className="relative">
        🛒
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-sm">
          {cartCount}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
