import React from 'react';
import {useRouter,} from 'next/router';
import Link from 'next/link';

function HomePage() {

    const router = useRouter();

    return (
    <>
    <ul>
      <li>
        <p>Sponge.id</p>
      </li>
            <li><Link href="/about">
          <a>Features</a>
        </Link></li>
        <li><Link href="/login">
          <a>Login</a>
        </Link></li>
        <li><Link href="/register">
          <a>Get Started</a>
        </Link></li>
        </ul>
      <div>
        <h1>Sell your products with the global, integrated payment network</h1>
        <p>A powerful micro e-commerce management software solution for social media users/channels that can embed your store with a
          single short url link. Compatible with cryptocurrency ($XRP) or traditional credit cards. It's that simple.
        </p>
        <Link href="/register">
          <a>Get Started</a>
        </Link>
        <br/>
       
        </div>
    </>
    )
  };
  
export default HomePage;