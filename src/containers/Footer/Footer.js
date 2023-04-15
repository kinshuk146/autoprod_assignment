import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import BlueBox from '../../components/BlueBox/BlueBox';
import './Footer.css'
import logo from '../../assets/hypotenuse_logo.png'
import ycombinator from '../../assets/ycombinator.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  return (
    <div className="Footer">
      <BlueBox minWidth="80%" minHeight="350px" borderRadius="25px" heading="Ready to use your new AI writing assistant?" paragraph="Try our AI product description generator to start generating product descriptions for your PDP pages." buttonText="Try for free" icon="true"/>
      <Box sx={{ display: 'flex', flexDirection: 'row', }}>
        <CssBaseline />
        <Box className="FooterPosition" component="footer" sx={{ minHeight: '105vh', backgroundColor: '#1d2939' }}>
          <Box className="FooterContent">
            <Grid container >
              <Grid item xs={6} md={2}>
                <div style={{display:'flex', flexDirection:'row'}}>
                  <img src={logo} style={{ maxHeight: '21px', marginLeft:'0.1rem' }} />
                  <Typography
                    variant="h6"
                    component="div"
                    color="white"
                    sx={{ display: { xs: 'block', fontWeight: 'bold', marginLeft: '0.25rem', fontSize: '22px' } }}
                  >
                    Hypotenuse AI
                  </Typography>
                  </div>

                  <div className='firstcol'> Backed By
                  <div className="ycombinator"><img src={ycombinator} /> </div>
                  </div>
              </Grid>

              <Grid item xs={6} md={2} className='secondcol' >
                <div className="FooterHeading">Company</div>
                <div className="FooterSubHeading">Pricing</div>
                <div className="FooterSubHeading">Affiliates</div>
                <div className="FooterSubHeading">Careers</div>

                <div className="FooterHeading">Integrations</div>
                <div className="FooterSubHeading">Shopify</div>
                <div className="FooterSubHeading">API</div>
              </Grid>
              <Grid item xs={6} md={2}>
              </Grid>
              <Grid item xs={6} md={2} className="thirdcol">
                <div className="FooterHeading">Tools</div>
                <div className="FooterSubHeading">AI blog writer</div>
                <div className="FooterSubHeading">AI chatbot</div>
                <div className="FooterSubHeading">AI research tool</div>
                <div className="FooterSubHeading">AI image generation</div>
                <div className="FooterSubHeading">Bulk description generator</div>
                <div className="FooterSubHeading">Paraphrasing tool</div>
                <div className="FooterSubHeading">Email generator</div>
              </Grid>
              <Grid item xs={6} md={2} className="forthcol">
                <div className="FooterHeading">Resources</div>
                <div className="FooterSubHeading">Blog</div>
                <div className="FooterSubHeading">Tutorials</div>
                <div className="FooterSubHeading">Help centre</div>
                <div className="FooterSubHeading">Contact us</div>
                <div className="FooterSubHeading">Terms of service</div>
                <div className="FooterSubHeading">Privacy</div>
              </Grid>
              <Grid item xs={6} md={2}>
                <div className="FooterHeading">Compare</div>
                <div className="FooterSubHeading">Copy.ai</div>
                <div className="FooterSubHeading">ChatGPT</div>
              </Grid>
            </Grid>
        </Box>

        <Box className="LowerFooter">
          <div className='copyright'>© 2023 Hypotenuse AI. All rights reserved.</div>
          <div className="icons">
            <FacebookIcon className="icon" fontSize='large'/>
            <TwitterIcon className="icon" fontSize='large'/>
            <LinkedInIcon className="icon" fontSize='large'/>
          </div>
        </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Footer
