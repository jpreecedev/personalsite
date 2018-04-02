import React from 'react'
import classnames from 'classnames'

import styles from './styles'

const FunText = ({ children }) => {
  return children.split('').map((item, index) => {
    if (item === ' ') {
      return <br key={index} />
    }

    const classes = classnames(styles[`color${index % 4}`], 'hvr-grow-rotate', 'pointer')

    return (
      <span className={classes} key={index}>
        {item}
      </span>
    )
  })
}

export default FunText
