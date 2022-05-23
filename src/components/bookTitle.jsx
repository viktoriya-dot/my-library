import { MoreVert } from '@mui/icons-material'
import React from 'react'
import styles from './bookItem.module.sass'


const BookTitle  = (props) => {
  return (
    <div className={styles.titleWrapper}>
        <p className={styles.twoLine}>
          {props.title}
        </p>
        <MoreVert  style={{color:'#474747'}}/>
    </div>
  )
}

export default BookTitle