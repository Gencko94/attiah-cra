import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { DataProvider } from '../../contexts/DataContext';
export default function NavIcons({ color = 'nav-primary' }) {
  const { cartItems } = React.useContext(DataProvider);
  return (
    <div className={`flex   text-${color}`}>
      <Link to="/cart" className="p-1 flex   relative">
        <HiOutlineShoppingBag className="w-30p h-30p" />
        <span className="h-4 w-4 text-nav-secondary font-bold rounded-full absolute top-0 right-0 text-xs grid place-items-center bg-nav-primary">
          {cartItems.length}
        </span>
      </Link>

      <button className="p-1 flex ">
        <AiOutlineHeart className="w-30p h-30p" />
      </button>
    </div>
  );
}