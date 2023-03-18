import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
    <nav className='header'>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className='logo'/>
          </Link>
        </div>
        <ul className='menu'>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  );
}
