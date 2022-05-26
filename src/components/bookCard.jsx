import React, {useState} from 'react'
import BookAuthor from './bookAuthor'
import BookImage from './bookImage'
import BookLike from './bookLike'
import BookPages from './bookPages'
import BookReadTime from './bookReadTime'
import BookReview from './bookReview'
import BookRating from './bookRating'
import BookTitle from './bookTitle'
import styles from './bookItem.module.sass'



const BookCard = (props) => {
    let [readed, setReaded] = useState(false)
  return (
    <div  className={styles.bookItem} key={props.id}>
        <div className={readed?styles.bookImageActive:styles.bookImageBlock}>
          <BookImage  image = {props.image}/>
        </div>
            <BookTitle  title={props.title} />
            <BookAuthor author={props.author} />
            <BookPages pages={props.pages} />
            <BookReadTime days={props.days} />
            <BookRating readed={readed}/>
            <BookReview readed={readed} changeStatusRead={setReaded} />
            <BookLike />

    </div>
  )}

export default BookCard