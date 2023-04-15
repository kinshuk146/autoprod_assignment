import React from 'react';
import { Popover } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Box from '@mui/material/Box';
import ProductsPopOverContent from '../ProductsPopOverContent';
import { Grid } from '@mui/material';
import '../ProductsPopOver.css'

function Products() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Button aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true" 
    onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} 
    style={{ cursor:'pointer',textTransform: 'none', color: 'black', fontSize: '16px' }} 
    sx={{ display: { xs: 'none', md: 'flex', marginLeft: '6rem' }, "&:hover": { backgroundColor: "transparent" }, "&:click": { backgroundColor: "transparent" } }}>
      Products
      <KeyboardArrowDownIcon />
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
          marginLeft:'-2rem'
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} 
      >
        <Box
          sx={{
            width: 1150,
            backgroundColor: 'white',
            marginBottom:'1rem',
            borderRadius:'20px',
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={3} style={{backgroundColor:'#f9fafb',marginBottom:'-1rem',paddingBottom:'1rem'}}>
              <div className="PopHeading" style={{color:'black '}}>Features</div>
              <ProductsPopOverContent heading="Content Detective" description="Research factual content for articles"/>
              <ProductsPopOverContent heading="Hypo Chat" description="Create Stunning images"/>
              <ProductsPopOverContent heading="Hypo Art" description="Create Stunning Images"/>
              <ProductsPopOverContent heading="Batch generation" description="Generate thousands of pieces of content"/>
            </Grid>
            
            <Grid item xs={3}>
              <div className="PopHeading">SEO and Conversion</div>
              <ProductsPopOverContent heading="Blog Articles" description="Full length articles from start to finish"/>
              <ProductsPopOverContent heading="Product descriptions" description="Write product descriptions at scale"/>
              <ProductsPopOverContent heading="Headlines and slogans" description="Create bounce proof headlines and slogans"/>
            </Grid>

            <Grid item xs={3}>
              <div className="PopHeading">Paid ads and social media</div>
              <ProductsPopOverContent heading="Instagram captions" description="Create scroll stopping captions"/>
              <ProductsPopOverContent heading="Google ads" description="Create effective ads to capture leads"/>
              <ProductsPopOverContent heading="Facebook ads" description="Write ads that speak to your target market"/>
            </Grid>

            <Grid item xs={3}>
              <div className="PopHeading">Writing and brainstorming</div>
              <ProductsPopOverContent heading="Rewriting" description="Repurpose and enhance content"/>
              <ProductsPopOverContent heading="Summarizing" description="Summarize text in seconds"/>
            </Grid>
          </Grid>
        </Box>
      </Popover>
    </Button>
  )
}

export default Products
