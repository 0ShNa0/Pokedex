
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = ({ onSearch, onInputChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    value==''?setSearchTerm(null):setSearchTerm(value);
    value==''?onInputChange(null):onInputChange(value); 
    
  };

  const handleSearch = () => {
    onSearch(searchTerm); 
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }} sx={{bgColor:'#fff'}}>
      <TextField
        label="Search Pokemon Name..."
        variant="outlined"
        value={searchTerm}
        onChange={handleInputChange}
        
        style={{ marginRight: '8px' }}
        sx={{marginLeft:'140px',marginTop:'70px',width:'75%',color:'#fff'}}
      />
      <IconButton aria-label="Search" sx={{marginTop:'70px'}} style={{position:'relative'}} onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;
         
