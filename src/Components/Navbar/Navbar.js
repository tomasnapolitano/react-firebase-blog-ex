import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { authContext } from '../../App';

const Navbar = ({handleSignOut}) => {

  const { isAuth } = useContext(authContext);

  return (
    <div className={styles.navbarMainContainer} >
      <div className={styles.navbarLinkContainer}>
        <div className={styles.navbarLink}><Link to="/" style={{textDecoration:'none', color:'#f0f8ff'}}>Home</Link></div>
        <div className={styles.navbarLink}><Link to="/createPost" style={{textDecoration:'none', color:'#f0f8ff'}}>Create Post</Link></div>
        {!isAuth ? 
        <div className={styles.navbarLink}><Link to="/login" style={{textDecoration:'none', color:'#f0f8ff'}}>Login</Link></div>
        : 
        <div className={styles.navbarLink}><Link onClick={handleSignOut} style={{textDecoration:'none', color:'#f0f8ff'}}>Sign Out</Link></div>
        }
      </div>
    </div>
  )
}

export default Navbar