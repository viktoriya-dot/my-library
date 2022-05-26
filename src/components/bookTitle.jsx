
import React from 'react'
import styles from './bookItem.module.sass'
import PopoverTitle from './popoverTitle'



const BookTitle  = (props) => {

  return (
    <div className={styles.titleWrapper}>
        <p>
          {props.title}
        </p>
        <PopoverTitle />
    </div>
  )
}

export default BookTitle