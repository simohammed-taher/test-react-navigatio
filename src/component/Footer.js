import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
      <Link to={"/"}><Button>Go to home</Button></Link>
    </div>
  )
}

export default Footer
