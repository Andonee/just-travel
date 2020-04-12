import React, { useState } from "react"
import styles from "./navbar.module.css"
import { FaBars } from "react-icons/fa"
import links from "../../../constants/links"
import socialIcons from "../../../constants/social-media-links"
import logo from "../../../images/logo.svg"
import { Link } from "gatsby"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen)
  }
  console.log(isOpen)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="website logo" />
          <button className={styles.logoBtn} onClick={toggleMenu}>
            <FaBars className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
