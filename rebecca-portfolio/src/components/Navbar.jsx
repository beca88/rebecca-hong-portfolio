import { useState } from 'react'
import { Link } from 'react-router-dom'



const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
]

function Navbar() {
    const [open, setOpen] = useState(false)

    return (

        <nav className="navbar navbar-expand-md sticky-top shadow-sm">
            <div className="container">

                <Link to="/" className="navbar-brand brand-logo">REBECCA HONG</Link>

                <button className="navbar-toggler" type="button" onClick={() => setOpen(!open)}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto">

                        {navLinks.map((link) => (
                            <li className="nav-item" key={link.path}>
                                <Link to={link.path} className="nav-link">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar