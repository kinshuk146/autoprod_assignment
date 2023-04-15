import React from 'react';
import './ProductsPopOver.css';
import { Grid } from '@mui/material';

function ProductsPopOverContent(props) {
    return (
        <div className="content">
            <Grid container spacing={2}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={10}>
                    <div className='PopOverHeading'>{props.heading}</div>
                    <div className='PopOverDescription'>{props.description}</div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductsPopOverContent
