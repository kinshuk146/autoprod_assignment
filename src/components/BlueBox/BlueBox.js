import './BlueBox.css'
import { Box } from '@mui/material';
import { Container } from '@mui/material'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import React from 'react'

function BlueBox(props) {
  return (
    <div>
      <Container>
        <Box style={{ backgroundColor: '#3a00b7', borderRadius: props.borderRadius, minWidth: props.minWidth, minHeight: props.minHeight,maxWidth:props.maxWidth }}>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <div className="BlueBoxText">
                <div className="BlueBoxHeading">{props.heading}</div>
                <div className="BlueBoxParagraph">{props.paragraph}</div>
                </div>
              </Grid>
              <Grid item xs={4}>
              <Button className="BlueBoxButton"variant="contained" style={{backgroundColor:'#584cd4',borderRadius:'10px',textTransform:'none',fontSize:'16px',marginTop:'2rem',boxShadow:'0',marginTop:'8rem',marginLeft:'4rem'}}>{props.buttonText}
              {props.icon=='true'&&<ArrowRightAltIcon/>}</Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </div>
  )
}

export default BlueBox;
