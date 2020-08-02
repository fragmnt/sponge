import React from 'react';
import {useRouter,} from 'next/router';
import Link from 'next/link';

function HomePage() {

    const router = useRouter();

    return (
    <>
      <div>Welcome to Sponge.id Web App!</div>
        <Link href="/register">
          <a>Register</a>
        </Link>
        <br/>
        <Link href="/login">
          <a>Login</a>
        </Link>
    </>
    )
  };
  
export default HomePage;