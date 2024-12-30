import React from 'react';
import '../assets/style/Navbar.scss'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar_logo'>LOGO</div>
      <ul className='navbar_ul'>
        <li><a href="/">Strona główna</a></li>
        <li><a href="/">O nas</a></li>
        <li><a href="/">Kontakt</a></li>
        <li><a className='login' href="/">Logowanie</a></li>
        <button className='btn'>bnt</button>
      </ul>
    </nav>
  );
}

export default Navbar;