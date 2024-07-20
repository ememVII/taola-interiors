import styles from './Navbar.module.css'
import {
  Logo,
  LogoMobile,
  UpRightArrowDark,
  closeMenu,
} from '../../../utils/imgs'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Navbar() {
  const location = useLocation()
  const [navToggler, setNavToggler] = useState(false)

  const handleNavToggler = () => {
    setNavToggler(isOpen => !isOpen)
  }

  useEffect(() => {
    if (navToggler) {
      document.body.classList.add('disable-scroll')
    } else {
      document.body.classList.remove('disable-scroll')
    }
  }, [navToggler])

  const navRouting = [
    ['/home', 'Home'],
    ['/about', 'About Us'],
    ['/projects', 'Projects'],
    ['/services', 'Services'],
    ['/clients', 'Clients'],
    ['/contact', 'Contact Us'],
  ]

  return (
    <nav>
      <div className={styles.logo}>
        <Link to="/home">
          <img src={Logo} alt="taola logo" className={styles['logo-desktop']} />
          <img
            src={LogoMobile}
            alt="taola logo"
            className={styles['logo-mobile']}
          />
        </Link>
      </div>
        <p onClick={handleNavToggler} className='pt-4'>Menu</p>
      {navToggler && (
        <div className={styles.navMenu}>
          <img src={closeMenu} alt="close menu" onClick={handleNavToggler} />
          <div>
            <ul className={`${styles.navMenuLinks} `}>
              {navRouting.map(([route, navLink], i) => (
                <Link key={i} to={route} onClick={handleNavToggler}>
                  <li>
                    {navLink}
                    <img src={UpRightArrowDark} alt="" />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}

      <ul className={`${styles.links} `}>
        {navRouting.map(([route, navLink], i) => (
          <li
            key={i}
            className={location.pathname === route ? styles.active : ''}
          >
            <Link to={route}>{navLink}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
