import { Box, InputLabel, MenuItem, Select, FormControl } from "@mui/material";
import { useState } from 'react';

function DropDown(props) {
    const [type, setType] = useState('ALL');
    const options = props.types.map((type) => <MenuItem value={type} key={type}>{type}</MenuItem>);
    options.unshift(<MenuItem value='ALL' key={'ALL'}>ALL</MenuItem>)
    return (
        <Box sx={{ m: 2, display: 'flex', justifyContent: 'center' }}>
          <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="pokemons_select_label">Type</InputLabel>
          <Select 
            labelId="pokemons_select_label" 
            id="pokemons_select" 
            value={type} 
            label="Type" 
            onChange={handleChange}
            autoWidth={false}
          >
            {options}
          </Select>
          </FormControl>
        </Box>
    );

    function handleChange(event) {
      setType(event.target.value);
      props.handleChange(event);
    }

  }

export default DropDown;