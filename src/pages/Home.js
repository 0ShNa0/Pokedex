import { Box, Typography } from '@mui/material'
import React from 'react'
import bg from '../assets/bg1.png';
import '../App.css';
import Typewriter from "typewriter-effect";

const Home = () => {
   
    
  return (
   <Box  sx={{backgroundImage: `url(${bg})`, width: '100vw',
   backgroundSize: 'cover',
   height: '100vh',
   display: 'flex',
   justifyContent: 'center',
   filter: 'brightness(0.88) contrast(1.1) saturate(1.2)' ,
   alignItems: 'center',marginTop:3}}>
        <Typewriter  
        textStyle={{
          fontFamily: 'Luckiest Guy',
          color: '#3F3D56',
          fontWeight: 1000,
          fontSize: '1.5em',
        }}
        
        cursorColor="#3F3D56"
        multiText={[
          'role-playing game based around building a small team of monsters',
          'to battle other monsters in a quest to become the best',
          'Pokémon are divided into types, such as water and fire,each with different strengths',

        ]}
        multiTextDelay={1000}
        typeSpeed={40}


/>
    <Typography variant='h3'fontFamily='Luckiest Guy' color='#004d40'>
    PokeDex
    </Typography>
   </Box>
  )
}

export default Home;