import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../assets/img/logo_lava.jpg';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <Container customClass="navbarContainer">
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="logo" />
                </Link>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <div />
                    <div />
                    <div />
                </div>
                <ul className={`${styles.item} ${isOpen ? styles.active : ''}`}>
                    <li>
                        <Link to="/" onClick={toggleMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutUs" onClick={toggleMenu}>
                            Quem Somos
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery" onClick={toggleMenu}>
                            Galeria
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={toggleMenu}>
                            Contato
                        </Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default NavBar;
