import './ImageGenerator.css'
import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpeg'
import Button from '@mui/material/Button';


function ImageGenerator() {
    return (
        <div >
            <Container>
            <div className='block'>
                <h1 className="title">The most advanced AI product description generator</h1>
                <div className="subheading">Blaze through your copywriting with Hypotenuse's product description generation tool. Instantly generate thousands of descriptions for products in minutes.</div>
            </div>
            <Container className="imageGenerator">
                <Grid container spacing={2} mt={2} ml={3} >
                    <Grid item xs={12} md={4}>
                        <div className='subsubHeading'>1. Upload your product images</div>
                        <div className="imageStack">
                            <div className='img1'>
                                <img src={img1} className="img"></img>
                            </div>
                            <div className='img1 img2'>
                                <img src={img2} className="img"></img>
                            </div>
                            <div className='img2 img3'>
                                <img src={img3} className="img"></img>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className='subsubHeading'>2. Add product attributes or an original description</div>
                        <div className="buttons">
                        <button class="button">Value for money</button>
                        <button class="button">off-shoulder</button>
                        <button class="button">smooth fabric</button>
                        <button class="button">Ruched waist</button>
                        <button class="button">100% cotton</button>
                        <div className='or'> &#8212; <i>or</i> &#8212;</div>
                        </div>
                        <p className="desc">"Need a white dress for your next special occasion? This one's a winner. With an on-trend off-the-shoulder neckline and a flattering ruched waist, this white dress is a total winner. The cotton fabric makes it perfect for warm weather occasions, while the simple silhouette ensures that it will never go out of style."</p>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className='subsubHeading'>3. Craft fresh, unique copy instantly</div>
                        <div className="borderParagraph">Looking for a flattering, affordable white dress? Keep it simple with this off-shoulder dress. The subtle ruched waist adds a flattering silhouette and the cotton fabric is perfect for warmer weather. Wear this with a pair of wedges or flats for a feminine, stylish look.</div>
                    </Grid>
                </Grid>
            </Container>
            </Container>
        </div>
    )
}

export default ImageGenerator
