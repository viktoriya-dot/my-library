import React from 'react'
import styles from './bookItem.module.sass'
import BookCard from './bookCard'


const BookItem = (props) => {
  return (
    <section className={styles.bookSection}>
        <h1>Мои  книги </h1>
        <div className={styles.wrapper}>
           {props.data.map ((bItem) => {
              return <BookCard  image={bItem.image}
                        title={bItem.title}
                        author={bItem.author}
                        pages={bItem.pages}
                        days={bItem.days}
           />
           })};
          </div>
    </section>
  )
}

export default BookItem