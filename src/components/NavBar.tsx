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
import ShoppingBag  from '@mui/icons-material/ShoppingBagOutlined';
import navBarItems from './NavBarItems/NavBarItems';
import { Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const NavBar = (props: Props) => {
  const { window } = props;
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}
      sx={{textAlign: "center"}}
      >
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Watches
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
  );
  
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1, display: "flex"
     }}>
      <AppBar sx={{
        bgcolor: "#242424"
      }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2,  }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
            to={navBarItems.Home.link}
            style={{textDecoration:"none", color:"inherit"}}
            >
              {navBarItems.Home.label}
            </Link>
          </Typography>
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer 
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
export default NavBar;