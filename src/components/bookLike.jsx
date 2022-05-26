import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React, {useState, useEffect} from 'react'
import styles from './bookItem.module.sass'

const BookLike = () => {
  const [count, setCount] = useState(0);

  useEffect (() => {
    document.h1 = `you choose ${count} times`
  })
  return (
    <div>
        <FavoriteBorderOutlinedIcon onClick ={() => setCount(count + 1)}
          className={styles.like}
        />
        <span>{count}</span>
    </div>
  )
}

export default BookLike