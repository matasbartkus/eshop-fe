import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider  from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import navBarItems from './NavBarItems/NavBarItems';
import { Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const NavBar = () =>{

  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = (newOpen: boolean) => () => {
    setOpen(newOpen);
  }

  const DrawerList = (
    <Box
      sx={{ width: 240, textAlign: "center" }} onClick={handleDrawerToggle(false)}
      role="presentation">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          modWatches
       </Typography>
       <Divider></Divider>
       <List>
         {navBarItems.Buttons.map(({ label, link }) => (
           <ListItem key={label} disablePadding>
             <ListItemButton href={link} sx={{textAlign: "center"}}>
               <ListItemText primary={label} ></ListItemText>
             </ListItemButton>
           </ListItem>
         ))}
       </List>
    </Box>
  )
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar sx={{
        bgcolor: "#242424"
      }}>
        <Toolbar>
        <Typography 
            variant="h6"
            noWrap
            component="div"
            sx={{mr: 2, display: {xs: "none", md: "flex"}}}>
              <Link 
                to={navBarItems.Home.link} 
                style={{ textDecoration: "none", color: "inherit" }}>
                  {navBarItems.Home.label}
              </Link>
          </Typography>
          <Box 
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle(true)}
              sx={{ mr: 2,  }}
            >
              <MenuIcon />
              <Drawer open={open} 
                onClose={handleDrawerToggle(false)}
                variant="temporary"
                >
                {DrawerList}
              </Drawer>
            </IconButton>
          </Box>
          <Typography 
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
              <Link 
                to={navBarItems.Home.link} 
                style={{ textDecoration: "none", color: "inherit" }}>
                  {navBarItems.Home.label}
              </Link>
          </Typography>
          <Box sx={{flexGrow: 1}} />
          <Box sx={{display: {xs: "none", md: "flex"}}}>
            {navBarItems.Buttons.map(({label, link}) => (
              <Button color="inherit" component={Link} to={link}>
                {label}
              </Button>
            ))}
          </Box>
          <IconButton
          color="inherit"
          size="large"
          sx={{mr: 1}}
          >
            <Link to={navBarItems.Facebook.link} 
            style={{textDecoration:"none", color:"inherit"}}>
              <FacebookIcon>
              </FacebookIcon>
            </Link>
          </IconButton>
          <IconButton
            color="inherit"
            size="large"
            sx={{mr: 1}}
          >
            <Link to={navBarItems.Instagram.link} 
            style={{textDecoration:"none", color:"inherit"}}>
              <InstagramIcon>
              </InstagramIcon>
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
  
export default NavBar;