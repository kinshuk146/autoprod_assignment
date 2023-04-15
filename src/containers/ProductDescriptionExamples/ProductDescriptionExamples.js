
import './ProductDescriptionExamples.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import ProductDescriptionCard from '../../components/ProductDescriptionCard/ProductDescriptionCard';
import './ProductDescriptionExamples.css';
import React from "react";
import accessvpn from '../../assets/accessvpn.png';
import canvas from '../../assets/canvasbackpack.png';
import house from '../../assets/house.png';
import pokemon from '../../assets/pokemon.png';
import guitar from '../../assets/guitar.png';
import camera from '../../assets/camera.png';
import healthy from '../../assets/healthy.png'
import flour from '../../assets/flour.png';


function ProductDescriptionExamples() {

  return (
    <>
      <div >
        <Container>
          <div className="left">
            <div className='ProductDescriptionheading' >PRODUCT DESCRIPTION EXAMPLES</div>
            <h1 className="ProductDescriptionSubheading">Product descriptions that sell, not tell.</h1>
            <div className='ProductDescriptionparagraph'>To give you a little inspiration, we've gathered a few examples of effective and enticing product descriptions our product description generator has created.</div>
            <div className='ProductDescriptionparagraph'>Check them out, get creative, and start writing product descriptions that will showcase your products to their fullest.</div>
          </div>
          <div className="right">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ProductDescriptionCard image={accessvpn} title="AccessVPN" product="App " description="Feeling exposed? Can't seem to do anything without worrying about your security? It's only a matter of time before your data can be accessed by prying eyes. But it doesn't have to be this way. With our VPN service, you can browse the web securely and without fear of being monitored. Sign up for our service today and start browsing the internet with peace of mind."/>
                <ProductDescriptionCard image={house} title="Emil Bach House" product="Property " description="If you're a fan of Frank Lloyd Wright, this is the house for you. The Emil Bach House is a beautiful example of Wright's Prairie style, and is well worth a visit for any fan of the architect. With its horizontal lines and emphasis on natural materials, the house is a true expression of Wright's creativity. So if you're interested in architecture, or just want to see a stunning example of Wright's Prairie style, make sure to add the Emil Bach House to your list of places to visit."/>
                <ProductDescriptionCard image={guitar} title="Classic Vibe '60s Stratocaster" product="Music " description="Back in the 60s, a few guys in a garage changed musical history. Today, you can change musical history yourself. It’s a much better deal with the Classic Vibe ‘60s Stratocaster. With three single-coil pickups and a 5-way selector, you’ll be able to turn your creative impulses into pure tone. This brilliant Stratocaster gives you fantastic sound and style, as well as incredible value for money. Never has music been as easy as it is with the Classic Vibe ‘60s Stratocaster."/>
                <ProductDescriptionCard image={healthy} title="HealthyLiving Program" product="Health " description="Get your body in shape with HealthyLiving's fitness program. Whether you're looking to build muscle or tone that little bit of extra fat, you can meet your goals—and set new ones—with the BodyFit fitness program. Our workout catalog is huge. With everything from barre, yoga, Pilates, running, cycling, weights, and more, you'll be spoilt for choice. Start your free trial today to try it out for yourself. See where exercise can take you."/>
              </Grid>
              <Grid item xs={6}>
              <ProductDescriptionCard image={canvas} title="Canvas Backpack in Grey" product="Bag " description="A clean and rugged everyday carry. This backpack is made from a sturdy canvas material and features leather adjustable shoulder straps. Toss just about anything into this spacious bag for an easy transition from work to the gym or a night out. With minimal looks and a ton of storage pockets, this pack is the yellow brick road to your destination. A backpack that can keep up with your busy schedule - from work to the great outdoors."/>
              <ProductDescriptionCard image={pokemon} title="Pokemon Sword And Shield" product="Toy " description="Get ready to explore the Galar region and uncover the mystery behind the Legendary Pokémon Zacian and Zamazenta in Pokémon Sword and Shield. Available exclusively on the Nintendo Switch, follow the journey as you embark on a new adventure and discover everything this region has to offer and capture the moment and the truth along the way."/>
              <ProductDescriptionCard image={camera} title="Mirrorless Camera" product="Camera " description="Capture the action in an instant with this high-speed mirrorless camera. This camera is designed for ultimate speed, giving you the ability to capture the critical action in an instant. With a 50.1-megapixel sensor, this camera is perfect for sports or any situation where the action is over in an instant. With its high resolution and fast readout, this camera gives you the power to capture the action as it happens."/>
              <ProductDescriptionCard image={flour} title="All-purpose Flour" product="Food " description="This all-purpose flour is a staple of everyday baking. It's a flour that brings lightness, nutrition and diversity to any recipe that you might want to take on. Try taking it on in the bakery, in the kitchen or in the flavor research lab. It'll fit well everywhere you decide or need to bring it."/>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ProductDescriptionExamples
