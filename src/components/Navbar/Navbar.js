import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../assets/hypotenuse_logo.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './Navbar.css'
import  Container  from '@mui/material/Container';
import Products from './NavbarButtons/Products';
import Integrations from './NavbarButtons/Integrations';
import Pricing from './NavbarButtons/Pricing';
import Business from './NavbarButtons/Business';
import Resources from './NavbarButtons/Resources';

function DrawerAppBar(props) {
  const { window } = props; 
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
          {/* <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem> */}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box container sx={{ display: 'flex',flexDirection:'column' }}>
      <Container>
      <CssBaseline />
      <AppBar className='navbar' container component="nav" elevation="0" style={{ backgroundColor:'white',opacity:'96%'}} >
       <Toolbar>
            <img src={logo} style={{maxHeight:'21px',marginLeft:'7rem'}}/>
             <Typography
            variant="h6"
            component="div"
            color="black"
            sx={{ display: { xs: 'block',fontWeight:'bold',marginLeft:'0.25rem',fontSize:'22px' } }}
          >
            Hypotenuse AI
          </Typography>
          <Products/>
          <Integrations/>
          <Pricing/>
          <Business/>
          <Resources/>
          <Button style={{textTransform:'none',color:'black',fontSize:'16px' }} sx={{display: { xs: 'none',md:'flex',marginLeft:'4rem' },"&:hover": {backgroundColor: "transparent" },"&:click":{backgroundColor: "transparent"} }}>
            Login
          </Button>
          <Button variant="contained" style={{backgroundColor:'#584cd4',borderRadius:'10px',textTransform:'none',fontSize:'16px',marginLeft:'1.9rem'}} sx={{display: { xs: 'none',md:'flex'}}}>Try for free<ArrowRightAltIcon/></Button>

          </Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' },justifyContent:'right',marginTop:'-3rem' }}
          >
            <MenuIcon />
          </IconButton>
      </AppBar>
      <Box component="nav">
        <Drawer
        anchor={'top'}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
      </Container>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;