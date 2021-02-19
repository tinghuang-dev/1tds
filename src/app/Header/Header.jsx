import React from 'react';
import Link from 'next/link';

const Header = () => (
  <ul>
    <li>
      <Link href="/">
        <a>主页</a>
      </Link>
    </li>
    <li>
      <Link href="/become-a-captain">
        <a>成为团长</a>
      </Link>
    </li>
    <li>
      <Link href="/faq">
        <a>FAQ</a>
      </Link>
    </li>
    <li>
      <Link href="/map">
        <a>Map</a>
      </Link>
    </li>
    <li>
      <Link href="/products/95908813">
        <a>Product</a>
      </Link>
    </li>
    <li>
      <Link href="/user/profile">
        <a>User Profile</a>
      </Link>
    </li>
  </ul>
);

export default Header;
