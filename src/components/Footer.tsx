import { Container, Typography, IconButton } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from "react";
import Copyright from "./Copyright";
import { Link } from 'react-router-dom';
import navBarItems from "./NavBarItems/NavBarItems";

export default function Footer()
{
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        }}>
            <footer style={{
                marginTop: 'auto',
                backgroundColor: '#242424',
                padding: 3,
            }}>
                <Container maxWidth="sm">
                <Typography variant="body1">
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
                </Typography>
                <Copyright />
                </Container>
            </footer>
        </div>
    )
}