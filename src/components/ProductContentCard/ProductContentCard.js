import React from 'react'
import './ProductContentCard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function ProductContentCard(props) {
  return (
    <div style={{minHeight:500 }}>
        <Card sx={{ maxWidth: 345,borderRadius:0,boxShadow:0,minHeight:500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="275"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom component="div">
            {props.heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.paragraph}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default ProductContentCard
