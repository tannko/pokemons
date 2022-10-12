import fs from 'fs';

const pokemons = JSON.parse(fs.readFileSync('./data/pokedex.json'));
const types = JSON.parse(fs.readFileSync('./data/types.json'));

export function getTypes() {
    return types.map((type) => type.english);
}

export function getPokemons() {
    return pokemons;
}

export function getPokemonsByType(type) {
    return pokemons.filter((pokemon) => pokemon.type.includes(type));
}