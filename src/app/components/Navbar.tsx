'use client'
import Link from 'next/link'
import Image from 'next/image'
import BSALogo from '../images/hero/BSALogo'

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 shadow-lg fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/manifesto">Manifesto</Link></li>
            <li><Link href="/speakers">Speakers</Link></li>
            <li><Link href="/sponsors">Sponsors</Link></li>
            <li><Link href="/side-events">Side Events</Link></li>
            <li><Link href="/grants">Grants</Link></li>
            <li><Link href="/agenda">Agenda</Link></li>
            <li><Link href="/workshops">Workshops</Link></li>
            <li><Link href="/tickets">Tickets</Link></li>
          </ul>
        </div>
            <Link href="/">
              <BSALogo  classname="w-full btn btn-ghost normal-case" />
            </Link>
        </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/manifesto">Manifesto</Link></li>
          <li><Link href="/speakers">Speakers</Link></li>
          <li><Link href="/sponsors">Sponsors</Link></li>
          <li><Link href="/side-events">Side Events</Link></li>
          <li><Link href="/grants">Grants</Link></li>
          <li><Link href="/agenda">Agenda</Link></li>
          <li><Link href="/workshops">Workshops</Link></li>
          
        </ul>
      </div>
      
      <div className="navbar-end">
        {/* You might want to add a language selector or login button here */}
        <Link href="/tickets" className="btn ">Tickets</Link>
      </div>
    </div>
  )
}

export default Navbar
