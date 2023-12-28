import React,{useState,useEffect} from 'react'
import OutlinedCard from '../components/SmallCard';
import {Box} from'@mui/material';
import SearchBar from '../components/SearchBar';
import { fetchData } from '../utils/fetchData';


const PokeData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
   
    if (error) {
      alert(`Error:Type the correct value`);
    }
  }, [error]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await fetchData(searchTerm);
      setPokemonData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <Box >
    <SearchBar searchTerm={searchTerm} onSearch={handleSearch} onInputChange={setSearchTerm}/>
    <OutlinedCard pokemonData={pokemonData} loading={loading} error={error} searchTerm={searchTerm}/>
    </Box>
  )
}

export default PokeData