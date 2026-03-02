import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar glass-card">
      <div className="logo">Mera<span>Tiffin</span></div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/about">About</a>
        <button className="btn btn-primary btn-sm">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
