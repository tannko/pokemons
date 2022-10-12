import express from 'express';
import cors from 'cors';
import { getPokemons, getPokemonsByType, getTypes } from './service.js';

const app = express();
app.use(cors());
const port = 3001;

app.get('/', (req, res) => {
    if (req.query.type !== 'ALL') {
        const pokemonsByType = getPokemonsByType(req.query.type);
        res.send(pokemonsByType);
    } else {
        const pokemons = getPokemons();
        res.send(pokemons);
    }
});

app.get('/types', (req, res) => {
    const types = getTypes();
    res.send(types);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});