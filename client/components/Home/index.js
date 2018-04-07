import React from 'react'

import FunText from '../FunText'
import styles from './styles'

const Home = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <FunText>Jon Preece</FunText>
      </h1>
      <p className={styles.subtitle}>Full stack website development specialist.</p>
      <p>
        Sorry, I'm not currently seeking work, but I will be soon.<br />Contact me on{' '}
        <a href="mailto:jon@jpreecedev.com">jon@jpreecedev.com</a> for assistance!
      </p>
    </div>
  )
}

export default Home
