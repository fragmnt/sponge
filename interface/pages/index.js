import React from 'react';
import {useRouter,} from 'next/router';
import Link from 'next/link';
import './../src/styles/page.css';

import Navbar from '../src/Components/nav';

function HomePage() {

    const router = useRouter();

    return (
    <div id="hpg">
      <Navbar/>
      <div className="hero">
        <h1>Sell your products with the global, integrated payment network</h1>
        <p>A powerful micro e-commerce management software solution for social media users/channels that can embed your store with a
          single short url link. 
        </p>
        <p>Compatible with cryptocurrency ($XRP) or traditional credit cards through PayID. 
        </p>
        <p>
          It's that simple.
        </p>
        <Link href="/register">
          <a className="bbtn">Get Started</a>
        </Link>
        <br/>
       
        </div>
        <a href="https://payid.org">
        <img className="footerImg" src="/pay_id.png"/>
        </a>
    </div>
    )
  };
  
export default HomePage;