import logo from './logo.svg';
import './App.css';
import fetchData from './utils/fetchData';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import PokeData from './pages/PokeData';
import {Box} from '@mui/material';
import Home from './pages/Home';
function App() {


  return (
  
    <Box width="450px" sx={{ width: { xl: '1488px' } }} m="auto">
        
       <BrowserRouter> 
       <Header/>
        <Routes>      
        <Route exact path="/" element={<Home/>} /> 
        <Route exact path="/pokedata" element={<PokeData/>} /> 
         </Routes>
      </BrowserRouter> 
      </Box>

   
  );
}

export default App;
