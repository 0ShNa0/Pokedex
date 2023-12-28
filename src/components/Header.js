import React from 'react';
import { Stack } from '@mui/material';
import '../App.css'; 
import {BrowserRouter as Router,Link} from 'react-router-dom';



const Header = () => {
  
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' ,mb:{sm: '7px', xs: '11px'}}, justifyContent: 'none' ,bgcolor:'#fff'}} px="10px" >
    <Stack
    direction="row"
    gap="15px"
    fontFamily='Playfair Display'
    fontSize="27px"
    alignItems="flex-end"
    sx={{marginLeft:'30px',
    mt:{sm: '32px', xs: '20px' }
  }}
  >
    <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #ef5350'}}>Home</Link>
    <Link to="/pokedata" style={{ textDecoration: 'none', color: '#3A1212',borderBottom:'3px solid #ef5350',marginLeft:'30px'}}>PokeData</Link>

 </Stack>
 </Stack>
  );
};

export default Header;