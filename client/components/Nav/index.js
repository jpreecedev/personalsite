import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles'

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/recommendations">Recommendations</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
