import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import { socialLinks } from './../../../data/social-links'

function Footer() {
  const footerRouting = [
    ['/home', 'Home'],
    ['/about', 'About Us'],
    ['/projects', 'Projects'],
    ['/services', 'Services'],
    ['/clients', 'Clients'],
    ['/contact', 'Contact Us'],
  ]

  return (
    <footer>
      <div className={styles['footer-content']}>
        <ul className={`${styles.links} `}>
          {footerRouting.map(([route, footerLink], i) => (
            <li key={i}>
              <Link to={route}>{footerLink}</Link>
            </li>
          ))}
        </ul>

        <ul className={styles['social-links']}>
          {socialLinks.map(([link, calssName], i) => (
            <li key={i}>
              <Link to={link} target="_blank">
                <i className={calssName}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
