import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css';
import pk from '../assets/pk.jpeg';

const OutlinedCard=({ pokemonData, loading,searchTerm}) =>{
  const statsArray =pokemonData && pokemonData.stats?pokemonData.stats.map(stat => ({
    name: stat.stat.name,
    value: stat.base_stat,
  })):[];

  
  return (
   
    <Box
    sx={{
      width: '75%',
      display: 'flex',
      height: '55%',
      alignItems: 'center',
      justifyContent:'center',
      p: 12,
      borderRadius: '33px',
      marginLeft:'55px'
    }}
    style={{ position: 'relative' }}
  >
  {(!searchTerm || searchTerm=='') && <img src={pk} sx={{
      
      width: '100%',
      height: '55%',
      justifyContent:'center'}}/>
  }
  {searchTerm && pokemonData &&
    <Card
      variant="outlined"
      sx={{
      
        width: { lg: '650px', sm: '350px', xs: '200px' },
        height: { lg: '500px', sm: '340px', xs: '195px' },
        justifyContent:'center',
        bgcolor:'#ab003c',
      }}
    >
      <CardContent>
        {loading && <Typography variant="h5" color="#fff">Loading...</Typography>}
        {pokemonData && (
          <React.Fragment>
            <Typography sx={{ fontSize: 36, fontFamily: 'Luckiest Guy' }} style={{ borderBottom: '3px solid #263238' }} color="#fff" gutterBottom>
              {pokemonData.name} 
            </Typography>
            
    <Typography sx={{ fontFamily: 'DM Serif Display',fontSize:24 }} color="#fff" align="left">
              ID: {pokemonData.id}
            </Typography>
            <Typography sx={{ fontFamily: 'DM Serif Display', fontSize:24}} color="#fff" align="left">
              Types: {pokemonData.types.map((pokemon) => pokemon.type.name).join(', ')}
            </Typography>
            <Typography sx={{ fontFamily: 'DM Serif Display', fontSize:24}} color="#fff" align="left">
             Abilities: {pokemonData.abilities.map(ability => ability.ability.name)}
            </Typography>
            <Typography sx={{ fontFamily: 'DM Serif Display', fontSize:24}} color="#fff" align="left">
             Base Experience: {pokemonData.base_experience}
            </Typography>
           {statsArray && <Typography sx={{ fontFamily: 'DM Serif Display', fontSize:24}} color="#fff" align="left">
            STATS:</Typography>}
            <Typography sx={{ fontFamily: 'DM Serif Display', fontSize:24}} color="#fff" align="left">{statsArray.map((stat, index) => (
  <div key={index}>
   {stat.name}
  Value: {stat.value}
  </div>
))}
</Typography>
          </React.Fragment>)};
      
      </CardContent>
    </Card> }
    <div>
    {searchTerm && pokemonData && pokemonData.sprites && pokemonData.sprites.front_default && (
      <img
        src={pokemonData.sprites.front_default}
        alt={pokemonData.name}
        style={{ width: '400px', height: '400px' }} 
       position='relative'
      
      />
    )}
  </div>

  </Box>
  );
}
export default OutlinedCard;