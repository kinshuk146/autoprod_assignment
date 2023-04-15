import React from 'react';
import './Enrich.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import clock from '../../assets/icons/clock.png'
import graph from '../../assets/icons/graph.png'
import magnifer from '../../assets/icons/magnifier.png'

function Enrich() {
    return (

        <div>
            <Container>
            <div className='block'>
                <h1 className="title">Enrich your product detail pages at scale</h1>
                <div className="subheading">Tackle missed keyword opportunities with our AI product description generator and get thousands of first-draft descriptions within minutes.</div>
            

            <Grid container spacing={2} className="ProductDetailsContainer">
                <Grid item xs={12} md={4}>
                <ProductDetails icon={clock} heading="Refresh seasonal content" paragraph="Keep your content fresh to improve rankings and on-page conversion. Reduce writer's block for your team by giving them a first draft of a description to work off."/>
                </Grid>
                <Grid item xs={12} md={4}>
                <ProductDetails icon={graph} heading="Increase SEO keywords" paragraph="Tackle long-tail keywords and increase your keyword coverage by creating content with AI. Lower your SEO spend and let your team focus on high-value strategy."/>
                </Grid>
                <Grid item xs={12} md={4}>
                <ProductDetails icon={magnifer} heading="Improve conversion rates" paragraph="Product descriptions convert because they educate customers on key product features and benefits. A/B test your highest-conversion copy with all the variations provided by AI."/>
                </Grid>
            </Grid>
            </div>
            </Container>
        </div>
    )
}

export default Enrich
