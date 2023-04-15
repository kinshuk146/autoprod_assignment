import React from 'react';
import {Popover} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Pricing() {
  return (
    <Button style={{textTransform:'none',color:'black',fontSize:'16px' }} sx={{display: { xs: 'none',md:'flex',marginLeft:'0.9rem' },"&:hover": {backgroundColor: "transparent" },"&:click":{backgroundColor: "transparent"} }}>
            Pricing
    </Button>
  )
}

export default Pricing
