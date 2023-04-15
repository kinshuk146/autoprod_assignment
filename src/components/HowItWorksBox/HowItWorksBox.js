import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import './HowItWorksBox.css'


function HowItWorksBox(props) {
    const items=props.bullets;
    console.log(items)
    return (
        <Box
            mb={5}
            sx={{
                height: 390,
                position: 'relative',
                borderRadius: '20px',
                backgroundColor: '#f8faff',
                '&:hover': {
                },
            }}
        >
            {props.position == "left" &&
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <div className="BoxContent">
                    <h3>{props.title}</h3>
                        <div>{props.description}</div>
                        <ul>
                        {items.map(element => {
                            return <li>{element}</li>
                        })}
                        </ul>
                        </div>
                        
                    </Grid>
                    <Grid item xs={6}>
                        {props.content == "" &&
                            <img src={props.image} className="HowItWorksImg" style={{ width: '80%', marginLeft: '4rem', marginTop: '4rem' }} />
                        }

                        {props.content == "true" &&
                            <Box
                                style={{
                                    width: '80%',
                                    minHeight: '225px',
                                    backgroundColor: 'white',
                                    marginLeft: '5rem',
                                    marginTop: '5rem',
                                    borderRadius: '10px',
                                }}
                                boxShadow={3}
                            ><img src={props.image} className="HowItWorksImg" style={{ width: '60%', marginLeft: '1rem', marginTop: '0rem' }} />
                                <div className="semiContent">
                                    <h5>{props.heading}</h5>
                                    <p>{props.paragraph}</p>
                                </div>
                            </Box>
                        }
                    </Grid>
                </Grid>
            }

            {props.position == "right" &&
                <Grid container spacing={0} >
                    <Grid item xs={6}>
                        <img src={props.image} className="HowItWorksImg" style={{ width: '80%', marginLeft: '4rem', marginTop: '4rem' }} />
                    </Grid>
                    <Grid item xs={6}>
                    <div className="BoxContent">
                    <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <ul>
                        {items.map(element => {
                            return <li>{element}</li>
                        })}
                        </ul>
                        </div>
                    </Grid>
                </Grid>
            }


            <button className="HowItWorksButton">{props.number}</button>
        </Box>
    );
}

export default HowItWorksBox
