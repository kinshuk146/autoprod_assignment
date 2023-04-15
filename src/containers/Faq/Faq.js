import React from 'react';
import { Container } from '@mui/material';
import Accordion from '../../components/Accordion/Accordion';
import BlueBox from '../../components/BlueBox/BlueBox';
import './Faq.css'

function Faq() {

  // const faqs = [
  //   {
  //     title= "What languages do you support?",
  //     content="Hypotenuse currently supports:",
  //     bullets:"true",
  //     bulletcontent=[>,"Bulgarian","Chinese","Danish","Dutch","Estonian","French","German","Greek","Hungarian","Italian","Japanese","Lithuanian","Norwegian","Polish","Portuguese","Romanian","Russian","Slovak","Slovenian","Spanish","Swedish"],
  //     lowercontent=" We're constantly improving and expanding our suite of tools, so do reach out even if you don't see your need supported yet — yours may just be in our beta program!"
  //   },
  // ];

  return (
    <div className='Faq'>
        <Container>
          <div className="FaqBox">
          <BlueBox maxWidth="90%" minHeight="280px" borderRadius="25px" heading="Custom brand voice or format?" paragraph="Request a demo to chat about how we can improve your PDPs everywhere." buttonText="Request demo"/>
          </div>
        <h1>FAQ</h1>

        <div>
        <Accordion title= "What product categories do you support?" content="Hypotenuse isn't only limited to a specific niche. In fact, we are currently working with brands of various product categories across the retail industry. We have clients spanning across fashion, furniture, tools, toys & hobbies, and many, many more. Request a demo with us if you are unsure!"/>
        <Accordion title= "Are generated descriptions unique?" content="Each description is generated from scratch, so you get unique content each time. We ensure that no two descriptions are exactly the same, and offer a range of styles & tones to make the product descriptions uniquely you!"/>
        <Accordion title="What is a Product Detail Page (PDP)?" content="A PDP is a page on an e-commerce site that conveys important information about a particular product. For example, if the product in question is a sofa, the PDP might contain its dimensions, material, available colors, pictures from several angles, its collection, information delivery and warranty, and buyer reviews. These pages help consumers make an informed decision about choosing products and whether or not to make that purchase."/>
        <Accordion title="Will generated descriptions be duplicated if my products are all very similar?"    content="Our AI product description generator will never produce duplicate content. It has a wide understanding of sentence structures and a range of vocabulary, so even if the exact same product is given twice, it will always generate unique, one-of-a-kind descriptions for you."/>
        <Accordion title="Can you generate Amazon, eBay and Walmart descriptions?"    content="We understand the needs of multi-channel sellers - our AI can automatically generate title and product descriptions to fulfill the requirements of Walmart, eBay and Amazon. Each channel has its own technical, linguistic and stylistic restraints, and we can make copywriting for these platforms easy, all while maintaining your unique brand voice.Our product description generator will maintain the structure that fills your store's needs - whether it be a list of technical benefits, prose and emotive imagery, or something in between. Our AI can instantly generate product descriptions to match your chosen form and structure - while boosting SEO with unique content that Google loves!"/>
        <Accordion title= "What languages do you support?" content="Hypotenuse currently supports: <br> <ul><li>English</li><li>Bulgarian</li><li>Chinese</li><li>Danish</li><li>Dutch</li><li>Estonian</li><li>French</li><li>German</li><li>Greek</li><li>Hungarian</li><li>Italian</li><li>Japanese</li><li>Lithuanian</li><li>Norwegian</li><li>Polish</li><li>Portuguese</li><li>Romanian</li></ul> <br> We're constantly improving and expanding our suite of tools, so do reach out even if you don't see your need supported yet — yours may just be in our beta program!"/>
        <Accordion title="Can you generate product description bullet points?"  content="Yes, we can generate bullet points for your product descriptions, whether they're Amazon-type bullet points or general bullet points."/>
        <Accordion title="Will Google penalize me for using an AI product descriptions generator?"    content="The short answer: not with Hypotenuse AI.When it comes to SEO for product descriptions, having original content and the right keywords are 2 important factors that are rewarded by search engines when ranking your e-commerce site. The reason why many AI product description generators end up bringing more harm than benefit to your SEO rankings is because they give you content which is either repetitive, duplicated or lack relevance (especially in keywords) to your product. We've built our AI copywriting tools from the ground up with SEO and product content in mind. We guarantee that none of our descriptions that we have generated is duplicated — even if you upload the same product twice. On top of that, Hypotenuse crafts your copy in a manner which is specific to your product and brand voice. In other words, we guarantee uniqueness while providing keyword inclusion and SEO wins."/>
      </div>
        <div>
            
        </div>
      </Container>
    </div>
  )
}

export default Faq
