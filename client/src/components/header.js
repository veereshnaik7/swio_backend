
import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <div id='nav'>
      <ul>
        <li>
          <Link to="/" className='nav-item'> payments</Link>
          <Link to="/transaction" className='nav-item'> transactions</Link>
        </li>
      </ul>

    </div>
  )
}

export default header