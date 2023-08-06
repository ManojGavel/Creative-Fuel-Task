import React from 'react'
import { Link } from 'react-router-dom'
import classes from './errorElement.module.css'

export default function ErrorElement() {
  return (
    <div className={classes.errorElement}>
      <h1>Sorry Page not found ☹️</h1>
      <p>Click here to go to <span><Link to="/">Home</Link></span> Page</p>
    </div>
  )
}
