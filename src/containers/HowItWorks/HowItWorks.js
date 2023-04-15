import React from 'react'
import './HowItWorks.css'
import  Container  from '@mui/material/Container';
import HowItWorksBox from '../../components/HowItWorksBox/HowItWorksBox';

import ExportProducts from '../../assets/ExportProducts.png';
import BulkGenerate from '../../assets/BulkGenerate.png';
import casualFreshCreative from '../../assets/casualFreshCreative.png';
import importProducts from '../../assets/importProducts.png';
import regenerate from '../../assets/regenerate.png'

function HowItWorks() {
    return (
        <div >
            <Container>
            <div className='HowItWorks'>
                <h1>How it works</h1>
                <div>Transform product data into engaging, high-conversion stories and product descriptions. All in your tailored brand voice.</div>
            </div>
            <div className="HowItWorksBoxes">
            <HowItWorksBox number="1" image={importProducts } content="" position="left" title="Step 1: Import product attributes or manufacturer descriptions" bullets={['Easily import attributes or manufacturer descriptions for our AI to write about or rewrite','Handles various formats from multiple channels, PIMs or CMS platforms','Custom CMS? We can handle custom import formats.']} description="Import CSV files or connect to your PIM, e-commerce platform or CMS to automatically have your product details ready for generation."/>
            <HowItWorksBox number="2" image={casualFreshCreative} position="right" paragraph="The perfect pair of lace-up sneakers for any occasion. A classic design that will never go out of style, these sneakers are designed with comfort in mind. Ready to take on the city streets or for a relaxing day at the park, these shoes are versatile and can be worn anywhere." title="Step 2: Generate or rewrite product descriptions in bulk" description="Bring your products to life with a click. Instantly generate product descriptions from your product attributes and include SEO keywords." bullets={['Multiple tones to select from for your unique copywriting style','One-click product description generator for bulk batches of SKUs','Our AI takes in product data and existing descriptions to generate or rewrite fresh and accurate descriptions']}/>
            <HowItWorksBox number="3" content="true" image={regenerate} position="left" heading="Creative" paragraph="The perfect pair of lace-up sneakers for any occasion. A classic design that will never go out of style, these sneakers are designed with comfort in mind. Ready to take on the city streets or for a relaxing day at the park, these shoes are versatile and can be worn anywhere." title="Step 3: Edit your description to add finishing touches" description="Edit generated copy directly and seamlessly in one place, with an organized workflow that keeps up with your pace." bullets={['Easily see inserted SEO keywords highlighted in generated descriptions','Categorize and mark products as complete to power through editing and organizing product descriptions','Provide feedback as you go to the AI for improved, tailored copywriting over time']} />
            <HowItWorksBox number="4" image={ExportProducts} position="right" title="Step 4: Export products with ease" description="Sync right back into your CMS or product information management systems to get your products to market faster and easier." bullets={['Exports in the exact format you imported in','Need any specific description formatting, like bullet points or HTML formatting for your descriptions? Talk to us.']}/>
            <div></div>
            </div>
            

            </Container>
        </div>
    )
}

export default HowItWorks
