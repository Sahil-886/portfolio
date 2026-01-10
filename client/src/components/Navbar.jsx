import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="glass-nav fixed w-full z-50 top-0 left-0 h-20 flex items-center justify-between px-6 md:px-12"
            style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>

            <Link to="/" className="logo text-2xl font-bold text-gradient flex items-center gap-2" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                <FaCode /> Portfolio
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8" style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '2rem' }}>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link
                            to={link.path}
                            className={`text-lg transition-colors duration-300 ${location.pathname === link.path ? 'text-neon' : 'text-gray-300 hover:text-white'}`}
                            style={{
                                color: location.pathname === link.path ? 'var(--primary-blue)' : 'var(--text-secondary)',
                                fontWeight: location.pathname === link.path ? 'bold' : 'normal',
                                fontSize: '1.1rem'
                            }}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div className="md:hidden text-2xl cursor-pointer text-white" onClick={toggleMenu} style={{ display: window.innerWidth <= 768 ? 'block' : 'none', cursor: 'pointer', fontSize: '1.5rem' }}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-20 left-0 w-full glass-card flex flex-col items-center py-6 gap-6 md:hidden"
                    style={{ position: 'absolute', top: '80px', left: 0, width: '100%', flexDirection: 'column', display: 'flex', padding: '2rem 0', zIndex: 999 }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="text-xl text-white hover:text-neon"
                            style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
