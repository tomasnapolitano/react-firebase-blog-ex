import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = ({isAuth, handleSignOut}) => {
  return (
    <div className={styles.navbarMainContainer} >
      <div className={styles.navbarLinkContainer}>
        <div className={styles.navbarLink}><Link to="/" style={{textDecoration:'none', color:'#f0f8ff'}}>Home</Link></div>
        {!isAuth ? 
        <div className={styles.navbarLink}><Link to="/login" style={{textDecoration:'none', color:'#f0f8ff'}}>Login</Link></div>
        : 
        <div className={styles.navbarLink}><button onClick={handleSignOut}>Sign Out</button></div>
        }
        <div className={styles.navbarLink}><Link to="/createPost" style={{textDecoration:'none', color:'#f0f8ff'}}>Create Post</Link></div>
      </div>
    </div>
  )
}

export default Navbar