import './DiscoverMore.css'
import React from 'react'
import { Container } from '@mui/material';
import { Grid } from '@mui/material'
import DiscoverMoreBox from '../../components/DiscoverMoreBox/DiscoverMoreBox';

function DiscoverMore() {
    return (
        <div className='DiscoverMore'>
            <Container>
                <div className="DiscoverHeading" >Discover more tools</div>
            <Grid container className="ContainerBoxes">
                <Grid item xs={12} md={3}>
                    <DiscoverMoreBox content="AI image generator"/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <DiscoverMoreBox content="Caption Generator"/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <DiscoverMoreBox content="Google ad generator"/>
                </Grid>
                <Grid item xs={12} md={3} >
                    <DiscoverMoreBox content="Facebook ad generator"/>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}

export default DiscoverMore
