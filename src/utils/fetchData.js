import axios from 'axios';


export const fetchData = async (searchTerm) => {
           
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
      };

  


