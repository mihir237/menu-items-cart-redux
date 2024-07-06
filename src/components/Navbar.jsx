import React from "react";

const Navbar = () => {
  return (
    <div className="flex sticky top-0 justify-between  py-3 mb-4 bg-white">
      <div>LOGo</div>
      <div className="flex gap-4">
        <div>Address</div>
        <div>Cart</div>
        <div>Login</div>
      </div>
    </div>
  );
};

export default Navbar;
