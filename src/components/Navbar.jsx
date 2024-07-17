import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex sticky top-0 justify-between  py-3 mb-4 bg-white z-20">
      <div>LOGo</div>
      <div className="flex gap-4">
        <div>Address</div>
        <Link to="/cart">
          <div>Cart</div>
        </Link>
        <div>Login</div>
      </div>
    </div>
  );
};

export default Navbar;
