import React from 'react'
import { Container } from '@mui/material';
import './ProductContent.css'
import ProductContentCard from '../../components/ProductContentCard/ProductContentCard';
import { Grid } from '@mui/material';
import productcontentcard1 from '../../assets/productcontentcard1.png'
import productcontentcard2 from '../../assets/productcontentcard2.png'
import productcontentcard3 from '../../assets/productcontentcard3.png'


function ProductContent() {
  return (
    <div className="ProductContent">
      <Container >
        <div className='CenterAlign' >
          <div className="ProductContentHeading">Thinking about your product detail page strategy?</div>
          <div className="ProductContentSubHeading">We've collected all the resources and tips you need to craft stellar product content.</div>
        </div>
        <Grid container style={{marginLeft:'auto',marginRight:'auto',marginTop:'4rem'}}>
          <Grid item xs={12} md={4}>
          <ProductContentCard image={productcontentcard1} heading="Taking Your Revenue To The Next Level with Product Content" paragraph="An all-you-need-to know guide on maximizing revenue for your e-commerce store through product content and copywriting"/>
          </Grid>
          <Grid item xs={12} md={4}>
          <ProductContentCard image={productcontentcard2} heading="Facing Writer's Block? Use these Product Description Templates" paragraph="Adopting the headless e-commerce structure is a significant decision for your business. Learn whether your business is a good candidate"/>
          </Grid>
          <Grid item xs={12} md={4}>
          <ProductContentCard image={productcontentcard3} heading="A Product Description Study Guide " paragraph="What goes into a product description? Read this guide to the anatomy of a product description, from brand voice and USP's, to SEO and prose"/>
          </Grid>
        </Grid>

      </Container>
    </div>
  )
}

export default ProductContent
