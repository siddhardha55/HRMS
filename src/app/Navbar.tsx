"use client"
// src/components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import avatar from '../../public/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">

                <a className="navbar-brand">HR Forge</a>

            </div>
            <div className="navbar-center">
                <Link href="/" className="nav-item">
                    <p>Home</p>
                </Link>
                <Link href="/inbox" className="nav-item">
                    <p>Inbox</p>
                </Link>
                <Link href="/updates" className="nav-item">
                    <p>Updates</p>
                </Link>
                <Link href="/about" className="nav-item">
                    <p>About</p>
                </Link>
            </div>
            <div className="navbar-right">
                <div className="search-box">
                    <input type="text" placeholder="Search" className="search-input" />
                </div>
                <div className="dropdown">

                    <div className="avatar" tabIndex={0} role="button">
                        <Image alt="Avatar" src={avatar} className="avatar-img" width={40} height={40} />
                    </div>
                    <ul className="dropdown-menu" tabIndex={0}>
                        <li><Link href="/my-account" className="dropdown-item">
                            <FontAwesomeIcon icon={faUser} className="icon" />
                            My Account
                        </Link></li>
                        <li><Link href="/settings" className="dropdown-item">
                            <FontAwesomeIcon icon={faCog} className="icon" />
                            Setting
                        </Link></li>
                        <li><Link href="/logout" className="dropdown-item">
                            <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                            Logout
                        </Link></li>
                        {/* <li><a className="dropdown-item">Profile</a></li>
                        <li><a className="dropdown-item">Settings</a></li>
                        <li><a className="dropdown-item">Logout</a></li> */}
                    </ul>
                </div>
            </div>
        </nav>
        // <nav className="navbar bg-base-100">
        //     <div className="navbar-left">
        //         <a className="navbar-brand">MTS</a>
        //     </div>
        //     <div className="flex-none">
        //         <div className="dropdown dropdown-end">
        //             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        //                 <div className="indicator">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        //                     <span className="badge badge-sm indicator-item">8</span>
        //                 </div>
        //             </div>
        //             <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        //                 <div className="card-body">
        //                     <span className="font-bold text-lg">8 Items</span>
        //                     <span className="text-info">Subtotal: $999</span>
        //                     <div className="card-actions">
        //                         <button className="btn btn-primary btn-block">View cart</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="dropdown dropdown-end">
        //             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        //                 <div className="w-10 rounded-full">
        //                     <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        //                 </div>
        //             </div>
        //             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                 <li>
        //                     <a className="justify-between">
        //                         Profile
        //                         <span className="badge">New</span>
        //                     </a>
        //                 </li>
        //                 <li><a>Settings</a></li>
        //                 <li><a>Logout</a></li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    );
};

export default Navbar;
