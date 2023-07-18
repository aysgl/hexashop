import React, { useLayoutEffect, useRef } from 'react'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Header() {
    const stickyHeader = useRef()
    useLayoutEffect(() => {
        const mainHeader = document.getElementById('top')
        let fixedTop = stickyHeader.current.offsetTop

        const fixedHeader = () => {
            if (window.pageYOffset > fixedTop) {
                mainHeader.classList.add('background-header')
            } else {
                mainHeader.classList.remove('background-header')
            }
        }
        window.addEventListener('scroll', fixedHeader)
    }, [])

    return (
        <header className="header-area header-sticky" id="top" ref={stickyHeader}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <Link to="/" className="logo">
                                <img src={Logo} />
                            </Link>
                            <ul className="nav">
                                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                                <li className="scroll-to-section"><a href="#men">Men's</a></li>
                                <li className="scroll-to-section"><a href="#women">Women's</a></li>
                                <li className="scroll-to-section"><a href="#kids">Kid's</a></li>
                                <li className="submenu">
                                    <a href="#">Pages</a>
                                    <ul>
                                        <li><Link to="aboutus">About Us</Link></li>
                                        <li><Link to="products">Products</Link></li>
                                        <li><Link to="single-product.html">Single Product</Link></li>
                                        <li><Link to="contact.html">Contact Us</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#">Features</a>
                                    <ul>
                                        <li><a href="#">Features Page 1</a></li>
                                        <li><a href="#">Features Page 2</a></li>
                                        <li><a href="#">Features Page 3</a></li>
                                    </ul>
                                </li>
                                <li className="scroll-to-section"><a href="#explore">Explore</a></li>
                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header