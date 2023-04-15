import React from 'react'
import Grid from '@mui/material/Grid';
import heatherGrey from '../../assets/heatherGrey.png';
import './Header.css'
import { Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import shopify from '../../assets/shopify.png';
import Container from '@mui/material/Container';
import BackgroundImg from '../../assets/backgound1.png';

function Header() {

    const editBackground=(img)=>{
        return img;
    }

    return (
        <div className="Header" style={{backgroundImage:BackgroundImg}}>
            <Container>
            <Grid container className='HeaderContent'>
                <Grid item xs={12} md={6} paddingLeft={'3rem'} paddingTop={'1.75rem'}>
                    <h3 className="heading">AI PRODUCT DESCRIPTION GENERATOR</h3>
                    <div className="SubHeading"><h1>Manage and write product descriptions using AI</h1></div>
                    <div className="Text">Get high-converting, SEO friendly product descriptions, or rewrite them 10x faster using AI. Beat your competition with enriched product detail pages.</div>
                    <Button className="HeaderButton"variant="contained" style={{backgroundColor:'#584cd4',borderRadius:'10px',textTransform:'none',fontSize:'16px',marginTop:'2rem'}}>Try for free<ArrowRightAltIcon/></Button>
                    <div> Also available for: <img className="shopifyImg" src={shopify}></img></div>
                </Grid>
                <Grid item xs={0} md={6}>
                    <img src={heatherGrey} className='heatherGreyImg'/>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}

export default Header
