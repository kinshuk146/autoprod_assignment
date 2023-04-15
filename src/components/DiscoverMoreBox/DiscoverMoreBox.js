import React from 'react'
import './DiscoverMoreBox.css'
import Box from '@mui/material/Box';

function DiscoverMoreBox(props) {
  return (
    <div>
      <Box className="DiscoverMoreBox"
      sx={{
        width: 235,
        height: 115,
        borderRadius:5,
        backgroundColor:'white',
        '&:hover': {
          cursor:'pointer',
          translate:'20'
        },
      }}
    >
      <div className='DiscoverContent'>{props.content}</div>
    </Box>
    </div>
  )
}

export default DiscoverMoreBox
