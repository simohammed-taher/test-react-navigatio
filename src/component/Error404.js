import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Error404 = () => {
  return (
    <div>
      <h1>Page Not Found 404 Error</h1>
      <Link to={"/"}><Button>Go to home</Button></Link>
    </div>
  )
}

export default Error404
