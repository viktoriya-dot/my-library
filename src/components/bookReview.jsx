import Button from '@mui/material/Button';

const BookReview = (props) => {
  return (
    <div>
        <Button onClick={() => props.changeStatusRead(true)} variant="outlined">ПРОЧИТАНО</Button>
    </div>
  )
}

export default BookReview