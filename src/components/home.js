
import React from "react"
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/messages"></Link>
    </div>
  )
}

export default Index
