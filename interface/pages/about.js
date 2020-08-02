import React from 'react';
import {useRouter,} from 'next/router';
import Link from 'next/link';
import './../src/styles/page.css';

import Navbar from '../src/Components/nav';

function AboutPage() {

    const router = useRouter();

    return (
    <div id="hpg">
      <Navbar/>
      <div className="hero">
        <h1>About Sponge</h1>
        <p>
          Sponge is an open-source mobile ecommerce service for social media, layered on top of PayID.
          Simple, mobile and modular e-commerce shop pages for social media that are shareable with a single link.
        </p>
        <p>
        In the same way that the seamless integration of eBay and PayPal revolutionized Web 2.0 or how WordPress and WooCommerce allowed everyone to create a blog + shop, Sponge will act as the catalyst of change in bridging the old, Web 2.0, with the new, Web 3.0.
</p>
<p>
It will enable global commerce through PayID and introduce social media users to blockchain-based payments in a world that is still reliant on traditional banking, Zelle, Shopify and Cash App.
</p>

      <Link href="/register">
          <a className="bbtn">Sign up now</a>
        </Link>
       
        </div>
        <a href="https://payid.org">
        <img className="footerImg" src="/pay_id.png"/>
        </a>
    </div>
    )
  };
  
export default AboutPage;