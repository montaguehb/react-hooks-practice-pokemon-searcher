import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, search}) {
  const mappedPokemon = pokemon.filter(poke => poke.name.includes(search)).map(poke => <PokemonCard {...poke} key={poke.id}/>)
  return (
    <Card.Group itemsPerRow={6}>
      {mappedPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
