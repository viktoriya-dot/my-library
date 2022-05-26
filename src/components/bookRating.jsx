import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';



const BookRating = (props) => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <Typography sx={{mb:'10px'}} component="legend">Моя оценка</Typography>
      <Rating sx={{color:'#FFDE6B', mb:'10px'}}
        disabled={props.readed?false:'disabled'}
        value={value}
        onChange={(event , newValue ) => {
          setValue(newValue);
        }}
      />
    </div>
  )
}

export default BookRating