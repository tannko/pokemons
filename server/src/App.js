import { useEffect, useState } from 'react';
import DropDown from './DropDown';
import PokemonsList from './PokemonsList';
import { Box } from '@mui/material';

function App() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('ALL');

  useEffect(() => {
    fetch("http://localhost:3001/types")
      .then(res => res.json())
      .then((res) => {
        setTypes(res);
    });
  }, []);
  

  return (
    <Box sx={{ m: 3 }}>
      <h1>Pokemons</h1>
      <DropDown types={types} handleChange={handleChange}/>
      <PokemonsList type={selectedType}/>
    </Box>
  );

  function handleChange(event) {
    setSelectedType(event.target.value);
  }
}



export default App;
