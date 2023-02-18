import React from 'react'
import { Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from 'C:/Users/HP/Desktop/Reactjs/stack-overflow-clone/client/src/assets/search-solid.png'
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <div className="nav-item topnav">
                <Link to='' className="nav-item nav-icon"><div className='nav-adjust'><i className="fa fa-bars"></i></div></Link>
                </div>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type="text" placeholder='Search...'/>
                    <img src={search} alt="search" width="18" className='search-icon'/>
                </form>
                <Link to='/Auth' className='nav-item nav-links'>Log in<div className='deffect1'></div></Link> 
                <div className='deffect2'></div>
                    <Link to='/Auth2' className='nav-item nav-signup'>Sign up</Link>:
            </div>
        </nav>
    )
}

export default Navbar
