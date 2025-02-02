import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Card from './Card';
import products from '../../data/ProductsData';

export default function ProductsCards(){
    return (
        <Box sx={{ flexGrow: 1, flexDirection: "column", justifyContent: "center" }}>
            <Grid container spacing={{ xs: 2, sm: 8, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
            {products.map((product) => (
                <Grid key={product.name} size={{ xs: 2, sm: 4, md: 4 }}>
                    <Card image={product.images[0]} name={product.name}></Card>
                </Grid>
            ))}
            </Grid>
      </Box>
    );
}