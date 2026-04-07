import React from 'react';
import dollerImg from "../../assets/Currency.png"
const Navbar = ({coin}) => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="  btn text-xl flex justify-between items-center gap-2 font-bold">
          {coin}
          <img src={dollerImg} alt="currency" />
          
        </button>
      </div>
    </div>
  );
};

export default Navbar;