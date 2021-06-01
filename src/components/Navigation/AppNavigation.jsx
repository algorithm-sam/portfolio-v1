import React, { useEffect, useState } from 'react'
import styles from './AppNavigation.module.scss';
import logo from '../../images/logo.svg';
import mail from '../../images/mail.svg';
import twitter from '../../images/twitter.svg';
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';
import menu from '../../images/menu.svg';
export default function AppNavigation() {

    const [menuOpened, setMenuOpened] = useState(false);

    const closeMenu = (evt) => {
        // if(evt.target.el)
        // check if the click was within the navigation container
        // if it was, then ignore the click
        setMenuOpened(false);
    }
    const toggleMobileNavigation = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        setMenuOpened(!menuOpened);
    }
    const handleWindowResize = () => {
        if (window.innerWidth > 600) {
            setMenuOpened(false)
        }
    }

    useEffect(() => {
        // handleWindowResize();

        window.addEventListener('click', closeMenu);
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('click', closeMenu)
            window.removeEventListener('resize', handleWindowResize)
        };
    }, []);
    return (
        <>
            <div className={styles.navWrapper}>
                <img src={logo} alt="App Logo" className={styles.logo} />
                <nav className={menuOpened ? styles.activeMobileMenu : styles.appNavigation}>
                    <ul className={styles.menuDesktop}>
                        <li><a href="#"> <img src={mail} alt="Mail Icon" /> </a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                        <li><a href="#"><img src={twitter} alt="twitter Icon" /></a></li>
                        <li><a href="#"><img src={github} alt="github Icon" /></a></li>
                    </ul>

                    <ul className={styles.menuDesktop}>
                        <li><a href="//#endregion">Work</a></li>
                        <li><a href="//#endregion">Services</a></li>
                        <li><a href="//#endregion">Resume</a></li>
                        <li><a href="//#endregion">Contact</a></li>
                    </ul>

                </nav>
                <a href="#" className={styles.hamburger} onClick={toggleMobileNavigation}>
                    <img src={menu} alt="harmburger" />
                </a>
            </div>
        </>
    )
}
