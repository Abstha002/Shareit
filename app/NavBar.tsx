import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (

    <div className="navbar bg-black ">
  <div className="flex-1">
    <Link className="btn btn-ghost text-xl" href='/'>daisyUI</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li><Link href="/contact/new">Post</Link></li>
    </ul>
  </div>
</div>
  )
}

export default NavBar