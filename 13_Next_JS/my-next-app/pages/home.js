import React from "react";

import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Index</Link>
      </li>
      <li>
        <Link href="/my/account">My Account</Link>
      </li>
      <li>
        <Link href="/my/info">My Info</Link>
      </li>
    </ul>
  )
}

export default Home