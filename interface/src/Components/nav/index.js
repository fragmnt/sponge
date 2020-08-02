import React from 'react';
import '../../styles/page.css';
import Link from 'next/link';

const Navbar = () => {

    return (
        <div id="navbar">
         <ul>
      <li className="logos">
        <Link href="/">
          <h2>Sponge</h2>
        </Link>
      </li>
            <li className="spec"><Link href="/about">
          <a>Features</a>
        </Link></li>
        <li className="spec"><Link href="/login">
          <a>Login</a>
        </Link></li>
        <li className="spec spbtn"><Link href="/register">
          <a>Get Started</a>
        </Link></li>
        </ul>
        </div>
    )
};

export default Navbar;