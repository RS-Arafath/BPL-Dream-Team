import React from 'react';
import dollerImg from "../../assets/Currency.png"
import logo from '../../assets/logo.png'
import Radio from './radio';
const Navbar = ({coin}) => {
  return (
    <div className="mt-5">
      <div className="navbar min-h-0 py-2 bg-base-100 shadow-sm container mx-auto">
        {/* Left - Logo */}
        <div className="flex-1 flex items-center">
          <a>
            <img src={logo} alt="" className="h-8 w-auto" />
          </a>
        </div>

        {/* Center - Radio Tabs */}
        <div className=" hidden flex-none sm:flex items-center justify-center">
          <Radio/>
        </div>

        {/* Right - Coin Button */}
        <div className="flex-1 flex items-center justify-end">
          <button className="btn btn-sm text-sm flex items-center gap-1.5 font-bold">
            {coin}
            <img src={dollerImg} alt="currency" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;