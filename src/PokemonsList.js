import { useEffect, useState } from 'react';
import PokemonInfo from './PokemonInfo';
import { Grid } from '@mui/material';

function PokemonsList(props) {
    const [pokemonsList, setPokemonsList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/?" + new URLSearchParams({ "type": props.type }))
            .then((res) => res.json())
            .then((result) => {
                setPokemonsList(result);
            });
    }, [props.type]);
    const gridToRender = pokemonsList.map((pokemon) => <Grid item xs={2} key={pokemon.id}><PokemonInfo info={pokemon}/></Grid>);
    return (
        <Grid container spacing={2}>
            {gridToRender}
        </Grid>
    );
}

export default PokemonsList;