import React from 'react'
import classnames from 'classnames'

import FunText from '../FunText'
import data from './recommendations'
import styles from './styles'

const Recommendations = () => {
  return (
    <div>
      <h1>
        <FunText>Recommendations</FunText>
      </h1>
      <div className={styles.container}>
        {data.map((rec, index) => {
          return (
            <div
              className={classnames(styles.item, styles[`color${index % 4}`])}
              key={rec.name}
            >
              <img className={styles.picture} src={`images/${rec.image}`} />
              <h2 className={styles.title}>{rec.name}</h2>
              <p>{rec.position}</p>
              <p>
                {rec.message.map((m, index) => (
                  <span className={styles.message} key={index}>
                    {m}
                    <br />
                    <br />
                  </span>
                ))}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Recommendations
