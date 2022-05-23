import React from 'react'
import BookAuthor from './bookAuthor'
import BookImage from './bookImage'
import BookLike from './bookLike'
import BookPages from './bookPages'
import BookReadTime from './bookReadTime'
import BookReview from './bookReview'
import BookRating from './bookRating'
import BookTitle from './bookTitle'
import styles from './bookItem.module.sass'


const BookItem = (props) => {
  return (
    <section className={styles.bookSection}>
        <h1>Мои  книги </h1>
        <div className={styles.wrapper}>
           {props.data.map (bItem =>
              <div className={styles.bookItemBlock} key = {bItem.id}> <BookImage image = {bItem.image}/>
              <BookTitle  title={bItem.title} />
              <BookAuthor author={bItem.author} />
              <BookPages pages={bItem.pages} />
              <BookReadTime days={bItem.days} />
              <BookRating  />
              <BookReview  />
              <BookLike />
              </div>)}
          </div>


    </section>
  )
}

export default BookItem