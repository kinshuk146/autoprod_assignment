import React from 'react';
import {Popover} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {Box} from '@mui/material';
import '../ProductsPopOver.css'

function Resources() {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);


  return (
    <Button aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        style={{textTransform:'none',color:'black',fontSize:'16px' }} sx={{display: { xs: 'none',md:'flex',marginLeft:'0.9rem' },"&:hover": {backgroundColor: "transparent" },"&:click":{backgroundColor: "transparent"} }}>
            Resources
            <KeyboardArrowDownIcon/>
            <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
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
      >
        <Box
      sx={{
        width: 300,
        height: 100,
        backgroundColor: 'white',
        paddingLeft:'2rem',
      }}
    ><div className='PopOverHeading'>Blog</div>
    <div className='PopOverHeading'>Affiliates</div></Box>
      </Popover>
    </Button>
  )
}

export default Resources
