import './ProductDetails.css'
import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function ProductDetails(props) {
  return (
    <div>
        <Box className="ProductDetails">
            <div className="ProductDiv"> <img src={props.icon}  className="icon"/>
            <div className="ProductHeading">{props.heading}</div>
            <div className="ProductParagraph">{props.paragraph}</div>
            </div>
        </Box>
    </div>
  )
}

export default ProductDetails
