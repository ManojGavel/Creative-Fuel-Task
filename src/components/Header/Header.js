import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import classes from './header.module.css';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <nav className={classes.nav}>
            <div className={classes.navCh}>
                <Link to="/" className={`${classes.logo} text-decoration-none`}>
                <h1>
                    <span className='bg-warning rounded-3 text-dark fw-bold py-2 px-1 cousor- fs-4'>Test App</span>
                </h1>
                </Link>
                <div className={classes.navMenu}>
                    <ul className={classes.navUl}>
                        <li>
                            <NavLink className={({isActive})=>isActive?classes.active:undefined} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/dataTable` } className={({isActive})=>isActive?classes.active:undefined}>Data Table</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/testType` } className={({isActive})=>isActive?classes.active:undefined}>Test Type</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={classes.account}>
                    <AccountCircleIcon 
                       sx={{fontSize: { xs: 20, sm: 30, md: 25, lg: 40 } }}
                    />
                </div>
            </div>
        </nav>
    </header>
  )
}
